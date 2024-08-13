import styles from './OurStorySection.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import goalsData from "/public/data/GoalsData/goalsData.json";

interface GOALS_DATA {
    id: number;
    year: string;
    title: string;
    description: string;
}

export const OurStorySection = () => {
    const [translatedGoals, setTranslatedGoals] = useState(goalsData.en);
    const [goalsActiveIndex, setGoalsActiveIndex] = useState(0);

    const {i18n,t} = useTranslation();


    const handleChangeIndex = useCallback(
        (index: number, setState: Dispatch<SetStateAction<number>>): void => {
            setState(index);
        },
        []
    );


    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedGoals(goalsData.en);

        } else if (i18n.language === "ru") {
            setTranslatedGoals(goalsData.ru);

        } else {
            setTranslatedGoals(goalsData.tr);
        }
    }, [i18n.language]);

    return (
        <section className={styles.ourStorySection}>
            <div className={styles.sectionContent}>
                <div className={styles.swiperContainer}>
                    <div className={styles.title}>
                        <h2>{t('aboutPage.storyTitle')}</h2>
                        <p>{t('aboutPage.storyDescription')}</p>
                    </div>
                    <div className={styles.swiper}>
                        <Swiper
                            slidesPerView={1}
                            modules={[Autoplay]}
                            autoplay={{delay: 2000}}
                            breakpoints={{}}
                            spaceBetween={25}
                            loop={true}
                            allowTouchMove={false}
                            onSlideChange={(swiper) => handleChangeIndex(swiper.realIndex, setGoalsActiveIndex)}
                        >
                            {translatedGoals?.map((data: GOALS_DATA) => {
                                return (
                                    <SwiperSlide key={data?.id}>
                                        <div className={styles.swiperBox}>
                                            <div className={styles.date}>
                                                {data?.year}
                                            </div>
                                            <div className={styles.goal}>
                                                <h2>{data?.title}</h2>
                                                <p>{data?.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <div className={styles.pagination}>
                        <div
                            className={styles.location}
                            style={{backgroundColor: goalsActiveIndex === 0 ? "#0EF0AD" : ''}}
                        ></div>
                        <div
                            className={styles.location}
                            style={{backgroundColor: goalsActiveIndex === 1 ? "#0EF0AD" : ''}}
                        ></div>
                        <div
                            className={styles.location}
                            style={{backgroundColor: goalsActiveIndex === 2 ? "#0EF0AD" : ''}}
                        ></div>
                        <div
                            className={styles.location}
                            style={{backgroundColor: goalsActiveIndex === 3 ? "#0EF0AD" : ''}}
                        ></div>
                        <div
                            className={styles.location}
                            style={{backgroundColor: goalsActiveIndex === 4 ? "#0EF0AD" : ''}}
                        ></div>

                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src="/images/posters/our-story-illus.png" alt="Our Story"/>
                </div>
            </div>
        </section>

    );
};
