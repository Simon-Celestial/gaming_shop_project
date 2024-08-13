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
export const ContactUsTwoSection = () => {
    return (
        <section className={styles.contactUsSection}>
            <div className={styles.sectionContent}>
                <div className={styles.sectionTitle}>
                    <div className={styles.pageHeading}>
                        <h4>Have <span>Questions?</span></h4>
                        <h2>Can’t find what are <span> you Looking for ?</span> Get in Touch</h2>
                        <p>Please fill out the form and let us know about your concerns.We will try our best to
                            provide optimized solutions.</p>
                    </div>
                </div>
                <div className={styles.mainContainer}>
                    <div className={styles.formWrapper}>
                        <h3>Write A Message</h3>
                        <ContactForm/>
                    </div>
                    <div className={styles.infoWrapper}>
                        <h2>Get In Touch</h2>
                        <div className={styles.infoRow}>
                            <h2><LocalPhoneIcon/> Have any Questions</h2>
                            <h3>(302) 555-0107 <span>|</span>(704) 555-0127</h3>
                        </div>
                        <div className={styles.infoRow}>
                            <h2><LocationOnIcon/> Contact Address</h2>
                            <h3>San Francisco, California, 53 Shore View Avenue</h3>
                        </div>
                        <div className={styles.infoRow}>
                            <h2><AccessTimeFilledIcon/> Opening Hours</h2>
                            <h3>Mon-Fri: 9:00 AM - 6:00 PM</h3>
                            <h3>Sat: 10:00 AM - 4:00 PM</h3>
                            <h3>Sun: Closed</h3>
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
