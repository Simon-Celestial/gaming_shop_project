import styles from './CommunityTwoSection.module.scss';
import {useTranslation} from "react-i18next";

export const CommunityTwoSection = () => {
    const {t} = useTranslation();
    return (
        <section className={styles.communitySection}>
            <div className={styles.background}>
                <video
                    src="/videos/background.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            </div>
            <div className={styles.sectionContent}>
                <div className={styles.circleContainer}>
                    <p>{t('communityTwoSection.communityDescription')}</p>
                    <h2>{t('communityTwoSection.gamersCount')}</h2>
                    <p>{t('communityTwoSection.gamersDescription')}</p>
                </div>
            </div>
        </section>
    );
};
