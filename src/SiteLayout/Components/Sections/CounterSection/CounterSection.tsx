import styles from "./CounterSection.module.scss";
import {INFO_DATA} from "../../../../Types/types.ts";
import {Odometer} from "../../Reusables/Odometer/Odometer.tsx";
import {useCallback, useEffect, useRef, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import infoData from "/public/data/InfoData/infoData.json";
import {useTranslation} from "react-i18next";


export const CounterSection = () => {
    const [translatedInfo, setTranslatedInfo] = useState(infoData.en);
    const [hoveredBox, setHoveredBox] = useState(1);

    const {i18n} = useTranslation();
    const counterRef = useRef<HTMLDivElement | null>(null);

    const handleHoverBox = useCallback((boxID: number) => {
        setHoveredBox(boxID);
    }, [setHoveredBox]);

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedInfo(infoData.en);
        } else if (i18n.language === "ru") {
            setTranslatedInfo(infoData.ru);
        } else {
            setTranslatedInfo(infoData.tr);
        }
    }, [i18n.language]);


    return (
        <section className={styles.counterSection} ref={counterRef}>
            <div className={styles.sectionContent}>
                <div className={styles.informationContainer}>
                    {translatedInfo?.map((data: INFO_DATA) => {
                        return (
                            <div
                                key={data?.id}
                                className={`${styles.box} ${data?.id === hoveredBox ? styles.activeBox : ''}`}
                                onMouseEnter={() => handleHoverBox(data?.id)}>
                                <p>{data?.title}</p>
                                <Odometer
                                    currentRef={counterRef}
                                    stopValue={data?.value}
                                    latency={data?.delay}
                                />
                                {data?.prefix}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    );
};
