import styles from "./FooterTwo.module.scss";
import {Link} from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";
import {useTranslation} from "react-i18next";
import {ChangeEvent, useCallback, useState} from "react";
import {Bounce, toast} from "react-toastify";

const validateEmail = (email: string): boolean => {
    const emailRegex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const FooterTwo = () => {

    const [mailInput, setMailInput] = useState<string>("");

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
    }, [mailInput]);

    const {t} = useTranslation();
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div className={styles.footerTitle}>
                    <div className={styles.titleLeft}>
                        <h2>{t('footerTwo.footerTitle')}</h2>
                        <p>{t('footerTwo.footerContactText')} <Link to={"/contact"}>{t('footerTwo.footerContactLink')}</Link></p>
                    </div>
                    <div className={styles.titleRight}>
                        <div className={styles.inputWrapper}>
                            <input
                                type="email"
                                name="emailInput"
                                placeholder={t('footerTwo.footerEmailPlaceholder')}
                                value={mailInput}
                                onChange={handleMessageValue}
                            />
                            <div style={{
                                border: "1px dashed #F5F5F5",
                                borderRadius: "16px"
                            }}>
                                <div onClick={handleSendMessage}>
                                <DefaultButton

                                    link={""}
                                    title={t('footerTwo.footerSubscribeButton')}
                                    grayBtn={false}
                                    wide={false}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerInfo}>
                    <div className={styles.infoBox}>
                        <h2>{t('footerTwo.footerOfficeTitle')}</h2>
                        <div className={styles.infoContent}>
                            <div className={styles.iconBox}>
                                <LocationOnIcon/>
                            </div>
                            <div className={styles.title}>
                                <h3>{t('footerTwo.footerOfficeLocation')}</h3>
                                <p>{t('footerTwo.footerOfficeAddress')}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <h2>{t('footerTwo.footerEmailTitle')}</h2>
                        <div className={styles.infoContent}>
                            <div className={styles.iconBox}>
                                <MailIcon/>
                            </div>
                            <div className={styles.title}>
                                <p>{t('footerTwo.footerEmailAddress1')}</p>
                                <p>{t('footerTwo.footerEmailAddress2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <h2>{t('footerTwo.footerPhoneTitle')}</h2>
                        <div className={styles.infoContent}>
                            <div className={styles.iconBox}>
                                <PhoneAndroidIcon/>
                            </div>
                            <div className={styles.title}>
                                <p>{t('footerTwo.footerPhoneNumber1')}</p>
                                <p>{t('footerTwo.footerPhoneNumber2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <h2>{t('footerTwo.footerWorkingHoursTitle')}</h2>
                        <div className={styles.infoContent}>
                            <div className={styles.iconBox}>
                                <WatchLaterIcon/>
                            </div>
                            <div className={styles.title}>
                                <p>{t('footerTwo.footerWorkingHours1')}</p>
                                <p>{t('footerTwo.footerWorkingHours2')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerCopyright}>
                    <p>{t('footerTwo.footerCopyright')} <Link to={"/"}>{t('footerTwo.footerCopyrightLink')}</Link>
                        {t('footerTwo.footerAllRightsReserved')}</p>
                    <span>
                        <Link to={"/"}>{t('footerTwo.footerPrivacyLink')}</Link>
                        <Link to={"/"}>{t('footerTwo.footerTermsLink')}</Link>
                    </span>
                </div>

            </div>
        </footer>
    );
};
