import styles from "./SideMenu.module.scss";
import WidgetsIcon from '@mui/icons-material/Widgets';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import {Link} from "react-router-dom";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ClearIcon from '@mui/icons-material/Clear';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import navData from '/public/data/NavData/navData.json';
import {useCallback, useContext, useEffect, useState} from "react";
import {LanguageSelection} from "../../Reusables/LanguageSelection/LanguageSelection.tsx";
import {useTranslation} from "react-i18next";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutConext.tsx";

interface NAV_DATA {
    id: string;
    name: string;
    route: string;
    children: NAV_DATA[] | null;
}


export const SideMenu = () => {
    const
        {
            menuState,
            handleMenuOpen
        } = useContext(LayoutContext);

    const [translatedNavigation, setTranslatedNavigation] = useState(navData?.en)
    const [mobileDropDown, setMobileDropDown] = useState(false);

    const handleOpenMobileDropdown = useCallback((): void => {
        setMobileDropDown(prev => !prev);
    }, [setMobileDropDown])

    const {i18n, t} = useTranslation();


    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedNavigation(navData?.en);
        } else if (i18n.language === "ru") {
            setTranslatedNavigation(navData?.ru);
        } else {
            setTranslatedNavigation(navData?.tr);
        }
    }, [i18n.language]);

    return (
        <>
            <aside className={`${styles.sideMenuWrapper} ${menuState ? styles.visible : ''}`}>
                <div className={styles.menuLogo} onClick={handleMenuOpen}>
                    {
                        menuState ?
                            <>
                                <ClearIcon/>
                                {t('sideMenu.closeMenu')}
                            </>
                            :
                            <>
                                <WidgetsIcon/>
                                {t('sideMenu.menu')}
                            </>
                    }
                </div>
                <div className={styles.socialBox}>
                    <Link to={"https://www.facebook.com/"} className={styles.iconBox} target={"_blank"}>
                        <FacebookIcon/>
                    </Link>
                    <Link to={"https://www.instagram.com/"} className={styles.iconBox} target={"_blank"}>
                        <InstagramIcon/>
                    </Link>
                    <Link to={"https://www.linkedin.com/"} className={styles.iconBox} target={"_blank"}>
                        <LinkedInIcon/>
                    </Link>
                    <Link to={"https://x.com/"} className={styles.iconBox} target={"_blank"}>
                        <XIcon/>
                    </Link>
                </div>
                <div className={styles.languageBox}>
                    <LanguageSelection/>
                </div>
            </aside>
            <div className={`${styles.sideMenuContent} ${menuState ? styles.menuActive : ""}`}>
                <nav className={styles.navigation}>
                    {translatedNavigation?.map((nav: NAV_DATA) => {
                        return (
                            <div
                                key={nav?.id}
                                className={`${styles.navItem}`}
                                onClick={nav?.id === "pages" ? handleOpenMobileDropdown : undefined}
                            >
                                {nav?.id === 'pages' ?
                                    <>
                                        <p className={`${styles.item}`}>{nav?.name}<ExpandLessOutlinedIcon
                                            className={mobileDropDown ? styles.svgRotated : ''}
                                        /></p>
                                        <div
                                            className={`${styles.navDropDown} ${mobileDropDown ? styles.activeMobileDropDown : ''}`}>
                                            <div className={styles.dropDownContent}>
                                                {nav?.children?.map((child: NAV_DATA) => {
                                                    return (
                                                        <Link
                                                            key={child?.id}
                                                            to={child?.route}
                                                            className={location.pathname === child?.route ? styles.current : ""}
                                                            onClick={handleMenuOpen}
                                                        >
                                                            {child?.name}
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <Link
                                        to={nav?.route}
                                        className={`${styles.item} ${location.pathname === nav?.route ? styles.current : ""}`}
                                        onClick={handleMenuOpen}
                                    >
                                        {nav?.name}
                                    </Link>
                                }
                            </div>
                        )
                    })}

                </nav>
                <div className={styles.contacts}>
                    <div className={styles.contactsEntity}>
                        <div className={styles.title}>
                            {t('sideMenu.office')}
                        </div>
                        <div className={styles.details}>
                            <div className={styles.icon}>
                                <LocationOnIcon/>
                            </div>
                            <div className={styles.address}>
                                <h2>{t('sideMenu.london')}</h2>
                                <p>{t('sideMenu.addressLine1')}</p>
                                <p>{t('sideMenu.addressLine2')}</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.contactsEntity}>
                        <div className={styles.title}>
                            {t('sideMenu.emailAddress')}
                        </div>
                        <div className={styles.details}>
                            <div className={styles.icon}>
                                <EmailIcon/>
                            </div>
                            <div className={styles.address}>
                                <p>{t('sideMenu.email1')}</p>
                                <p>{t('sideMenu.email2')}</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.contactsEntity}>
                        <div className={styles.title}>
                            {t('sideMenu.phoneNumber')}
                        </div>
                        <div className={styles.details}>
                            <div className={styles.icon}>
                                <LocalPhoneIcon/>
                            </div>
                            <div className={styles.address}>
                                <p>{t('sideMenu.phone1')}</p>
                                <p>{t('sideMenu.phone2')}</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.contactsEntity}>
                        <div className={styles.title}>
                            {t('sideMenu.workingHours')}
                        </div>
                        <div className={styles.details}>
                            <div className={styles.icon}>
                                <WatchLaterIcon/>
                            </div>
                            <div className={styles.address}>
                                <p>{t('sideMenu.hoursWeekdays')}</p>
                                <p>{t('sideMenu.hoursWeekend')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
