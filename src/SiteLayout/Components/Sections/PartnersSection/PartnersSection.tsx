import styles from "./PartnersSection.module.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import partnersData from "/public/data/PartnersData/partnersData.json";
import {useTranslation} from "react-i18next";

interface PARTNERS_DATA {
    id: number;
    image: string;
}

export const PartnersSection = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.partnersSection}>
            <div className={styles.sectionContent}>
                <div className={styles.sectionTitle}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>{t('partnersSection.trusted')} <span>{t('partnersSection.by')}</span></h4>
                        <h2>{t('partnersSection.happyToWorkWith')} <span> {t('partnersSection.globalLargestBrands')}</span></h2>
                        <p>{t('partnersSection.proudToSupport')}</p>
                    </div>
                </div>
                <div className={styles.partnersContainer}>
                    {partnersData?.map((partner: PARTNERS_DATA) => {
                        return (
                            <div
                                key={partner?.id}
                                className={styles.partnerLogo}
                            >
                                <img
                                    src={partner?.image}
                                    alt="Partner Company"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
};
