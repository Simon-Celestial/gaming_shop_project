import styles from './ProductsSection.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import React, {useContext} from "react";
import {DeviceCard} from "../../Reusables/DeviceCard/DeviceCard.tsx";
import {paginationStyles} from "../../../../CommonStyles/PaginationStyles/PaginationStyles.ts";
import {DataContext} from "../../../../Context/DataContext/DataContext.tsx";
import {useTranslation} from "react-i18next";

export const ProductsSection = () => {
    const {
        productsData
    } = useContext(DataContext);

    const {t} = useTranslation();

    return (
        <section className={styles.productsSection}>
            <div className={styles.sectionContent}>
                <div className={styles.productsTitle}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>{t('productsSection.EmbraceTheWorldOf')} <span>{t('productsSection.Gaming')}</span></h4>
                        <h2>{t('productsSection.OurDedicatedShop')} <span>{t('productsSection.ExperienceTheBest')}</span></h2>
                        <p>{t('productsSection.ExploreVariety')}</p>
                    </div>

                </div>
                <div className={styles.productsSwiper}>
                    <Swiper
                        direction={'horizontal'}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[EffectFade, Autoplay, Pagination]}
                        style={paginationStyles as React.CSSProperties}
                        slidesPerView={3}
                        autoplay={{delay: 3000}}
                        breakpoints={{
                            1100: {
                                slidesPerView: 3,
                            },
                            840: {
                                slidesPerView: 2,
                            },
                            550: {
                                slidesPerView: 1,
                            }
                        }}
                        spaceBetween={25}
                        freeMode={true}
                        loop={true}
                    >
                        {productsData?.map((product) => {
                            return (
                                <SwiperSlide key={product?.id}>
                                    <div className={styles.cardWrapper}>
                                        <DeviceCard data={product}/>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>

    );
};
