import styles from './ProductDetailsPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {useParams} from "react-router-dom";
import React, {useContext, useEffect, useMemo, useState} from "react";
import {DataContext} from "../../../Context/DataContext/DataContext.tsx";
import {PRODUCTS_DATA} from "../../../Types/types.ts";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper/modules";
import {DeviceCard} from "../../Components/Reusables/DeviceCard/DeviceCard.tsx";
import {QuickView} from "../../Components/Reusables/QuickView/QuickView.tsx";
import {useTranslation} from "react-i18next";
import {Loader} from "../../Components/Reusables/Loader/Loader.tsx";

export const ProductDetailsPage: React.FC = () => {
    const {productsData} = useContext(DataContext);
    const [product, setProduct] = useState<PRODUCTS_DATA | null>(null);

    const similarProducts = useMemo(() => {
        return productsData?.filter(item =>
            (item?.category === product?.category || item?.brand === product?.brand) &&
            item?.id !== product?.id
        );
    }, [product?.brand, product?.category, product?.id, productsData]);

    const {id} = useParams<{ id: string }>();

    const {t} = useTranslation();

    useEffect(() => {
        if (id) {
            const foundProduct = productsData?.find((product) =>
                product.id.toString() === id);
            setProduct(foundProduct || null);
        }
    }, [id, productsData]);

    return (
        <>
            {product === null? <Loader /> : null}
            <Header/>
            <main className={styles.pageWrapper}>
                <div className={styles.pageContent}>
                    {/*PRODUCT MAIN DETAILS*/}
                    <QuickView product={product}/>
                    <section className={styles.additionalSection}>
                        <div className={styles.sectionContent}>
                            <h2>{t('productDetailsPage.additionalInformation')}</h2>
                            <div className={styles.infoTable}>
                                <div className={styles.tableRow}>
                                    <div className={styles.cell}>
                                        {t('productDetailsPage.weight')}
                                    </div>
                                    <div className={styles.cell}>
                                        {product?.weight ? product.weight : "Not available"}
                                    </div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={styles.cell}>
                                        {t('productDetailsPage.dimensions')}
                                    </div>
                                    <div className={styles.cell}>
                                        {product?.dimension ? product.dimension : "Not available"}
                                    </div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={styles.cell}>
                                        {t('productDetailsPage.warranty')}
                                    </div>
                                    <div className={styles.cell}>
                                        {product?.warranty ? product.warranty : "Not available"}
                                    </div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={styles.cell}>
                                        {t('productDetailsPage.material')}
                                    </div>
                                    <div className={styles.cell}>
                                        {product?.material ? product.material : "Not available"}
                                    </div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={styles.cell}>
                                        {t('productDetailsPage.rgb')}
                                    </div>
                                    <div className={styles.cell}>
                                        {
                                            product?.rgb === true ?
                                                t('productDetailsPage.yes')
                                                :
                                                product?.rgb === false ?
                                                    t('productDetailsPage.no')
                                                    :
                                                    t('productDetailsPage.notAvailable')
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.mayLikeSection}>
                        <div className={styles.sectionContent}>
                            <h2>{t('productDetailsPage.youMayAlsoLike')}</h2>
                            <div className={styles.productsSwiper}>
                                <Swiper
                                    direction={'horizontal'}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    modules={[EffectFade, Autoplay]}
                                    slidesPerView={Math.min(4, similarProducts?.length)}
                                    autoplay={{delay: 3000}}
                                    breakpoints={{}}
                                    spaceBetween={25}
                                    freeMode={true}
                                    loop={true}
                                >
                                    {similarProducts?.map((product) => {
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
                </div>
            </main>
            <FooterOne/>
        </>
    );
};
