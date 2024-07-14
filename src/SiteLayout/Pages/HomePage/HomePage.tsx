import React from "react";
import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {Footer} from "../../Components/Layout/Footer/Footer.tsx";
import {TypeAnimation} from "react-type-animation";
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';
import {DeviceCard} from "../../Components/Reusables/DeviceCard/DeviceCard.tsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


interface PaginationStyles {
    "--swiper-pagination-color": string;
    "--swiper-pagination-bullet-inactive-color": string;
    "--swiper-pagination-bullet-inactive-opacity": string;
    "--swiper-pagination-bullet-size": string;
    "--swiper-pagination-bullet-horizontal-gap": string;
    "--swiper-pagination-bottom": string;
}
const paginationStyles: PaginationStyles = {
    "--swiper-pagination-color": "#0EF0AD",
    "--swiper-pagination-bullet-inactive-color": "#c5c5ca",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "16px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
    "--swiper-pagination-bottom": "10px",
};

export const HomePage = () => {
    return (
        <>
            <Header/>
            <main className={styles.homeWrapper}>
                <section className={styles.bannerSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.titleContainer}>
                            <h4>Enjoy Gaming World</h4>
                            <h2>We Selling Devices</h2>
                            <TypeAnimation
                                sequence={['Entertainment', 600, 'Quality', 600, 'Reliability', 600]}
                                style={{fontSize: '2em'}}
                                repeat={Infinity}
                            />
                            <p>Creating innovative, fun-filled gaming devices that bring vibrant colors to your gaming
                                experience.</p>

                        </div>
                        <div className={styles.swiperContainer}>
                            <div className={styles.swiperHead}>
                                <img src="/images/bottomArrow.png" alt="arrow bottom"/>
                                <p>Featured Device</p>
                            </div>
                            <div className={styles.swiperWrapper}>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={25}
                                    freeMode={true}
                                    loop={true}
                                    direction={'horizontal'}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    modules={[EffectFade, Autoplay, Pagination]}
                                    autoplay={{delay: 3000}}
                                    style={paginationStyles as React.CSSProperties}
                                >
                                <SwiperSlide>
                                    <div className={styles.cardWrapper}>
                                        <DeviceCard />
                                    </div>
                                </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={styles.cardWrapper}>
                                            <DeviceCard />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={styles.cardWrapper}>
                                            <DeviceCard />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
