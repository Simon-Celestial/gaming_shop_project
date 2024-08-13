import styles from './GameFeaturesSection.module.scss';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useIconComponent} from "../../../../Hooks/UseIconComponent/UseIconComponent.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import benefitsData from "/public/data/BenefitsData/benefitsData.json";


interface BENEFITS_DATA {
    id: number;
    title: string;
    description: string;
    icon: string;
}



export const GameFeaturesSection = () => {
    const [translatedBenefits, setTranslatedBenefits] = useState([benefitsData?.en]);

    const {i18n} = useTranslation();
    const getIcon = useIconComponent();


    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedBenefits(benefitsData?.en);

        } else if (i18n.language === "ru") {
            setTranslatedBenefits(benefitsData?.ru);

        } else {
            setTranslatedBenefits(benefitsData?.tr);
        }
    }, [i18n.language]);

    return (
        <section className={styles.gameFeaturesSection}>
            <div className={styles.sectionContent}>
                <div className={styles.titleBlock}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>Client-Centric <span> Creativity</span></h4>
                        <h2>Our Fundamental Benefits in <span> Game ART and Development</span></h2>
                        <p>A client-centric approach coupled with creative freedom, professional
                            experimentation, and a willingness to create beyond the limits makes us a great
                            partner for businesses looking to deliver a product that stands out.</p>
                    </div>
                </div>
                <div className={styles.benefitsContainer}>
                    {translatedBenefits?.map((data: BENEFITS_DATA) => {
                        return (
                            <div key={data?.id} className={styles.box}>
                                <div className={styles.circle}>
                                    {getIcon(data?.icon)}
                                </div>
                                <div className={styles.title}>
                                    <h2>{data?.title}</h2>
                                    <p>{data?.description}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </section>
    );
};
