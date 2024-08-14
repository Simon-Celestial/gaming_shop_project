import styles from './ContactUsSection.module.scss';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import {ContactForm} from "../../Reusables/ContactForm/ContactForm.tsx";
import {useTranslation} from "react-i18next";

export const ContactUsSection = () => {
    const {t} = useTranslation();
    return (
        <section className={styles.contactUsSection}>
            <div className={styles.sectionContent}>
                <div className={styles.titleBlock}>
                    <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                        <h4>{t('contactUsSection.haveQuestions')} <span>{t('contactUsSection.questions')}</span></h4>
                        <h2>{t('contactUsSection.weWouldLoveToHear')} <span>{t('contactUsSection.hearFromYou')}</span></h2>
                        <p>{t('contactUsSection.description')}</p>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.icon}>
                            <LocalPhoneIcon/>
                        </div>
                        <p>+(0) 123 - 456 - 789</p>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.icon}>
                            <EmailIcon/>
                        </div>
                        <p>example@example.com</p>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <ContactForm/>
                </div>
            </div>
        </section>

    );
};
