import styles from './RecentlyCompletedSection.module.scss';
import {Link} from "react-router-dom";
import CallMadeIcon from "@mui/icons-material/CallMade";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper/modules";
import {useCallback, useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import gameDevelopmentData from "/public/data/GameDevelopmentData/gameDevelopmentData.json";
import {useTranslation} from "react-i18next";

interface GAME_DEVELOPMENT_DATA {
    id: number;
    image: string;
    title: string;
    description: string;
}

export const RecentlyCompletedSection = () => {

    const [animate, setAnimate] = useState(false);
    const [translatedGameDevelopment, setTranslatedGameDevelopment] = useState([gameDevelopmentData?.en])
    const [activeIndex, setActiveIndex] = useState(0);

    const {i18n} = useTranslation();

    const handleChangeIndex = useCallback((index: number): void => {
        setActiveIndex(index + 1);
    }, [setActiveIndex]);


    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 3000);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedGameDevelopment(gameDevelopmentData?.en);

        } else if (i18n.language === "ru") {
            setTranslatedGameDevelopment(gameDevelopmentData?.ru);

        } else {
            setTranslatedGameDevelopment(gameDevelopmentData?.tr);
        }
    }, [i18n.language]);

    return (
        <section className={styles.recentlyCompletedSection}>
            <div className={styles.sectionContent}>
                <div className={styles.topRow}>
                    <div className={styles.titleBlock}>
                        <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                            <h4>Recently <span> Completed</span></h4>
                            <h2>Game Development and Art, <span> Elevated to a New Level</span></h2>
                        </div>
                    </div>
                    <Link to={"/games"} className={styles.viewAll}>
                        <p>View All Games</p>
                        <CallMadeIcon/>
                    </Link>
                </div>
                <div className={styles.swiperContainer}>
                    <div className={styles.animatedBlock}>
                        <div className={styles.monitoringBox}>
                            <h2>{activeIndex} <span className={animate ? styles.animated : ""}></span>
                                <p>{translatedGameDevelopment?.length}</p></h2>
                        </div>
                        <div className={styles.customPagination}>
                            <div className={styles.circle}
                                 style={{
                                     backgroundColor: activeIndex === 1 ? "#0EF0AD" : '',
                                     transform: activeIndex === 1 ? 'scale(1.3)' : ''

                                 }}></div>
                            <div className={styles.circle}
                                 style={{
                                     backgroundColor: activeIndex === 2 ? "#0EF0AD" : '',
                                     transform: activeIndex === 2 ? 'scale(1.3)' : ''
                                 }}></div>
                            <div className={styles.circle}
                                 style={{
                                     backgroundColor: activeIndex === 3 ? "#0EF0AD" : '',
                                     transform: activeIndex === 3 ? 'scale(1.3)' : ''
                                 }}></div>
                        </div>

                    </div>
                    <Swiper
                        direction={'horizontal'}
                        modules={[EffectFade, Autoplay]}
                        slidesPerView={1}
                        autoplay={{delay: 3000}}
                        spaceBetween={25}
                        loop={true}
                        allowTouchMove={false}
                        onSlideChange={(swiper) => handleChangeIndex(swiper.realIndex)}
                    >
                        {translatedGameDevelopment?.map((data: GAME_DEVELOPMENT_DATA) => (
                            <SwiperSlide key={data.id}>
                                <div className={styles.sliderBox}>
                                    <div
                                        className={`${styles.titleContainer} ${activeIndex === data?.id ? styles.visible : ''}`}>
                                        <h2>{data?.title}</h2>
                                        <p>{data?.description}</p>
                                        <Link to={"/games"}>
                                            <CallMadeIcon/>
                                        </Link>
                                    </div>
                                    <img src={data.image} alt="Gamestorm Office"/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>

    );
};
