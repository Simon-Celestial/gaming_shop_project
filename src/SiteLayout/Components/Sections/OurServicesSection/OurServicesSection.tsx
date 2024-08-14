import styles from './OurServicesSection.module.scss';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import gamingVisionData from "/public/data/GamingVisionData/gamingVisionData.json";


interface GAMING_VISION_DATA {
    id: number;
    title: string;
    description: string;
}

export const OurServicesSection = () => {
    const [translatedGameVision, setTranslatedGameVision] = useState(gamingVisionData.en);

    const {i18n,t} = useTranslation();

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedGameVision(gamingVisionData.en)
        } else if (i18n.language === "ru") {
            setTranslatedGameVision(gamingVisionData.ru)
        } else {
            setTranslatedGameVision(gamingVisionData.tr)
        }
    }, [i18n.language]);


    return (
        <section className={styles.ourServicesSection}>
            <div className={styles.sectionContent}>
                <div className={styles.leftContainer}>
                    <div className={styles.decoration}>
                        <img src="/images/icons/star.png" alt="Decoration Star"/>
                    </div>
                    <div className={styles.containerTitle}>
                        <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                            <h4>{t('ourServicesSection.BringingYourGamingVision')} <span> {t('ourServicesSection.GamingVisionToLife')}</span> {t('ourServicesSection.life')}</h4>
                            <h2>{t('ourServicesSection.InnovativeGamingSolutions')} <span> {t('ourServicesSection.GamingSolutionsEverywhere')}</span> {t('ourServicesSection.everywhere')}</h2>
                            <p>{t('ourServicesSection.OurGamingStudio')}</p>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.cover}>
                            <Link to={"/services"}>{t('ourServicesSection.SeeAllServices')}</Link>
                        </div>
                        <img src="/images/posters/poster-001.png" alt="Poster"/>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    {translatedGameVision?.map((data: GAMING_VISION_DATA) => {
                        return (
                            <div key={data?.id} className={styles.containerEntity}>
                                <h2>{data?.title}</h2>
                                <p>{data?.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    );
};
