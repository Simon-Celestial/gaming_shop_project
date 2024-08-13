import styles from './ContactUsThreeSection.module.scss';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import {ContactForm} from "../../Reusables/ContactForm/ContactForm.tsx";

export const ContactUsThreeSection = () => {
    return (
        <section className={styles.contactUsSection}>
            <div className={styles?.sectionContent}>
                <div className={styles.leftContainer}>
                    <div className={styles.titleBlock}>
                        <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                            <h4>Have <span> Questions?</span></h4>
                            <h2>We'd Love To, <span> Hear From You</span></h2>
                        </div>
                    </div>
                    <p>Please fill out the form and let us know about your concerns.We will try our best to
                        provide optimized solutions.</p>
                    <div className={styles.contactRow}>
                        <div className={styles.circle}>
                            <LocalPhoneIcon/>
                        </div>
                        <span>+(2) 578 - 365 - 379</span>
                    </div>
                    <div className={styles.contactRow}>
                        <div className={styles.circle}>
                            <EmailIcon/>
                        </div>
                        <span>gamestorm@info.com</span>
                    </div>

                </div>
                <div className={styles.rightContainer}>
                    <ContactForm/>
                </div>

            </div>
        </section>

    );
};
