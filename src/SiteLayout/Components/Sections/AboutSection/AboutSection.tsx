import styles from "./AboutSection.module.scss";
import {Odometer} from "../../Reusables/Odometer/Odometer.tsx";
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";
import {useRef} from "react";
import {useTranslation} from "react-i18next";


export const AboutSection = () => {
    const odometerRef = useRef<HTMLDivElement | null>(null);
    const {t} = useTranslation();
    return (
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
                                    {t('aboutSection.yearsOfExperience')}
                                </div>
                            </div>
                        </div>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/about-block-bg.png" alt="Users"/>
                    </div>
                    <div className={styles.titleContainer}>
                        <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                            <h4>{t('aboutSection.welcome')} <span>{t('aboutSection.brand')}</span> {t('aboutSection.gamingShop')}</h4>
                            <h2>{t('aboutSection.bringingPeopleTogether')} <span>{t('aboutSection.powerOfPlay')}</span></h2>
                            <p>{t('aboutSection.introText')}</p>
                        </div>
                        <div className={styles.infoContainers}>
                            <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={500}
                                            latency={5}
                                        />
                                        {t('aboutSection.m')}
                                        <p>+</p></span>
                                <p>{t('aboutSection.salesText')}</p>
                            </div>
                            <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={2}
                                            latency={1250}
                                        />
                                        {t('aboutSection.m')}
                                        <p>+</p>
                                    </span>
                                <p>{t('aboutSection.dailyCustomersText')}</p>
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
                                <p>{t('aboutSection.expertsText')}</p>
                            </div>
                            <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={100}
                                            latency={25}
                                        />
                                        <p>%</p></span>
                                <p>{t('aboutSection.fullExperienceText')}</p>
                            </div>

                        </div>
                        <DefaultButton
                            title={t('aboutSection.exploreProducts')}
                            link={"/shop"}
                            grayBtn={false}
                            wide={false}
                        />
                    </div>
                </div>
            </section>
    );
};
