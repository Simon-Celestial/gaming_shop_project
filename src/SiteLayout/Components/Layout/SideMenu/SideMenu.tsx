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
import {useCallback, useState} from "react";

interface NAV_DATA {
    id: string;
    name: string;
    route: string;
}


export const SideMenu = () => {
    const [menuState, setMenuState] = useState(false);

    const handleMenuOpen = useCallback(() => {
        setMenuState(prevState => !prevState);
    }, []);
    return (
        <>
            <div className={styles.sideMenuWrapper}>
                <div className={styles.menuLogo} onClick={handleMenuOpen}>
                    {
                        menuState ?
                            <>
                                <ClearIcon/>
                                Close Menu
                            </>
                            :
                            <>
                                <WidgetsIcon/>
                                menu
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
                    ENG
                </div>

            </div>
            <div className={`${styles.sideMenuContent} ${menuState ? styles.menuActive : ""}`}>
                <nav className={styles.navigation}>
                    {navData?.map((nav: NAV_DATA) => {
                        return (
                            <div key={nav?.id} className={`${styles.navItem} `}>
                                {nav?.id === 'pages' ?
                                    <>
                                        <p className={`${styles.item}`}>{nav?.name}<ExpandLessOutlinedIcon/></p>
                                        <div className={styles.navDropDown}>
                                            <div className={styles.dropDownContent}>
                                                <Link to={"/"}>
                                                    Option 1
                                                </Link>
                                                <Link to={"/"}>
                                                    Option 2
                                                </Link>
                                                <Link to={"/"}>
                                                    Option 3
                                                </Link>
                                                <Link to={"/"}>
                                                    Option 4
                                                </Link>
                                                <Link to={"/"}>
                                                    Option 5
                                                </Link>
                                                <Link to={"/"}>
                                                    Option 6
                                                </Link>
                                                <Link to={"/"}>
                                                    Option 7
                                                </Link>
                                                <Link to={"/"}>
                                                    Option 8
                                                </Link>
                                            </div>

                                        </div>
                                    </>
                                    :
                                    <Link to={nav?.route}
                                          className={`${styles.item} ${location.pathname === nav?.route || location.pathname === "/" ? styles.current : ""}`}>{nav?.name}</Link>
                                }
                            </div>
                        )
                    })}

                </nav>
                <div className={styles.contacts}>
                    <div className={styles.contactsEntity}>
                        <div className={styles.title}>
                            Office
                        </div>
                        <div className={styles.details}>
                            <div className={styles.icon}>
                                <LocationOnIcon/>
                            </div>
                            <div className={styles.address}>
                                <h2>London</h2>
                                <p>Al. Brucknera Aleksandra 63,</p>
                                <p>Wrocław 51-410</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.contactsEntity}>
                        <div className={styles.title}>
                            Email Address
                        </div>
                        <div className={styles.details}>
                            <div className={styles.icon}>
                                <EmailIcon/>
                            </div>
                            <div className={styles.address}>
                                <p>sales@gamestorm.com</p>
                                <p>info@gamestorm.com</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.contactsEntity}>
                        <div className={styles.title}>
                            Phone Number
                        </div>
                        <div className={styles.details}>
                            <div className={styles.icon}>
                                <LocalPhoneIcon/>
                            </div>
                            <div className={styles.address}>
                                <p>(123) 1232-1234</p>
                                <p>(123) 1232-1234</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.contactsEntity}>
                        <div className={styles.title}>
                            Working Hours
                        </div>
                        <div className={styles.details}>
                            <div className={styles.icon}>
                                <WatchLaterIcon/>
                            </div>
                            <div className={styles.address}>
                                <p>Mon-Fri: 09: 00-18: 00</p>
                                <p>Sat-Sun: Weekend</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
