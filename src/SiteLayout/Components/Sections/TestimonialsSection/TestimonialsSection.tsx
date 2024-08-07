import styles from './TestimonialsSection.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper/modules";
import {COMMENTS_DATA} from "../../../../Types/types.ts";
import {Rating} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import commentsData from "/public/data/CommentsData/commentsData.json";
import {useTranslation} from "react-i18next";


export const TestimonialsSection = () => {
    const [translatedComments, setTranslatedComments] = useState(commentsData.en);
    const [animate, setAnimate] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const {i18n} = useTranslation();

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedComments(commentsData.en);
        } else if (i18n.language === "ru") {
            setTranslatedComments(commentsData.ru);
        } else {
            setTranslatedComments(commentsData.tr);
        }
    }, [i18n.language]);


    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 2500);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    const handleChangeIndex = useCallback((index: number): void => {
        setActiveIndex(index + 1);
    }, [setActiveIndex]);

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.overlay}>
                <img src="/images/office/office.jpg" alt="Office"/>
            </div>
            <div className={styles.sectionContent}>
                <div className={styles.commentsSwiper}>
                    <div className={styles.monitoringBox}>
                        <h2>{activeIndex} <span className={animate ? styles.animated : ""}></span>
                            <p>{translatedComments.length}</p></h2>
                    </div>
                    <Swiper
                        direction={'horizontal'}
                        modules={[EffectFade, Autoplay]}
                        slidesPerView={1}
                        autoplay={{delay: 2500}}
                        spaceBetween={25}
                        loop={true}
                        allowTouchMove={false}
                        onSlideChange={(swiper) => handleChangeIndex(swiper.realIndex)}

                    >
                        {translatedComments?.map((data: COMMENTS_DATA) => {
                            return (
                                <SwiperSlide key={data?.id}>
                                    <div className={styles.commentBox}>
                                        <div className={styles.topBox}>
                                            <div className={styles.logoBox}>
                                                <img src={data?.image} alt={data?.name}/>
                                            </div>
                                            <Rating
                                                name="read-only"
                                                value={data?.rating}
                                                readOnly
                                                sx={{
                                                    '& .MuiRating-icon': {
                                                        color: "#0EF0AD"
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className={styles.midBox}>
                                            “{data?.comment}„
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <h2>{data?.name}</h2>
                                            <div className={styles.countryDateBox}>
                                                {data?.country}<span>|</span><p>{data?.published}</p>
                                            </div>
                                        </div>
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
