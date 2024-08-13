import styles from "./ContactSection.module.scss";
import {Link} from "react-router-dom";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import {useTranslation} from "react-i18next";

export const ContactSection = () => {
    const {t,i18n} = useTranslation();
    return (
        <section className={styles.contactSection}>
            <div className={styles.sectionContent}>
                <div className={styles.title}>
                    <p
                        style={{
                            fontWeight: i18n.language === "ru"? "600" : ''
                    }}
                    >
                        {t('contactSection.contactWithUs')}</p>
                    <h2>{t('contactSection.contactUsToday')}</h2>
                    <Link to={"/contact"}>{t('contactSection.startYourProject')}</Link>
                </div>
                <div className={styles.animatedBox}>
                    <div className={styles.row}>
                        <PhoneAndroidIcon/>
                        <span>{t('contactSection.callUs')}</span>
                    </div>
                    <div className={styles.row}>
                        <h2>{t('contactSection.phoneNumber')}</h2>
                    </div>
                    <span className={`${styles.decoration} ${styles.circleOne}`}></span>
                    <span className={`${styles.decoration} ${styles.circleTwo}`}></span>
                    <span className={`${styles.decoration} ${styles.circleThree}`}></span>
                    <span className={`${styles.decoration} ${styles.circleFour}`}></span>
                    <span className={`${styles.decoration} ${styles.circleFive}`}></span>
                    <span className={`${styles.decoration} ${styles.circleSix}`}></span>
                    <span className={`${styles.decoration} ${styles.circleSeven}`}></span>
                    <span className={`${styles.decoration} ${styles.circleEight}`}></span>
                    <span className={`${styles.decoration} ${styles.circleNine}`}></span>
                    <span className={`${styles.decoration} ${styles.circleTen}`}></span>
                </div>
            </div>
        </section>

    );
};
