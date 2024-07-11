import styles from "./SideMenu.module.scss";
import WidgetsIcon from '@mui/icons-material/Widgets';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import {Link} from "react-router-dom";

export const SideMenu = () => {
    return (
        <div className={styles.sideMenuWrapper}>
            <div className={styles.menuLogo}>
                <WidgetsIcon />
                menu
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
    );
};
