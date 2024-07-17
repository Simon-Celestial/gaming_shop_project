import React, {useCallback, useMemo, useRef, useState} from "react";
import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {Footer} from "../../Components/Layout/Footer/Footer.tsx";
import {TypeAnimation} from "react-type-animation";
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';
import {DeviceCard} from "../../Components/Reusables/DeviceCard/DeviceCard.tsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import {Odometer} from "../../Components/Reusables/Odometer/Odometer.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import genresData from "/public/data/GenresData/genresData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import gamesData from "/public/data/GamesData/gamesData.json";
import {GENRES_TYPE, PAGINATION_STYLES_TYPE, GAME_TYPE} from "../../../Types/types.ts";
import {GameCard} from "../../Components/Reusables/GameCard/GameCard.tsx";
import {useTranslation} from "react-i18next";


const paginationStyles: PAGINATION_STYLES_TYPE = {
    "--swiper-pagination-color": "#0EF0AD",
    "--swiper-pagination-bullet-inactive-color": "#c5c5ca",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "16px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
    "--swiper-pagination-bottom": "10px",
};

export const HomePage = () => {
    const odometerRef = useRef<HTMLDivElement | null>(null);
    const [selectedGenre, setSelectedGenre] = useState("action");

    const handleSelectGenre = useCallback((genreID: string): void => {
        setSelectedGenre(genreID)
    }, [setSelectedGenre]);

    const {i18n} = useTranslation();

    const translatedData = useMemo(() => {
        if (i18n.language === "en") {
            return gamesData.en[0];
        } else if (i18n.language === "ru") {
            return gamesData.ru[0];
        } else {
            return gamesData.tr[0]
        }
    }, [i18n.language]);

    console.log(translatedData)


    const filteredGames = useMemo(() => {
        if (selectedGenre === "action") {
            return translatedData.action
        } else if (selectedGenre === "racing") {
            return translatedData.racing
        } else if (selectedGenre === "rpg") {
            return translatedData.rpg
        } else {
            return translatedData.strategy
        }
    }, [selectedGenre, translatedData, translatedData, translatedData, translatedData]);
    // console.log(filteredGames)


    return (
        <>
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
                            <DefaultButton title={'Explore Our Products'} link={'/shop'}/>
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
                                            <DeviceCard/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={styles.cardWrapper}>
                                            <DeviceCard/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={styles.cardWrapper}>
                                            <DeviceCard/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.aboutSection} ref={odometerRef}>
                    <div className={styles.sectionContent}>
                        <div className={styles.imageContainer}>
                            <div className={styles.experienceBlock}>
                                <div className={styles.experienceContent}>
                                    <div className={styles.number}><Odometer
                                        currentRef={odometerRef}
                                        stopValue={31}
                                        latency={75}
                                    />+
                                    </div>
                                    <div className={styles.title}>
                                        Years Of Experience
                                    </div>
                                </div>
                            </div>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/about-block-bg.png" alt="Users"/>
                        </div>
                        <div className={styles.titleContainer}>
                            <p>Welcome To <span>GAMESTORM</span> Gaming Shop</p>
                            <h2>Bringing People Together Through <span>The Power Of Play</span></h2>
                            <h5>As Gamestorm, we continue to open doors to new worlds every day and we are
                                working excitedly introduce new gaming devices!</h5>
                            <div className={styles.infoContainers}>
                                <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={500}
                                            latency={5}
                                        />
                                        M
                                        <p>+</p></span>
                                    <p>Sales, or 6% of the world’s population.</p>
                                </div>
                                <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={2}
                                            latency={1250}
                                        />
                                        M
                                        <p>+</p>
                                    </span>
                                    <p>Our products have over 2 million unique daily customers.</p>
                                </div>
                                <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={52}
                                            latency={50}
                                        />
                                        <p>+</p>
                                    </span>
                                    <p>Experts collaborating to blow your mind in one place.</p>
                                </div>
                                <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={100}
                                            latency={25}
                                        />
                                        <p>%</p></span>
                                    <p>Our devices gives you full experience.</p>
                                </div>

                            </div>
                            <DefaultButton title={"Explore Out Products"} link={"/shop"}/>
                        </div>
                    </div>
                </section>
                <section className={styles.gamesSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.topContainer}>
                            <h4>Feel Unforgettable <span>Gaming Experience</span></h4>
                            <h2><span>Our Products</span> Will Give You The Best Feelings During <span>GamePlay</span>
                            </h2>
                            <p>Our products are distinguished by reliability, low response time, and user-friendliness
                                for better immersion in the game.</p>
                            <div className={styles.genresContainer}>
                                <div className={styles.genresRow}>
                                    {genresData?.map((genre: GENRES_TYPE) => {
                                        return (
                                            <div key={genre?.id}
                                                 className={`${styles.genreBox} ${genre?.id === selectedGenre ? styles.active : ''}`}
                                                 onClick={() => handleSelectGenre(genre?.id)}>
                                                <img src={genre?.img} alt={genre?.id}/>
                                            </div>
                                        )
                                    })}

                                </div>
                                <div className={styles.gameSearch}>
                                    <input type="text" placeholder={"Type to search..."}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.gamesContainer}>
                            {filteredGames?.map((game: GAME_TYPE) => {
                                return (
                                    <GameCard key={game?.id} data={game}/>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
