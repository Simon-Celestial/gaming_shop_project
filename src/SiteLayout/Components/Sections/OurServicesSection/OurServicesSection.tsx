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

    const {i18n} = useTranslation();

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
                            <h4>Bringing Your <span> Gaming Vision</span> to Life</h4>
                            <h2>Innovative <span> Gaming Solutions</span> Everywhere</h2>
                            <p>Our gaming studio delivers top-notch services in game development, art & design,
                                NFT creation, and VR & AR solutions. Transforming gaming with cutting-edge and
                                platform-independent solutions.</p>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.cover}>
                            <Link to={"/services"}>See All Services</Link>
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
