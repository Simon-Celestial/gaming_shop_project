import styles from './BannerSection.module.scss';
import SettingsIcon from "@mui/icons-material/Settings";
import {TypeAnimation} from "react-type-animation";
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import React, {useContext} from "react";
import {DeviceCard} from "../../Reusables/DeviceCard/DeviceCard.tsx";
import {DataContext} from "../../../../Context/DataContext/DataContext.tsx";
import {PAGINATION_STYLES_TYPE} from "../../../../Types/types.ts";

const paginationStyles: PAGINATION_STYLES_TYPE = {
    "--swiper-pagination-color": "#0EF0AD",
    "--swiper-pagination-bullet-inactive-color": "#c5c5ca",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "16px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
    "--swiper-pagination-bottom": "10px",
};


export const BannerSection = () => {
    const {
        productsData,
    } = useContext(DataContext);

    return (
        <section className={styles.bannerSection}>
            {/*DECORATIONS*/}
            <div className={`${styles.decoration} ${styles.planet}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/planet.png" alt="Planet"/>
            </div>
            <div className={`${styles.decoration} ${styles.joystick}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/console-2.png"
                     alt="Console"/>
            </div>
            <div className={`${styles.decoration} ${styles.controllers}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/console-1.png"
                     alt="Console"/>
            </div>
            <div className={`${styles.decoration} ${styles.tubesSolid}`}>
                <div className={styles.wideTube}></div>
                <div className={styles.thinTube}></div>
            </div>
            <div className={`${styles.decoration} ${styles.tubesSolid} ${styles.tubeTransparent}`}>
                <div className={styles.wideTube}></div>
                <div className={styles.thinTube}></div>
            </div>
            <div className={`${styles.decoration} ${styles.starsDefault} ${styles.starsOne}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-3.png"
                     alt="Star"/>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-2.png"
                     alt="Star"/>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-6.png"
                     alt="Star"/>
            </div>
            <div className={`${styles.decoration} ${styles.starsDefault} ${styles.starsTwo}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-4.png"
                     alt="Star"/>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-5.png"
                     alt="Star"/>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-3.png"
                     alt="Star"/>
            </div>
            <div className={`${styles.decoration} ${styles.starsDefault} ${styles.starsThree}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-2.png"
                     alt="Star"/>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-4.png"
                     alt="Star"/>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-5.png"
                     alt="Star"/>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-3.png"
                     alt="Star"/>
            </div>
            <div className={`${styles.decoration} ${styles.starsDefault} ${styles.starsFour}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-6.png"
                     alt="Star"/>
            </div>
            <div className={styles.gearBox}>
                <div className={styles.gear}>
                    <SettingsIcon/>
                </div>
                <div className={styles.gear}>
                    <SettingsIcon/>
                </div>
                <div className={styles.gear}>
                    <SettingsIcon/>
                </div>
            </div>
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
                    <DefaultButton
                        title={'Explore Our Products'}
                        link={'/shop'}
                        grayBtn={false}
                        wide={false}
                    />
                </div>
                <div className={styles.swiperContainer}>
                    <div className={styles.swiperHead}>
                        <img src="/images/icons/bottomArrow.png" alt="arrow bottom"/>
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
                            {productsData?.slice(5, 12)?.map((product) => {
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
            </div>
        </section>

    );
};
