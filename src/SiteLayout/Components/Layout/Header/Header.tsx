import styles from './Header.module.scss';
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <div className={styles.leftBlock}>
                    <Link to={"/"} className={styles.logoBlock}>
                        <img src="/images/siteLogo.png" alt="Project Logo"/>
                        <p>game<span>storm</span></p>
                    </Link>
                    <div className={styles.phoneBlock}>
                        <PhoneAndroidSharpIcon/>
                        <a href="tel:(302) 555-0107" target={"_blank"}>(302) 555-0107</a>
                    </div>
                </div>
                <nav className={styles.navigationBlock}>
                    <div className={styles.navEntity}>
                        <Link to={"/"} className={styles.entity}>Home</Link>
                    </div>
                    <div className={styles.navEntity}>
                        <Link to={"/shop"} className={styles.entity}>Shop</Link>
                    </div>
                    <div className={styles.navEntity}>
                        <p className={styles.entity}>Pages<ExpandLessOutlinedIcon/></p>
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
                    </div>
                    <div className={styles.navEntity}>
                        <Link to={"/"} className={styles.entity}>About</Link>
                    </div>
                    <div className={styles.navEntity}>
                        <Link to={"/"} className={styles.entity}>Blog</Link>
                    </div>
                    <div className={styles.navEntity}>
                        <Link to={"/"} className={styles.entity}>Contact</Link>
                    </div>
                </nav>
                <div className={styles.rightBlock}>
                    <div className={styles.buttonBlock}>
                    <SearchSharpIcon/>
                    </div>
                    <div className={styles.buttonBlock}>
                        <FavoriteBorderIcon/>
                    </div>
                    <div className={styles.buttonBlock}>
                        <PersonOutlineIcon/>
                    </div>
                    <div className={`${styles.buttonBlock} ${styles.cartButton}`}>
                        <ShoppingCartOutlinedIcon />
                    </div>
                </div>
            </div>
        </header>
    );
};
