import styles from "./CommunitySection.module.scss";
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";
import {useTranslation} from "react-i18next";

export const CommunitySection = () => {

    const {t} = useTranslation();
    return (
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
                        <h4>{t('communitySection.joinOur')} <span>{t('communitySection.community')}</span></h4>
                        <h2>{t('communitySection.connectWith')} <span>{t('communitySection.gamersWorldwide')}</span></h2>
                        <p>{t('communitySection.description')}</p>
                    </div>
                    <div className={styles.buttonsBlock}>
                        <DefaultButton
                            title={t('communitySection.exploreGamesButton')}
                            link={"/games"}
                            grayBtn={false}
                            wide={false}
                        />
                        <DefaultButton
                            title={t('communitySection.joinCommunityButton')}
                            link={"/about"}
                            grayBtn={true}
                            wide={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
