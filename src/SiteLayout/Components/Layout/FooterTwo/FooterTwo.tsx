import styles from "./FooterTwo.module.scss";
import {Link} from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";

export const FooterTwo = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div className={styles.footerTitle}>
                    <div className={styles.titleLeft}>
                        <h2>Let’s Get started</h2>
                        <p>For further info and support <Link to={"/contact"}>contact us</Link></p>
                    </div>
                    <div className={styles.titleRight}>
                        <div className={styles.inputWrapper}>
                            <input
                                type="email"
                                name="emailInput"
                                placeholder="Enter Your email..."
                            />
                            <div style={{
                                border: "1px dashed #F5F5F5",
                                borderRadius: "16px"
                            }}>
                                <DefaultButton
                                    link={""}
                                    title={"Subscribe"}
                                    grayBtn={false}
                                    wide={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerInfo}>
                    <div className={styles.infoBox}>
                        <h2>Office</h2>
                        <div className={styles.infoContent}>
                            <div className={styles.iconBox}>
                                <LocationOnIcon/>
                            </div>
                            <div className={styles.title}>
                                <h3>London</h3>
                                <p>Al. Brucknera Aleksandra 63, Wrocław 51-410</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <h2>Email Address</h2>
                        <div className={styles.infoContent}>
                            <div className={styles.iconBox}>
                                <MailIcon/>
                            </div>
                            <div className={styles.title}>
                                <p>info@gamestorm.com</p>
                                <p>sales@gamestorm.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <h2>Phone Number</h2>
                        <div className={styles.infoContent}>
                            <div className={styles.iconBox}>
                                <PhoneAndroidIcon/>
                            </div>
                            <div className={styles.title}>
                                <p>(302) 555-0107</p>
                                <p>(704) 555-0127</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <h2>Working Hours</h2>
                        <div className={styles.infoContent}>
                            <div className={styles.iconBox}>
                                <WatchLaterIcon/>
                            </div>
                            <div className={styles.title}>
                                <p>Mon-Fri: 09:00 - 18:00</p>
                                <p>Sat-Sun: Weekend</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerCopyright}>
                    <p>Copyright © 2023 <Link to={"/"}>Gamestorm</Link>
                        - All Right Reserved</p>
                    <span>
                        <Link to={"/"}>Privacy</Link>
                        <Link to={"/"}>Terms & Services</Link>
                    </span>
                </div>

            </div>
        </footer>
    );
};
