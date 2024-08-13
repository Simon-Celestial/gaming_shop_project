import styles from './ContactUsSection.module.scss';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import {ContactForm} from "../../Reusables/ContactForm/ContactForm.tsx";

export const ContactUsSection = () => {
    return (
        <section className={styles.contactUsSection}>
            <div className={styles.sectionContent}>
                <div className={styles.titleBlock}>
                    <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                        <h4>Have <span>Questions?</span></h4>
                        <h2>We'd Love To <span>Hear From You!</span></h2>
                        <p>Please fill out the form and let us know about your concerns.We will try our best to
                            provide optimized solutions.</p>
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
