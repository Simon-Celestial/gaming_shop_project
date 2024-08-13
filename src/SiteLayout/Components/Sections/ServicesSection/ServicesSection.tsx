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

    const {i18n} = useTranslation();

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
                        <h4>Game <span>Design & Development</span> Services</h4>
                        <h2>Our Comprehensive Game <span> Development Services</span></h2>
                        <p>End-to-end game development, revamping, and outsourcing services. Immersive
                            technology expertise for top-class gaming experiences</p>
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
                                <Link to={data?.link} className={styles.findOut}>
                                    <p>Find Out</p>
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
