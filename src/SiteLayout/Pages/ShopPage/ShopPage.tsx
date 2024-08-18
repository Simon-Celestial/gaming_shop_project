import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import styles from "./ShopPage.module.scss";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
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

// PAGINATION
const itemsPerPage = 9;


export const ShopPage = () => {
    const {
        productsData,
        productsLoading
    } = useContext(DataContext);

    const PRODUCT_MAX_PRICE = useMemo(() => {
        return productsData.length > 0 ? Math.max(...productsData.map((product) => product?.salePrice)) : 0;
    }, [productsData]);
    const [priceRange, setPriceRange] = useState<number[]>([0, PRODUCT_MAX_PRICE]);
    const [filteredPriceRange, setFilteredPriceRange] = useState<number[]>([0, PRODUCT_MAX_PRICE]);
    const [translatedComments, setTranslatedComments] = useState(customersCommentsData.en);
    const [sortOption, setSortOption] = useState("default");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedRating, setSelectedRating] = useState<number[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const ALL_CATEGORIES = useMemo(() => Array.from(new Set(productsData?.map(it => it.category))), [productsData]);
    const ALL_COLORS = useMemo(() => {
        const colorsArray = productsData?.flatMap(it => it.colors) || [];
        return Array.from(new Set(colorsArray));
    }, [productsData]);
    const ALL_BRANDS = useMemo(() => Array.from(new Set(productsData?.map(it => it.brand))), [productsData]);
    const ALL_RATINGS = useMemo(() => Array.from(new Set(productsData?.map(it => it.rating))), [productsData]);

    const {i18n,t} = useTranslation();

    const onApply = useCallback(() => {
        setFilteredPriceRange(priceRange);
    }, [priceRange]);

    // TO SET MAX PRICE VALUE WHEN PAGE LOADED
    useEffect(() => {
        setPriceRange([0, PRODUCT_MAX_PRICE]);
        setFilteredPriceRange([0, PRODUCT_MAX_PRICE]);
    }, [PRODUCT_MAX_PRICE]);


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
    }, [filteredBySearchData, selectedCategories]);

    // 3) DATA FILTERED BY COLORS
    const filteredByColorsData = useMemo(() => {
        if (selectedColors.length === 0) {
            return filteredByCategoryData;
        } else {
            return filteredByCategoryData?.filter(product =>
                selectedColors.some(color => product?.colors.includes(color))
            );
        }
    }, [filteredByCategoryData, selectedColors]);

    // 4) DATA FILTERED BY BRANDS
    const filteredByBrandsData = useMemo(() => {
        if (selectedBrands.length === 0) {
            return filteredByColorsData;
        } else {
            return filteredByColorsData?.filter(product =>
                selectedBrands.some(brand => product?.brand === brand)
            );
        }
    }, [filteredByColorsData, selectedBrands]);

    // 5) DATA FILTERED BY RATING
    const filteredByRating = useMemo(() => {
        if (selectedRating.length === 0) {
            return filteredByBrandsData;
        } else {
            return filteredByBrandsData?.filter(product =>
                selectedRating.some(rating => product?.rating === rating)
            );
        }
    }, [filteredByBrandsData, selectedRating])

    // 6) DATA FILTERED BY PRICE
    const filteredByPrice = useMemo(() => {
        return filteredByRating?.filter(product =>
            product.salePrice >= filteredPriceRange[0] && product.salePrice <= filteredPriceRange[1]
        );
    }, [filteredByRating, filteredPriceRange]);

    // DATA SORTED BY SELECTED OPTION
    const sortedProducts = useMemo(() => {
        let sortedProducts = [...filteredByPrice];

        if (sortOption === "low-high") {
            sortedProducts = sortedProducts.sort((a, b) => a.salePrice - b.salePrice);
        } else if (sortOption === "high-low") {
            sortedProducts = sortedProducts.sort((a, b) => b.salePrice - a.salePrice);
        } else if (sortOption === "rating-high-low") {
            sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating);
        } else if (sortOption === "rating-low-high") {
            sortedProducts = sortedProducts.sort((a, b) => a.rating - b.rating);
        }

        return sortedProducts;
    }, [filteredByPrice, sortOption]);


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

    // FUNCTION TO SELECT RATING, AND ADD IT TO "selectedRating"
    const handleRatingSelection = useCallback((rating: number) => {
        setSelectedRating(prevState =>
            prevState.includes(rating)
                ? prevState.filter(it => it !== rating)
                : [...prevState, rating]
        );
    }, [setSelectedRating]);


    // FUNCTION TO UPDATE SORTING OPTION
    const handleChangeSorting = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    }, [setSortOption])


    const handleChange = useCallback((_event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
    }, [setPriceRange]);


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

    // FUNCTION TO RESET ALL FILTERS
    const handleResetFilters = useCallback(() => {
        setPriceRange([0, PRODUCT_MAX_PRICE]);
        setFilteredPriceRange([0, PRODUCT_MAX_PRICE]);
        setSelectedCategories([]);
        setSelectedRating([]);
        setSelectedBrands([]);
        setSearchTerm("");
        setSelectedColors([]);
        setSortOption("default");
    }, [
        PRODUCT_MAX_PRICE,
        setPriceRange,
        setSelectedCategories, setSelectedRating,
        setSelectedBrands,
        setSearchTerm,
        setSelectedColors,
        setFilteredPriceRange,
        setSortOption
    ]);

    // PAGINATION
    const startIndex = useMemo(() => (currentPage - 1) * itemsPerPage,
        [currentPage]);
    const endIndex = useMemo(() => startIndex + itemsPerPage, [startIndex]);

    const handlePageChange = useCallback(
        (_event: React.ChangeEvent<unknown>, page: number) => {
            setCurrentPage(page);
        },
        [setCurrentPage]
    );

    const currentProducts = useMemo(() => {
        return sortedProducts?.slice(startIndex, endIndex);
    }, [sortedProducts, startIndex, endIndex]);

    useEffect(() => {
        if (sortedProducts && sortedProducts.length > 0 && endIndex > sortedProducts.length - 1) {
            setCurrentPage(Math.ceil(sortedProducts?.length / itemsPerPage));
        }

    }, [endIndex, sortedProducts, setCurrentPage]);

    return (
        <>
            {
                productsLoading && <Loader/>
            }
            <Header/>
            <main className={styles.shopWrapper}>
                <PageBanner
                    greenText={t('shopPage.greenText')}
                    whiteText={""}
                    smallText={t('shopPage.smallText')}
                />
                <section className={styles.productsSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.allFilters}>
                            <h2>{t('shopPage.filter')}</h2>
                            <div className={styles.filterBox}>
                                <h2>{t('shopPage.search')}</h2>
                                <div className={styles.searchContainer}>
                                    <SearchIcon/>
                                    <input
                                        value={searchTerm}
                                        onChange={handleSearchProducts}
                                        type="text"
                                        placeholder={t('shopPage.searchPlaceholder')}
                                    />
                                </div>
                            </div>
                            <div className={styles.filterBox}>
                                <h2>{t('shopPage.category')}</h2>
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
                                <h2>{t('shopPage.color')}</h2>
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
                                <h2>{t('shopPage.price')}</h2>
                                <div className={styles.priceSlider}>
                                    <div className={styles.sliderWrapper}>
                                        <Slider
                                            min={0}
                                            max={PRODUCT_MAX_PRICE}
                                            step={5}
                                            value={priceRange}
                                            onChange={handleChange}
                                            sx={{
                                                '&.MuiSlider-root': {
                                                    color: '#0EF0AD'
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className={styles.buttonsBox}>
                                        <div
                                            className={styles.btn}
                                            onClick={onApply}
                                            style={{
                                                fontWeight: i18n.language === "ru"? '500': ''
                                            }}
                                        >
                                            {t('shopPage.filter')}
                                        </div>
                                        <div
                                            className={styles.btn}
                                            onClick={handleResetFilters}
                                            style={{
                                                fontWeight: i18n.language === "ru"? '500': ''
                                            }}

                                        >
                                            {t('shopPage.reset')}
                                        </div>

                                    </div>
                                    <div className={styles.sliderValue}>
                                        <p>{t('shopPage.price')}: </p>${priceRange[0].toFixed(2)} <p> — </p> ${priceRange[1].toFixed(2)}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterBox}>
                                <h2>{t('shopPage.brand')}</h2>
                                {
                                    ALL_BRANDS?.map((brand: string) => {
                                        const filtered = productsData?.filter(it => it?.brand === brand)?.length || 0;
                                        return (
                                            <div
                                                key={brand}
                                                className={styles.filterOptions}
                                                onClick={() => handleBrandSelection(brand)}
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
                                <h2>{t('shopPage.rating')}</h2>
                                {ALL_RATINGS?.map((rating: number) => {
                                    const filtered = productsData?.filter(it => it?.rating === rating)?.length || 0;
                                    return (
                                        <div
                                            key={rating}
                                            className={styles.filterOptions}
                                            onClick={() => handleRatingSelection(rating)}
                                            style={{
                                                color: selectedRating.includes(rating) ? "#0EF0AD" : "",
                                            }}

                                        >
                                            <Rating
                                                name="read-only"
                                                value={rating}
                                                readOnly
                                                sx={{
                                                    '& .MuiRating-icon': {
                                                        color: selectedRating.includes(rating) ? "#0EF0AD!important" : "rgb(197, 197, 202)"
                                                    }
                                                }}
                                            />
                                            <p>({filtered})</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={styles.productsContainer}>
                            <div className={styles.sortingContainer}>
                                <p>{t('shopPage.showingAll')} {filteredByPrice?.length} {t('shopPage.results')}</p>
                                <div className={styles.sort}>
                                    <select
                                        value={sortOption}
                                        onChange={handleChangeSorting}
                                    >
                                        <option value="default" disabled>
                                            {t('shopPage.defaultSorting')}
                                        </option>
                                        <option value="rating-high-low">{t('shopPage.sortByRatingHighLow')}</option>
                                        <option value="rating-low-high">{t('shopPage.sortByRatingLowHigh')}</option>
                                        <option value="low-high">{t('shopPage.sortByPriceLowHigh')}</option>
                                        <option value="high-low">{t('shopPage.sortByPriceHighLow')}</option>
                                    </select>

                                </div>
                            </div>
                            <div className={styles.allProducts}>
                                {currentProducts?.length !== 0 ?
                                    currentProducts?.map((product) => {
                                        return (
                                            <div key={product?.id} className={styles.productCard}>
                                                <DeviceCard data={product}/>
                                            </div>
                                        )
                                    })
                                    :
                                    <div className={styles.noProducts}>
                                        {t('shopPage.noProductsFound')}
                                    </div>
                                }
                            </div>
                            {
                                currentProducts?.length !== 0 ?
                                    <div className={styles.pagination}>
                                        <Stack spacing={2}>
                                            <Pagination
                                                count={Math.ceil(sortedProducts?.length / itemsPerPage)}
                                                size="large"
                                                page={currentPage}
                                                onChange={handlePageChange}
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
                                    :
                                    null
                            }
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
                            breakpoints={{
                                1320: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                }
                            }}
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
                                                                src={data?.userImage !== null ? data?.userImage : "/images/icons/user.png"}
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
