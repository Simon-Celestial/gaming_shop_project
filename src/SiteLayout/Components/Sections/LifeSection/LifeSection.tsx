import styles from "./LifeSection.module.scss";
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";
import {useTranslation} from "react-i18next";

export const LifeSection = () => {
    const {t} = useTranslation();
    return (
        <section className={styles.lifeSection}>
            <div className={styles.sectionContent}>
                <div className={styles.topTitle}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>{t('lifeSection.topTitleH4')} <span>{t('lifeSection.topTitleH4Span')}</span></h4>
                        <h2>{t('lifeSection.topTitleH2')} <span>{t('lifeSection.topTitleH2Span')}</span></h2>
                        <p>{t('lifeSection.topTitleP')}</p>
                    </div>
                </div>
                <div className={styles.imagesContainer}>
                    <div className={styles.imagesRow}>
                        <div className={styles.bigImg}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-1.png"
                                 alt="Office"/>
                        </div>
                        <div className={styles.bigImg}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-2.png"
                                 alt="Office"/>
                        </div>
                    </div>
                    <div className={styles.imagesRow}>
                        <div className={styles.smallImg}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-3.png"
                                 alt="Office"/>
                        </div>
                        <div className={styles.smallImg}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-4.png"
                                 alt="Office"/>
                        </div>
                        <div className={styles.smallImg}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-5.png"
                                 alt="Office"/>
                        </div>
                    </div>


                </div>
                <div className={styles.joinContainer}>
                    <h2>{t('lifeSection.joinContainerH2')}</h2>
                    <p>{t('lifeSection.joinContainerP')}</p>
                    <DefaultButton
                        link={"/about"}
                        title={t('lifeSection.defaultButtonTitle')}
                        grayBtn={false}
                        wide={false}
                    />
                </div>

            </div>
        </section>
    );
};
