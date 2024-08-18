import styles from './ServicesSection.module.scss';
import {Link} from "react-router-dom";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import {useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import servicesData from "/public/data/ServicesData/servicesData.json";
import {useTranslation} from "react-i18next";


interface SERVICES_DATA {
    id: number;
    title: string;
    link: string;
    image: string;
}

export const ServicesSection = () => {
    const [translatedServices, setTranslatedServices] = useState([servicesData?.en]);

    const {i18n, t} = useTranslation();

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedServices(servicesData?.en);

        } else if (i18n.language === "ru") {
            setTranslatedServices(servicesData?.ru);

        } else {
            setTranslatedServices(servicesData?.tr);
        }
    }, [i18n.language]);


    return (
        <section className={styles.servicesSection}>
            <div className={styles.sectionContent}>
                <div className={styles.titleBlock}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>{t('servicesSection.Game')}
                            <span> {t('servicesSection.DesignAndDevelopment')} </span>
                            {t('servicesSection.Services')}
                        </h4>
                        <h2>{t('servicesSection.OurComprehensiveGame')}
                            <span> {t('servicesSection.DevelopmentServices')}</span></h2>
                        <p>{t('servicesSection.EndToEndGameDevelopment')}</p>
                    </div>
                </div>
                <div className={styles.containersBlock}>
                    {translatedServices?.map((data: SERVICES_DATA) => {
                        return (
                            <div
                                key={data?.id}
                                className={styles.container}
                                style={{
                                    backgroundImage: data?.image
                                }}
                            >
                                <Link to={"/about"} className={styles.findOut}>
                                    <p
                                        style={{
                                            fontWeight: i18n.language === "ru" ? "600" : "",
                                            fontSize: i18n.language === "ru" ? "15px" : ""
                                        }}
                                    >{t('servicesSection.FindOut')}</p>
                                    <SubdirectoryArrowRightIcon/>
                                </Link>
                                <div className={styles.cover}></div>
                                <div className={styles.text}>{data?.title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    );
};
