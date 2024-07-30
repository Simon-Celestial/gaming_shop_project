import styles from "./FooterOne.module.scss";
import {Link} from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";
import {ChangeEvent, useCallback, useState} from "react";
import {Bounce, toast} from "react-toastify";

const validateEmail = (email: string): boolean => {
    const emailRegex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const FooterOne = () => {

    const [mailInput, setMailInput] = useState<string>("");

    const handleMessageValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMailInput(e.target.value)
    }, [setMailInput]);

    const handleSendMessage = useCallback(() => {
        if (mailInput === "") {
            toast.error("Field must not be empty!", {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        } else if (!validateEmail(mailInput)) {
            toast.error("Incorrect mail format!", {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        } else {
            toast.success("Message sent successfully!", {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
            setMailInput("");
        }
    }, [mailInput, setMailInput]);

    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.socialContainer}>
                <div className={styles.iconContainer}>
                    <Link to={"https://www.facebook.com/"} target={"_blank"}><FacebookIcon/> Facebook</Link>
                </div>
                <div className={styles.iconContainer}>
                    <Link to={"https://www.instagram.com/"} target={"_blank"}><InstagramIcon/> Instagram</Link>
                </div>
                <div className={styles.iconContainer}>
                    <Link to={"https://www.linkedin.com/"} target={"_blank"}><LinkedInIcon/> linkedin</Link>
                </div>
                <div className={styles.iconContainer}>
                    <Link to={"https://x.com/"} target={"_blank"}><XIcon/> Twitter</Link>
                </div>
            </div>
            <div className={styles.footerContent}>
                <div className={styles.boxesContainer}>
                    <div className={styles.boxesTitle}>
                        <h2>GAMESTORM</h2>
                        <p>
                            Gamestorm is a gaming shop selling
                            innovative and engaging products for players of all ages. Offering a wide
                            variety of gaming experiences.
                        </p>
                        <div className={styles.infoRow}>
                            <div className={styles.infoIcon}>
                                <LocationOnIcon/>
                            </div>
                            <div className={styles.infoTitle}>
                                <h3>London</h3>
                                <p>Al. Brucknera Aleksandra 63, Wrocław 51-410</p>
                            </div>
                        </div>
                        <div className={styles.infoRow}>
                            <div className={styles.infoIcon}>
                                <LocationOnIcon/>
                            </div>
                            <div className={styles.infoTitle}>
                                <h3>New York</h3>
                                <p>7012 Green Lake Ave., Poughkeepsie, NY 12601</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxesBlock}>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                    </div>
                </div>
                <div className={styles.titleContainer}>
                    <div className={styles.titleBox}>
                        <h2>Stay informed With News On All Updated</h2>
                        <p>Want to be the first to know freshest news? Subscribe out newsletter!</p>
                        <div className={styles.inputBox}>
                            <input
                                type="email"
                                name={"mailInput"}
                                placeholder={"Enter Your Email..."}
                                value={mailInput}
                                onChange={handleMessageValue}
                            />
                            <div onClick={handleSendMessage}>
                                <DefaultButton
                                    link={""}
                                    title={"Send Message"}
                                    grayBtn={false}
                                    wide={false}
                                />
                            </div>
                        </div>
                        <div className={styles.postBox}>
                            <h2>Instagram Posts</h2>
                            <div className={styles.postsRow}>
                                <Link to={"https://www.instagram.com/"} target={"_blank"} className={styles.post}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/instagram-img-1.png"
                                         alt="Post"/>
                                </Link>
                                <Link to={"https://www.instagram.com/"} target={"_blank"} className={styles.post}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/instagram-img-2.png"
                                         alt="Post"/>
                                </Link>
                                <Link to={"https://www.instagram.com/"} target={"_blank"} className={styles.post}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/instagram-img-3.png"
                                         alt="Post"/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Copyright © 2023 <Link to={"/"}>Gamestorm</Link> - All Right Reserved</p>
            </div>
        </footer>
    );
};
