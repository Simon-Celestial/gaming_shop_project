import styles from "./ContactSection.module.scss";
import {Link} from "react-router-dom";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export const ContactSection = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.sectionContent}>
                <div className={styles.title}>
                    <p>Contact With Us</p>
                    <h2>Contact us today for a free consultation</h2>
                    <Link to={"/contact"}>Start Your Project</Link>
                </div>
                <div className={styles.animatedBox}>
                    <div className={styles.row}>
                        <PhoneAndroidIcon/>
                        <span>Call Us</span>
                    </div>
                    <div className={styles.row}>
                        <h2>(302) 555-0107</h2>
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
