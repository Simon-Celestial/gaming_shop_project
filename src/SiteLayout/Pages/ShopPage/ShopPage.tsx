import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import styles from "./ShopPage.module.scss";
import {PageBanner} from "../../Components/Reusables/PageBanner/PageBanner.tsx";
import React, {useCallback, useState} from "react";
import {Rating, Slider, Stack} from "@mui/material";
import {DeviceCard} from "../../Components/Reusables/DeviceCard/DeviceCard.tsx";
import Pagination from '@mui/material/Pagination';

export const ShopPage = () => {
    const [value, setValue] = useState<number[]>([0, 1000]);
    const [sortOption, setSortOption] = useState("default");

    const handleChange = useCallback((_event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    }, [setValue]);

    const handleChangeSorting = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    }, [setSortOption])


    return (
        <>
            <Header/>
            <main className={styles.shopWrapper}>
                <PageBanner greenText={"Shop"} whiteText={""} smallText={"Play · Improve · Win"}/>
                <section className={styles.productsSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.allFilters}>
                            <h2>Filter</h2>
                            <div className={styles.filterBox}>
                                <h2>category</h2>
                                <div className={styles.filterOptions}>
                                    <p>GPU</p> <p>(1)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>CPU</p> <p>(6)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Headset</p> <p>(4)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Keyboard</p> <p>(3)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Speakers</p> <p>(0)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Uncategorized</p> <p>(2)</p>
                                </div>
                            </div>
                            <div className={styles.filterBox}>
                                <h2>color</h2>
                                <div className={styles.filterOptions}>
                                    <p>Black</p> <p>(1)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>White</p> <p>(6)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Brown</p> <p>(4)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Gray</p> <p>(3)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Green</p> <p>(0)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Red</p> <p>(2)</p>
                                </div>
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
                                <div className={styles.filterOptions}>
                                    <p>Asus</p> <p>(1)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Logitech</p> <p>(6)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>A4tech</p> <p>(4)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Zowie</p> <p>(3)</p>
                                </div>
                                <div className={styles.filterOptions}>
                                    <p>Razer</p> <p>(0)</p>
                                </div>
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
                                <div className={styles.productCard}>
                                    <DeviceCard/>
                                </div>
                                <div className={styles.productCard}>
                                    <DeviceCard/>
                                </div>
                                <div className={styles.productCard}>
                                    <DeviceCard/>
                                </div>
                                <div className={styles.productCard}>
                                    <DeviceCard/>
                                </div>
                                <div className={styles.productCard}>
                                    <DeviceCard/>
                                </div>
                                <div className={styles.productCard}>
                                    <DeviceCard/>
                                </div>
                                <div className={styles.productCard}>
                                    <DeviceCard/>
                                </div>
                                <div className={styles.productCard}>
                                    <DeviceCard/>
                                </div>
                                <div className={styles.productCard}>
                                    <DeviceCard/>
                                </div>


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
            </main>
            <FooterTwo/>
        </>
    );
};
