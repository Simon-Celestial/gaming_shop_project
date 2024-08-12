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
import {useTranslation} from "react-i18next";

const validateEmail = (email: string): boolean => {
    const emailRegex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const FooterOne = () => {

    const [mailInput, setMailInput] = useState<string>("");

    const {t} = useTranslation();

    const handleMessageValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMailInput(e.target.value)
    }, [setMailInput]);

    const handleSendMessage = useCallback(() => {
        if (mailInput === "") {
            toast.error(`${t('footerOne.toastFieldEmpty')}`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        } else if (!validateEmail(mailInput)) {
            toast.error(`${t('footerOne.toastInvalidEmail')}`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        } else {
            toast.success(`${t('footerOne.toastSuccess')}`, {
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
    }, [mailInput, t]);

    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.socialContainer}>
                <div className={styles.iconContainer}>
                    <Link to={"https://www.facebook.com/"} target={"_blank"}><FacebookIcon/> {t('footerOne.facebook')}</Link>
                </div>
                <div className={styles.iconContainer}>
                    <Link to={"https://www.instagram.com/"} target={"_blank"}><InstagramIcon/> {t('footerOne.instagram')}</Link>
                </div>
                <div className={styles.iconContainer}>
                    <Link to={"https://www.linkedin.com/"} target={"_blank"}><LinkedInIcon/> {t('footerOne.linkedin')}</Link>
                </div>
                <div className={styles.iconContainer}>
                    <Link to={"https://x.com/"} target={"_blank"}><XIcon/> {t('footerOne.twitter')}</Link>
                </div>
            </div>
            <div className={styles.footerContent}>
                <div className={styles.boxesContainer}>
                    <div className={styles.boxesTitle}>
                        <h2>{t('footerOne.gamestormTitle')}</h2>
                        <p>
                            {t('footerOne.gamestormDescription')}
                        </p>
                        <div className={styles.infoRow}>
                            <div className={styles.infoIcon}>
                                <LocationOnIcon/>
                            </div>
                            <div className={styles.infoTitle}>
                                <h3>{t('footerOne.london')}</h3>
                                <p>{t('footerOne.londonAddress')}</p>
                            </div>
                        </div>
                        <div className={styles.infoRow}>
                            <div className={styles.infoIcon}>
                                <LocationOnIcon/>
                            </div>
                            <div className={styles.infoTitle}>
                                <h3>{t('footerOne.newYork')}</h3>
                                <p>{t('footerOne.newYorkAddress')}</p>
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
                        <h2>{t('footerOne.stayInformed')}</h2>
                        <p>{t('footerOne.subscribeText')}</p>
                        <div className={styles.inputBox}>
                            <input
                                type="email"
                                name={"mailInput"}
                                placeholder={t('footerOne.emailPlaceholder')}
                                value={mailInput}
                                onChange={handleMessageValue}
                            />
                            <div onClick={handleSendMessage}>
                                <DefaultButton
                                    link={""}
                                    title={t('footerOne.sendMessage')}
                                    grayBtn={false}
                                    wide={false}
                                />
                            </div>
                        </div>
                        <div className={styles.postBox}>
                            <h2>{t('footerOne.instagramPosts')}</h2>
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
                <p>{t('footerOne.copyright')} <Link to={"/"}>Gamestorm</Link> {t('footerOne.allRightsReserved')}</p>
            </div>
        </footer>
    );
};
