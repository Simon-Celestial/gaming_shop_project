import styles from "./FaqsSection.module.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";
import {useCallback, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import askedQuestionsData from "/public/data/AskedQuestionsData/askedQuestionsData.json";


interface ASKED_QUESTIONS_DATA {
    id: number;
    question: string;
    answer: string;
}
export const FaqsSection = () => {
    const [translatedQuestions, setTranslatedQuestions] = useState(askedQuestionsData.en);
    const [selectedAccordion, setSelectedAccordion] = useState<number | null>(null);

    const {i18n,t} = useTranslation();

    const handleOpenAccordion = useCallback((selectedID: number) => {
        setSelectedAccordion(prev => {
            if (prev === selectedID) {
                return null;
            } else {
                return selectedID;
            }
        });
    }, []);

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedQuestions(askedQuestionsData.en);
        } else if (i18n.language === "ru") {
            setTranslatedQuestions(askedQuestionsData.ru);
        } else {
            setTranslatedQuestions(askedQuestionsData.tr);
        }
    }, [i18n.language]);


    return (
        <section className={styles.faqsSection}>
            <div className={`${styles.decoration} ${styles.topDecor}`}>
                <img src="/images/icons/faq-frame.png" alt="Decoration"/>
            </div>
            <div className={`${styles.decoration} ${styles.bottomDecor}`}>
                <img src="/images/icons/faq-frame.png" alt="Decoration"/>
            </div>
            <div className={styles.sectionContent}>
                <div className={styles.sectionTitle}>
                    <div className={styles.pageHeading}>
                        <h4>{t('faqsSection.titleCommonQuestions')} <span>{t('faqsSection.titleCompany')}</span></h4>
                        <h2>{t('faqsSection.titleFaq')} <span> {t('faqsSection.titleGamingStudio')}</span></h2>
                        <p>{t('faqsSection.description')}</p>
                    </div>
                </div>
                <div className={styles.mainContainer}>
                    <div className={styles.accordion}>
                        {translatedQuestions?.map((data: ASKED_QUESTIONS_DATA) => {
                            return (
                                <div
                                    key={data?.id}
                                    className={`${styles.questionBox} ${data?.id === selectedAccordion ? styles.accordionOpen : ''}`}
                                    onClick={() => handleOpenAccordion(data?.id)}
                                >
                                    <div className={styles.expand}>
                                        {selectedAccordion === data?.id ?
                                            <RemoveIcon
                                                style={{
                                                    color: data?.id === selectedAccordion ? "#0EF0AD" : ''
                                                }}
                                            />
                                            :
                                            <AddIcon/>
                                        }
                                    </div>
                                    <h2
                                        style={{
                                            color: data?.id === selectedAccordion ? "#0EF0AD" : ''
                                        }}

                                    >{data?.question}</h2>
                                    <p>{data?.answer}</p>
                                </div>
                            )
                        })}

                    </div>
                    <div className={styles.faq}>
                        <div className={styles.image}>
                            <img src="/images/icons/faqIcon.png" alt="FAQ image"/>
                        </div>
                        <h2>{t('faqsSection.faqTitle')}</h2>
                        <p>{t('faqsSection.faqDescription')}</p>
                        <div className={styles.btnWrapper}>
                            <DefaultButton
                                link={"/about"}
                                wide={false}
                                grayBtn={false}
                                title={t('faqsSection.btnLearnMore')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
