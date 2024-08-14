import styles from './ContactUsTwoSection.module.scss';
import {ContactForm} from "../../Reusables/ContactForm/ContactForm.tsx";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import {Link} from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import {useTranslation} from "react-i18next";
export const ContactUsTwoSection = () => {
    const {t} = useTranslation();
    return (
        <section className={styles.contactUsSection}>
            <div className={styles.sectionContent}>
                <div className={styles.sectionTitle}>
                    <div className={styles.pageHeading}>
                        <h4>{t('contactUsTwoSection.have')} <span>{t('contactUsTwoSection.questions')}</span></h4>
                        <h2>{t('contactUsTwoSection.cantFindWhatYouLookingFor')} <span> {t('contactUsTwoSection.lookingFor')}</span> {t('contactUsTwoSection.getInTouch')}</h2>
                        <p>{t('contactUsTwoSection.formNote')}</p>
                    </div>
                </div>
                <div className={styles.mainContainer}>
                    <div className={styles.formWrapper}>
                        <h3>{t('contactUsTwoSection.writeAMessage')}</h3>
                        <ContactForm/>
                    </div>
                    <div className={styles.infoWrapper}>
                        <h2>{t('contactUsTwoSection.getInTouchTitle')}</h2>
                        <div className={styles.infoRow}>
                            <h2><LocalPhoneIcon/> {t('contactUsTwoSection.haveAnyQuestions')}</h2>
                            <h3>(302) 555-0107 <span>|</span>(704) 555-0127</h3>
                        </div>
                        <div className={styles.infoRow}>
                            <h2><LocationOnIcon/> {t('contactUsTwoSection.contactAddress')}</h2>
                            <h3>{t('contactUsTwoSection.address')}</h3>
                        </div>
                        <div className={styles.infoRow}>
                            <h2><AccessTimeFilledIcon/> {t('contactUsTwoSection.openingHours')}</h2>
                            <h3>{t('contactUsTwoSection.monFriHours')}</h3>
                            <h3>{t('contactUsTwoSection.satHours')}</h3>
                            <h3>{t('contactUsTwoSection.sunClosed')}</h3>
                        </div>
                        <div className={styles.socialContainer}>
                            <Link to={"https://www.facebook.com/"} target={"_blank"}><FacebookIcon/></Link>
                            <Link to={"https://www.instagram.com/"} target={"_blank"}><InstagramIcon/></Link>
                            <Link to={"https://www.linkedin.com/"} target={"_blank"}><LinkedInIcon/></Link>
                            <Link to={"https://x.com/"} target={"_blank"}><XIcon/></Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};
