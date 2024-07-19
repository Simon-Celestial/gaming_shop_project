import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
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
import teamData from "/public/data/TeamData/teamData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import genresData from "/public/data/GenresData/genresData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import gamesData from "/public/data/GamesData/gamesData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import infoData from "/public/data/InfoData/infoData.json";
import {GENRES_TYPE, PAGINATION_STYLES_TYPE, GAME_TYPE, TEAM_DATA, INFO_DATA,} from "../../../Types/types.ts";
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
    const [selectedGenre, setSelectedGenre] = useState("action");
    const [translatedGames, setTranslatedGames] = useState(gamesData.en[0]);
    const [translatedTeam, setTranslatedTeam] = useState(teamData.en);
    const [translatedInfo, setTranslatedInfo] = useState(infoData.en);
    const [inputValue, setInputValue] = useState("");
    const [hoveredBox, setHoveredBox] = useState(1);

    const odometerRef = useRef<HTMLDivElement | null>(null);
    const counterRef = useRef<HTMLDivElement | null>(null);

    const {i18n} = useTranslation();

    const handleInputSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, [setInputValue]);

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedGames(gamesData.en[0]);
            setTranslatedTeam(teamData.en);
            setTranslatedInfo(infoData.en);
        } else if (i18n.language === "ru") {
            setTranslatedGames(gamesData.ru[0]);
            setTranslatedTeam(teamData.ru);
            setTranslatedInfo(infoData.ru);
        } else {
            setTranslatedGames(gamesData.tr[0]);
            setTranslatedTeam(teamData.tr);
            setTranslatedInfo(infoData.tr);
        }
    }, [i18n.language]);

    const handleSelectGenre = useCallback((genreID: string): void => {
        setSelectedGenre(genreID)
    }, [setSelectedGenre]);

    const filteredGames = useMemo(() => {
        let games: GAME_TYPE[] = [];

        if (selectedGenre === "action") {
            games = translatedGames.action;
        } else if (selectedGenre === "racing") {
            games = translatedGames.racing;
        } else if (selectedGenre === "rpg") {
            games = translatedGames.rpg;
        } else {
            games = translatedGames.strategy;
        }

        if (inputValue) {
            return games.filter((game: GAME_TYPE) =>
                game?.name?.toLowerCase().includes(inputValue?.toLowerCase())
            );
        }

        return games;
    }, [selectedGenre, translatedGames, inputValue]);

    const handleHoverBox = useCallback((boxID: number) => {
        setHoveredBox(boxID);
    }, [setHoveredBox])

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
                            <DefaultButton title={'Explore Our Products'} link={'/shop'} grayBtn={false}/>
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
                            <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                                <h4>Welcome To <span>GAMESTORM</span> Gaming Shop</h4>
                                <h2>Bringing People Together Through <span>The Power Of Play</span></h2>
                                <p>As Gamestorm, we continue to open doors to new worlds every day and we are
                                    working excitedly introduce new gaming devices!</p>
                            </div>
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
                            <DefaultButton title={"Explore Out Products"} link={"/shop"} grayBtn={false}/>
                        </div>
                    </div>
                </section>
                <section className={`${styles.gamesSection} ${filteredGames?.length === 0 ? styles.noJoysticks : ''}`}>
                    <div className={styles.sectionContent}>
                        <div className={styles.topContainer}>
                            <div className={styles.pageHeading}>
                                <h4>Feel Unforgettable <span>Gaming Experience</span></h4>
                                <h2><span>Our Products</span> Will Give You The Best Feelings
                                    During <span>GamePlay</span>
                                </h2>
                                <p>Our products are distinguished by reliability, low response time, and
                                    user-friendliness
                                    for better immersion in the game.</p>
                            </div>
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
                                    <input type="text"
                                           placeholder={"Type to search..."}
                                           onChange={handleInputSearch}
                                           value={inputValue}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.gamesContainer}>
                            {
                                filteredGames?.length > 0 ?
                                    filteredGames?.map((game: GAME_TYPE) => {
                                        return (
                                            <GameCard key={game?.id} data={game}/>
                                        )
                                    })
                                    :
                                    <div className={styles.nothingFound}>Nothing found...</div>
                            }

                        </div>
                    </div>
                </section>
                <section className={styles.teamSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.teamTitle}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>We Have A Passion For <span>Gaming!</span></h4>
                                <h2>Our Team Consists of Professionals. <span>And We're Proud Of It.</span></h2>
                                <p>Our dynamic team blends tech-savvy sales professionals, knowledgeable customer
                                    service representatives, innovative marketing strategists, and visionary product
                                    managers.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamSwiper}>
                        <Swiper
                            slidesPerView={4}
                            modules={[Autoplay]}
                            autoplay={{delay: 2000}}
                            breakpoints={{
                                1100: {
                                    slidesPerView: 4,
                                },
                                840: {
                                    slidesPerView: 3,
                                },
                                550: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                            spaceBetween={50}
                            freeMode={true}
                            loop={true}
                        >
                            {translatedTeam?.map((member: TEAM_DATA) => {
                                return (
                                    <SwiperSlide key={member?.id}>
                                        <div
                                            className={`${styles.teamSlide} ${member.id % 2 === 1 ? styles.margin : ''}`}>
                                            <div className={styles.image}>
                                                <img src={member?.image} alt={member?.name}/>
                                            </div>
                                            <div className={styles.title}>
                                                <h2>{member?.name}</h2>
                                                <p>{member?.job}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                )
                            })}
                        </Swiper>

                    </div>
                </section>
                <section className={styles.counterSection} ref={counterRef}>
                    <div className={styles.sectionContent}>
                        <div className={styles.informationContainer}>
                            {translatedInfo?.map((data: INFO_DATA) => {
                                return (
                                    <div
                                        key={data?.id}
                                        className={`${styles.box} ${data?.id === hoveredBox ? styles.activeBox : ''}`}
                                        onMouseEnter={() => handleHoverBox(data?.id)}>
                                        <p>{data?.title}</p>
                                        <Odometer
                                            currentRef={counterRef}
                                            stopValue={data?.value}
                                            latency={data?.delay}
                                        />
                                        {data?.prefix}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
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
                                <SwiperSlide>
                                    <div className={styles.cardWrapper}>
                                        <DeviceCard/>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className={styles.lifeSection}>
                    <div className={styles.sectionContent}>
                        <h1>Hi, i am under development</h1>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
