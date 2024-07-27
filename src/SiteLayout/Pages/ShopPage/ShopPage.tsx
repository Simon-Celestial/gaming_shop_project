import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import styles from "./ShopPage.module.scss";
import {PageBanner} from "../../Components/Reusables/PageBanner/PageBanner.tsx";
import React, {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {Rating, Slider, Stack} from "@mui/material";
import {DeviceCard} from "../../Components/Reusables/DeviceCard/DeviceCard.tsx";
import Pagination from '@mui/material/Pagination';
import {DataContext} from "../../../Context/DataContext/DataContext.tsx";
import {Loader} from "../../Components/Reusables/Loader/Loader.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper/modules";
import SearchIcon from '@mui/icons-material/Search';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import customersCommentsData from "/public/data/CommentsData/customersCommentsData.json";
import {useTranslation} from "react-i18next";
import {CUSTOMERS_COMMENTS_DATA} from "../../../Types/types.ts";

export const ShopPage = () => {
    const {
        productsData,
        productsLoading
    } = useContext(DataContext);

    const [value, setValue] = useState<number[]>([0, 1000]);
    const [translatedComments, setTranslatedComments] = useState(customersCommentsData.en)
    const [sortOption, setSortOption] = useState("default");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const ALL_CATEGORIES = useMemo(() => Array.from(new Set(productsData?.map(it => it.category))), [productsData]);
    const ALL_COLORS = useMemo(() => {
        const colorsArray = productsData?.flatMap(it => it.colors) || [];
        return Array.from(new Set(colorsArray));
    }, [productsData]);
    const ALL_BRANDS = useMemo(() => Array.from(new Set(productsData?.map(it => it.brand))), [productsData]);

    const {i18n} = useTranslation();

    // 1) DATA FILTERED WITH SEARCH PARAMETERS
    const filteredBySearchData = useMemo(() => {
        return productsData?.filter(it => it?.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [productsData, searchTerm]);

    // 2) DATA FILTERED BY CATEGORIES
    const filteredByCategoryData = useMemo(() => {
        if (selectedCategories.length === 0) {
            return filteredBySearchData;
        } else {
            return filteredBySearchData.filter(product =>
                selectedCategories.some(category => product?.category.toLowerCase() === category?.toLowerCase())
            );
        }
    }, [filteredBySearchData, selectedCategories])

    // 3) DATA FILTERED BY COLORS
    const filteredByColorsData = useMemo(() => {
        if (selectedColors.length === 0) {
            return filteredByCategoryData;
        } else {
            return filteredByCategoryData?.filter(product =>
                selectedColors.some(color => product?.colors.includes(color))
            );
        }
    }, [filteredByCategoryData, selectedColors])

    // 4) DATA FILTERED BY BRANDS
    const filteredByBrandsData = useMemo(() => {
        if (selectedBrands.length === 0) {
            return filteredByColorsData;
        } else {
            return filteredByColorsData?.filter(product =>
                selectedBrands.some(brand => product?.brand === brand)
            );
        }
    }, [filteredByColorsData, selectedBrands])



    // FUNCTION TO UPDATE "searchTerm" WITH SEARCH PARAMETERS
    const handleSearchProducts = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, [setSearchTerm]);

    // FUNCTION TO SELECT CATEGORY, AND ADD IT TO "selectedCategory"
    const handleCategorySelection = useCallback((category: string) => {
        setSelectedCategories(prevState =>
            prevState.includes(category)
                ? prevState.filter(it => it !== category)
                : [...prevState, category]
        );
    }, [setSelectedCategories]);

    // FUNCTION TO SELECT COLOR, AND ADD IT TO "selectedColors"
    const handleColorSelection = useCallback((color: string) => {
        setSelectedColors(prevState =>
            prevState.includes(color)
                ? prevState.filter(it => it !== color)
                : [...prevState, color]
        );
    }, [setSelectedColors]);

    // FUNCTION TO SELECT BRAND, AND ADD IT TO "selectedBrands"
    const handleBrandSelection = useCallback((brand: string) => {
        setSelectedBrands(prevState =>
            prevState.includes(brand)
                ? prevState.filter(it => it !== brand)
                : [...prevState, brand]
        );
    }, [setSelectedBrands]);


    const handleChange = useCallback((_event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    }, [setValue]);

    const handleChangeSorting = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    }, [setSortOption])

    // useEffect TO CHANGE LANGUAGE
    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedComments(customersCommentsData.en);
        } else if (i18n.language === "ru") {
            setTranslatedComments(customersCommentsData.ru);
        } else {
            setTranslatedComments(customersCommentsData.tr);
        }
    }, [i18n.language]);

    return (
        <>
            {
                productsLoading && <Loader/>
            }
            <Header/>
            <main className={styles.shopWrapper}>
                <PageBanner greenText={"Shop"} whiteText={""} smallText={"Play · Improve · Win"}/>
                <section className={styles.productsSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.allFilters}>
                            <h2>Filter</h2>
                            <div className={styles.filterBox}>
                                <h2>search</h2>
                                <div className={styles.searchContainer}>
                                    <SearchIcon/>
                                    <input
                                        value={searchTerm}
                                        onChange={handleSearchProducts}
                                        type="text"
                                        placeholder={"Type to search..."}
                                    />
                                </div>
                            </div>
                            <div className={styles.filterBox}>
                                <h2>category</h2>
                                {ALL_CATEGORIES?.map((category: string) => {
                                    const filtered = productsData?.filter(it => it?.category === category)?.length || 0;
                                    return (
                                        <div key={category}
                                             className={styles.filterOptions}
                                             onClick={() => handleCategorySelection(category)}
                                             style={{
                                                 color: selectedCategories.includes(category) ? "#0EF0AD" : "",
                                             }}
                                        >
                                            <p>{category}</p> <p>({filtered})</p>
                                        </div>

                                    )
                                })}
                            </div>
                            <div className={styles.filterBox}>
                                <h2>color</h2>
                                {ALL_COLORS?.map((color: string) => {
                                    const filtered = productsData?.filter(it => it?.colors?.includes(color))?.length || 0;
                                    return (
                                        <div
                                            key={color}
                                            className={styles.filterOptions}
                                            onClick={() => handleColorSelection(color)}
                                            style={{
                                                color: selectedColors.includes(color) ? "#0EF0AD" : "",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    textTransform: "uppercase"
                                                }}
                                            >{color}
                                            </p> <p>({filtered})</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.filterBox}>
                                <h2>price</h2>
                                <div className={styles.priceSlider}>
                                    <div className={styles.sliderWrapper}>
                                        <Slider
                                            min={0}
                                            max={1000}
                                            step={5}
                                            value={value}
                                            onChange={handleChange}
                                            sx={{
                                                '&.MuiSlider-root': {
                                                    color: '#0EF0AD'
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className={styles.buttonsBox}>
                                        <div className={styles.btn}>
                                            Filter
                                        </div>
                                        <div className={styles.btn}>
                                            Reset
                                        </div>

                                    </div>
                                    <div className={styles.sliderValue}>
                                        <p>Price: </p>${value[0].toFixed(2)} <p> — </p> ${value[1].toFixed(2)}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterBox}>
                                <h2>brand</h2>
                                {
                                    ALL_BRANDS?.map((brand: string) => {
                                        const filtered = productsData?.filter(it => it?.brand === brand)?.length || 0;
                                        return (
                                            <div
                                                key={brand}
                                                className={styles.filterOptions}
                                                onClick={()=>handleBrandSelection(brand)}
                                                style={{
                                                    color: selectedBrands.includes(brand) ? "#0EF0AD" : "",
                                                }}
                                            >
                                                <p>{brand}</p> <p>({filtered})</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.filterBox}>
                                <h2>rating</h2>
                                <div className={styles.filterOptions}>
                                    <div className={styles.rating}>
                                        <Rating
                                            name="read-only"
                                            value={5}
                                            readOnly
                                            sx={{
                                                '& .MuiRating-icon': {
                                                    color: "#0EF0AD"
                                                }
                                            }}
                                        />
                                    </div>
                                    <p>(5)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <div className={styles.rating}>
                                        <Rating
                                            name="read-only"
                                            value={4}
                                            readOnly
                                            sx={{
                                                '& .MuiRating-icon': {
                                                    color: "#0EF0AD"
                                                }
                                            }}
                                        />
                                    </div>
                                    <p>(4)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <div className={styles.rating}>
                                        <Rating
                                            name="read-only"
                                            value={3}
                                            readOnly
                                            sx={{
                                                '& .MuiRating-icon': {
                                                    color: "#0EF0AD"
                                                }
                                            }}
                                        />
                                    </div>
                                    <p>(3)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <div className={styles.rating}>
                                        <Rating
                                            name="read-only"
                                            value={2}
                                            readOnly
                                            sx={{
                                                '& .MuiRating-icon': {
                                                    color: "#0EF0AD"
                                                }
                                            }}
                                        />
                                    </div>
                                    <p>(2)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <div className={styles.rating}>
                                        <Rating
                                            name="read-only"
                                            value={1}
                                            readOnly
                                            sx={{
                                                '& .MuiRating-icon': {
                                                    color: "#0EF0AD"
                                                }
                                            }}
                                        />
                                    </div>
                                    <p>(1)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <div className={styles.rating}>
                                        <Rating
                                            name="read-only"
                                            value={0}
                                            readOnly
                                            sx={{
                                                '& .MuiRating-icon': {
                                                    color: "#0EF0AD"
                                                }
                                            }}
                                        />
                                    </div>
                                    <p>(0)</p>
                                </div>


                            </div>
                        </div>
                        <div className={styles.productsContainer}>
                            <div className={styles.sortingContainer}>
                                <p>Showing all 9 results</p>
                                <div className={styles.sort}>
                                    <select
                                        value={sortOption}
                                        onChange={handleChangeSorting}
                                    >
                                        <option value="default" disabled>
                                            Default sorting
                                        </option>
                                        <option value="latest">Sort latest</option>
                                        <option value="rating">Sort rating</option>
                                        <option value="low-high">Sort price : low-high</option>
                                        <option value="high-low">Sort price : high-low</option>
                                    </select>

                                </div>
                            </div>
                            <div className={styles.allProducts}>
                                {filteredByBrandsData?.map((product) => {
                                    return (
                                        <div key={product?.id} className={styles.productCard}>
                                            <DeviceCard data={product}/>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.pagination}>
                                <Stack spacing={2}>
                                <Pagination
                                        count={10}
                                        size="large"
                                        sx={{
                                            '& .MuiPaginationItem-root': {
                                                color: '#0EF0AD',
                                                '&.Mui-selected': {
                                                    backgroundColor: '#0EF0AD',
                                                    color: '#222434',
                                                    '&:hover': {
                                                        backgroundColor: '#09926a',
                                                    },
                                                },
                                            },
                                        }}

                                    />
                                </Stack>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.testimonialsSection}>
                    <div className={styles.sectionContent}>
                        <Swiper
                            direction={'horizontal'}
                            modules={[EffectFade, Autoplay]}
                            slidesPerView={2}
                            autoplay={{delay: 2500}}
                            breakpoints={{}}
                            spaceBetween={15}
                            freeMode={true}
                            loop={true}
                        >
                            {translatedComments?.map((data: CUSTOMERS_COMMENTS_DATA) => {
                                return (
                                    <SwiperSlide key={data?.id}>
                                        <div className={styles.commentBox}>
                                            <div className={styles.imageBox}>
                                                <img src={data?.image} alt={data?.product}/>
                                            </div>
                                            <div className={styles.title}>
                                                <h2>{data?.product}</h2>
                                                <p>{data?.comment}</p>
                                                <div className={styles.bottomRow}>
                                                    <div className={styles.userInfo}>
                                                        <div className={styles.userImg}>
                                                            <img
                                                                src={data?.userImage !== null ? data?.userImage : "/images/user.png"}
                                                                alt={data?.user}/>
                                                        </div>
                                                        <div className={styles.name}>
                                                            <h2>{data?.user}</h2>
                                                            <p>Client</p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.rating}>
                                                        <p>{data?.rating} / 5.0</p>
                                                        <Rating
                                                            name="read-only"
                                                            value={data?.rating}
                                                            readOnly
                                                            sx={{
                                                                '& .MuiRating-icon': {
                                                                    color: "#0EF0AD"
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </section>
            </main>
            <FooterTwo/>
        </>
    );
};
