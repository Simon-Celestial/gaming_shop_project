import styles from "./GamingCharacterSection.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import valuesData from "/public/data/ValuesData/valuesData.json";
import {useIconComponent} from "../../../../Hooks/UseIconComponent/UseIconComponent.tsx";


interface VALUES_DATA {
    id: number;
    title: string;
    icon: string;
    description: string;
}


export const GamingCharacterSection = () => {
    const [translatedValues, setTranslatedValues] = useState(valuesData.en);
    const [activeIndex, setActiveIndex] = useState(0);

    const {i18n, t} = useTranslation();
    const getIcon = useIconComponent();

    const handleChangeIndex = useCallback(
        (index: number, setState: Dispatch<SetStateAction<number>>): void => {
            setState(index);
        },
        []
    );


    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedValues(valuesData.en);

        } else if (i18n.language === "ru") {
            setTranslatedValues(valuesData.ru);

        } else {
            setTranslatedValues(valuesData.tr);
        }
    }, [i18n.language]);


    return (
        <section className={styles.gamingCharacterSection}>
            <div className={styles.sectionContent}>
                <div className={`${styles.sectionTitle} ${i18n.language === "ru" ? styles.wide : ''}`}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>{t('aboutPage.valuesTitle')} <span>{t('aboutPage.valuesGreenText')}</span></h4>
                        <h2>{t('aboutPage.valuesSubtitle')} <span> {t('aboutPage.valuesGreenSubtitle')}</span></h2>
                        <p>{t('aboutPage.valuesDescription')}</p>
                    </div>
                </div>
            </div>
            <div className={styles.swiperContainer}>
                <Swiper
                    slidesPerView={5}
                    modules={[Autoplay]}
                    autoplay={{delay: 2500}}
                    breakpoints={{}}
                    spaceBetween={50}
                    loop={true}
                    allowTouchMove={false}
                    onSlideChange={(swiper) => handleChangeIndex(swiper.realIndex, setActiveIndex)}
                >
                    {translatedValues?.map((data: VALUES_DATA, index: number) => {
                        const isActive = index === (activeIndex + 2) % translatedValues.length;
                        return (
                            <SwiperSlide key={data?.id}>
                                <div key={data?.id}
                                     className={`${styles.sliderBox} ${isActive ? styles.activeSlide : ''}`}>
                                    <div className={styles.circle}>
                                        {getIcon(data?.icon)}
                                    </div>
                                    <h2>{data?.title}</h2>
                                    <p>{data?.description}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className={styles.pagination}>
                <div
                    className={styles.container}
                    style={{
                        backgroundColor: activeIndex === 0 ? "#0EF0AD" : ""
                    }}
                ></div>
                <div
                    className={styles.container}
                    style={{
                        backgroundColor: activeIndex === 1 ? "#0EF0AD" : ""
                    }}
                ></div>
                <div
                    className={styles.container}
                    style={{
                        backgroundColor: activeIndex === 2 ? "#0EF0AD" : ""
                    }}
                ></div>
                <div
                    className={styles.container}
                    style={{
                        backgroundColor: activeIndex === 3 ? "#0EF0AD" : ""
                    }}
                ></div>
                <div
                    className={styles.container}
                    style={{
                        backgroundColor: activeIndex === 4 ? "#0EF0AD" : ""
                    }}
                ></div>
                <div
                    className={styles.container}
                    style={{
                        backgroundColor: activeIndex === 5 ? "#0EF0AD" : ""
                    }}
                ></div>
            </div>
        </section>

    );
};
