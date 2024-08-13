import styles from "../../../Pages/ServicesPage/ServicesPage.module.scss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import processData from "/public/data/ProcessData/processData.json";
import {useIconComponent} from "../../../../Hooks/UseIconComponent/UseIconComponent.tsx";


interface PROCESS_DATA {
    id: number;
    title: string;
    description: string;
    icon: string;
}


export const HowItWorksSection = () => {
    const [translatedProcess, setTranslatedProcess] = useState([processData?.en]);

    const {i18n} = useTranslation();
    const getIcon = useIconComponent();

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedProcess(processData?.en);

        } else if (i18n.language === "ru") {
            setTranslatedProcess(processData?.ru);

        } else {
            setTranslatedProcess(processData?.tr);
        }
    }, [i18n.language]);

    return (
        <section className={styles.howItWorksSection}>
            <div className={styles.sectionContent}>
                <div className={styles.titleBlock}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>A Simple yet Powerful and efficient <span> Process</span></h4>
                        <h2>Our Game <span> Development Process</span></h2>
                        <p>Take your game development for next level in 10 simple step. Always work
                            Done By the Following Process</p>
                    </div>
                </div>
                <div className={styles.boxesRow}>
                    {translatedProcess?.map((data: PROCESS_DATA) => {
                        return (
                            <div key={data?.id} className={styles.box}>
                                <div className={styles.arrows}>
                                    <KeyboardDoubleArrowRightIcon/>
                                </div>
                                <div className={styles.circle}>
                                    {getIcon(data?.icon)}
                                </div>
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
