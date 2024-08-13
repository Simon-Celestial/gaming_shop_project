import React, {useContext} from "react";
import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {TypeAnimation} from "react-type-animation";
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';
import {DeviceCard} from "../../Components/Reusables/DeviceCard/DeviceCard.tsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import {
    PAGINATION_STYLES_TYPE,
} from "../../../Types/types.ts";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import {DataContext} from "../../../Context/DataContext/DataContext.tsx";
import {Loader} from "../../Components/Reusables/Loader/Loader.tsx";
import {GamesSection} from "../../Components/Sections/GamesSection/GamesSection.tsx";
import {TestimonialsSection} from "../../Components/Sections/TestimonialsSection/TestimonialsSection.tsx";
import {AboutSection} from "../../Components/Sections/AboutSection/AboutSection.tsx";
import {TeamSection} from "../../Components/Sections/TeamSection/TeamSection.tsx";
import {CounterSection} from "../../Components/Sections/CounterSection/CounterSection.tsx";
import {JobsSection} from "../../Components/Sections/JobsSection/JobsSection.tsx";
import SettingsIcon from '@mui/icons-material/Settings';
import {ContactForm} from "../../Components/Reusables/ContactForm/ContactForm.tsx";


const paginationStyles: PAGINATION_STYLES_TYPE = {
    "--swiper-pagination-color": "#0EF0AD",
    "--swiper-pagination-bullet-inactive-color": "#c5c5ca",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "16px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
    "--swiper-pagination-bottom": "10px",
};

export const HomePage = () => {
    const {
        productsData,
        productsLoading
    } = useContext(DataContext);

    return (
        <>
            {
                productsLoading &&
                <Loader/>
            }
            <Header/>
            <main className={styles.homeWrapper}>
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
                {/*ABOUT SECTION */}
                <AboutSection/>
                {/*GAMES SECTION*/}
                <GamesSection/>
                {/*TEAM SECTION*/}
                <TeamSection/>
                {/*COUNTER SECTION*/}
                <CounterSection/>
                <section className={styles.productsSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.productsTitle}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>Embrace the World of <span>Gaming!</span></h4>
                                <h2>Our Dedicated Shop is Here for You. <span>Experience the Best.</span></h2>
                                <p>Explore an extensive variety of gaming equipment and peripherals. We providing an
                                    unparalleled gaming experience.</p>
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
                <section className={styles.lifeSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.topTitle}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>We're Part Of A <span>Big Family</span></h4>
                                <h2>Get to know our staff <span>Better.</span></h2>
                                <p>Experience the magic of gaming development with a look inside our studio. See the
                                    art, science, and innovation at work.</p>
                            </div>
                        </div>
                        <div className={styles.imagesContainer}>
                            <div className={styles.imagesRow}>
                                <div className={styles.bigImg}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-1.png"
                                         alt="Office"/>
                                </div>
                                <div className={styles.bigImg}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-2.png"
                                         alt="Office"/>
                                </div>
                            </div>
                            <div className={styles.imagesRow}>
                                <div className={styles.smallImg}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-3.png"
                                         alt="Office"/>
                                </div>
                                <div className={styles.smallImg}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-4.png"
                                         alt="Office"/>
                                </div>
                                <div className={styles.smallImg}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-5.png"
                                         alt="Office"/>
                                </div>
                            </div>


                        </div>
                        <div className={styles.joinContainer}>
                            <h2>join us!</h2>
                            <p>Still haven't found your dream job? Join Team Gamestorm and become the next Gamestorm of
                                an ever-growing family!</p>
                            <DefaultButton
                                link={"/about"}
                                title={"Check Open Positions"}
                                grayBtn={false}
                                wide={false}
                            />
                        </div>

                    </div>
                </section>
                {/*JOBS SECTION*/}
                <JobsSection/>
                {/*TESTIMONIALS SECTION*/}
                <TestimonialsSection/>
                <section className={styles.communitySection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.imageBlock}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/call-to-action-circle.png"
                                 alt="Community Gamers"/>
                            <span className={`${styles.decoration} ${styles.circleOne}`}></span>
                            <span className={`${styles.decoration} ${styles.circleTwo}`}></span>
                            <span className={`${styles.decoration} ${styles.circleThree}`}></span>
                            <span className={`${styles.decoration} ${styles.circleFour}`}></span>
                            <span className={`${styles.decoration} ${styles.circleFive}`}></span>
                            <span className={`${styles.decoration} ${styles.circleSix}`}></span>
                            <span className={`${styles.decoration} ${styles.circleSeven}`}></span>
                            <span className={`${styles.decoration} ${styles.circleEight}`}></span>
                            <span className={`${styles.decoration} ${styles.circleNine}`}></span>
                            <span className={`${styles.decoration} ${styles.circleTen}`}></span>
                        </div>
                        <div className={styles.titleBlock}>
                            <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                                <h4>Join Our <span>Community!</span></h4>
                                <h2>Connect With <span>Gamers Worldwide</span></h2>
                                <p>Join the revolution and immerse yourself in the ultimate gaming experience, where the
                                    boundaries between reality and fantasy blur, and the only limit is your imagination.
                                    Sign up now and be the first to play our latest game releases.</p>
                            </div>
                            <div className={styles.buttonsBlock}>
                                <DefaultButton
                                    title={"Explore Our Games"}
                                    link={"/games"}
                                    grayBtn={false}
                                    wide={false}
                                />
                                <DefaultButton
                                    title={"Join Our Community"}
                                    link={"/about"}
                                    grayBtn={true}
                                    wide={false}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.contactUsSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.titleBlock}>
                            <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                                <h4>Have <span>Questions?</span></h4>
                                <h2>We'd Love To <span>Hear From You!</span></h2>
                                <p>Please fill out the form and let us know about your concerns.We will try our best to
                                    provide optimized solutions.</p>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.icon}>
                                    <LocalPhoneIcon/>
                                </div>
                                <p>+(0) 123 - 456 - 789</p>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.icon}>
                                    <EmailIcon/>
                                </div>
                                <p>example@example.com</p>
                            </div>
                        </div>
                        <div className={styles.formContainer}>
                            <ContactForm/>
                        </div>
                    </div>
                </section>
            </main>
            <FooterOne/>
        </>
    );
};
