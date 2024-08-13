import styles from './OurFocusSection.module.scss';
import {VideoContainer} from "../../Reusables/VideoContainer/VideoContainer.tsx";
import {useTranslation} from "react-i18next";
export const OurFocusSection = () => {

    const {t} = useTranslation();

    return (
        <section className={styles.ourFocusSection}>
            <div className={`${styles.decoration} ${styles.square}`}>
                <img src="/images/icons/object-1.png" alt="Decoration"/>
            </div>
            <div className={`${styles.decoration} ${styles.spring}`}>
                <img src="/images/icons/line-1.png" alt="Decoration"/>
            </div>

            <div className={styles.sectionContent}>
                <div className={styles.sectionTitle}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>{t('aboutPage.focusTitle')} <span> {t('aboutPage.focusGreenText')}</span></h4>
                        <h2>{t('aboutPage.focusSubtitle')} <span> {t('aboutPage.focusGreenSubtitle')}</span>
                        </h2>
                    </div>
                </div>
            </div>
            <VideoContainer
                link={"https://www.youtube.com/embed/SzHfZYClTwo?si=T9nROgQUkwPZOuYT"}
                image={"https://pixner.net/gamestorm3/main/assets/images/our-focus-bg.png"}
            />
        </section>

    );
};
