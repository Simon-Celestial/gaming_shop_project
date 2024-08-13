import styles from "./TeamSection.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {TEAM_DATA} from "../../../../Types/types.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import teamData from "/public/data/TeamData/teamData.json";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";


export const TeamSection = () => {
    const [translatedTeam, setTranslatedTeam] = useState(teamData.en);

    const {i18n,t} = useTranslation();

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedTeam(teamData.en);
        } else if (i18n.language === "ru") {
            setTranslatedTeam(teamData.ru);
        } else {
            setTranslatedTeam(teamData.tr);
        }
    }, [i18n.language]);


    return (
        <section className={styles.teamSection}>
            <div className={styles.sectionContent}>
                <div className={styles.teamTitle}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>{t('teamSection.passionForGaming')} <span>{t('teamSection.gaming')}</span></h4>
                        <h2>{t('teamSection.teamProfessionals')} <span>{t('teamSection.proudOfIt')}</span></h2>
                        <p>{t('teamSection.teamDescription')}</p>
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

    );
};
