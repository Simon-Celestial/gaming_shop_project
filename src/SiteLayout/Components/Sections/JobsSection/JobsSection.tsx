import styles from "./JobsSection.module.scss";
import {JOBS_DATA} from "../../../../Types/types.ts";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import jobsData from "/public/data/JobsData/jobsData.json";
import {useTranslation} from "react-i18next";



export const JobsSection = () => {
    const [translatedJobs, setTranslatedJobs] = useState(jobsData.en);

    const {i18n,t} = useTranslation();

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedJobs(jobsData.en);
        } else if (i18n.language === "ru") {
            setTranslatedJobs(jobsData.ru);
        } else {
            setTranslatedJobs(jobsData.tr);
        }
    }, [i18n.language]);

    return (
        <section className={styles.jobsSection}>
            <div className={styles.sectionContent}>
                <div className={styles.topTitle}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>{t('jobsSection.lookingFor')} <span>{t('jobsSection.talentedProfessionals')}</span></h4>
                        <h2><span>{t('jobsSection.letsBuildTheFuture')}</span> {t('jobsSection.ofGamingIndustryTogether')}</h2>
                        <p>{t('jobsSection.beliefText')}</p>
                    </div>
                </div>
                <div className={styles.jobsContainer}>
                    {translatedJobs?.map((job: JOBS_DATA) => {
                        return (
                            <div key={job?.id} className={styles.jobBlock}>
                                <div className={styles.topRow}>
                                    <div className={styles.iconBox}>
                                        <Diversity2Icon/>
                                    </div>
                                    <div className={styles.jobNameColumn}>
                                        <h2>{job?.jobName}</h2>
                                        <p>{job?.jobLocation}</p>
                                    </div>
                                    <div className={styles.badgeBox}>
                                        {job?.category}
                                    </div>
                                </div>
                                <div className={styles.bottomRow}>
                                    <div className={styles.timeBox}>
                                        <WorkOutlineIcon/> <p>{t('jobsSection.fullTime')}</p>
                                    </div>
                                    <div className={styles.timeBox}>
                                        <AccessTimeIcon/> <p>{t('jobsSection.fullTime')}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    );
};
