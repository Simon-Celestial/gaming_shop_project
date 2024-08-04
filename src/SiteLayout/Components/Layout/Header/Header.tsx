import styles from './Header.module.scss';
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import {Link, useLocation} from "react-router-dom";
import {SideMenu} from "../SideMenu/SideMenu.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import navData from '/public/data/NavData/navData.json';
import {Basket} from "../Basket/Basket.tsx";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {BasketContext} from "../../../../Context/BasketContext/BasketContext.tsx";
import {SearchPanel} from "../SearchPanel/SearchPanel.tsx";
import {AuthContext} from "../../../../Context/AuthContext/AuthContext.tsx";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

interface NAV_DATA {
    id: string;
    name: string;
    route: string;
}


export const Header = () => {
    const {
        cartItems
    } = useContext(BasketContext);
    const {
        userData,
        logOut,
        token
    } = useContext(AuthContext);
    const location = useLocation();
    const [basketOpen, setBasketOpen] = useState(false);
    const [searchPanelOpen, setSearchPanelOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);

    const handleOpenAccount = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setAccountOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        const handleCloseAccount = () => setAccountOpen(false);
        document.addEventListener("click", handleCloseAccount);
        return () => {
            document.removeEventListener("click", handleCloseAccount);
        };
    }, []);


    const handleOpenSearchPanel = useCallback(() => {
        setSearchPanelOpen(true);
    }, []);

    const handleBasketOpen = useCallback(() => {
        setBasketOpen(true)
    }, [setBasketOpen]);


    return (
        <>
            <SideMenu/>
            <header
                className={styles.headerWrapper}
                style={{zIndex: searchPanelOpen ? "12" : ""}}
            >
                <SearchPanel
                    searchPanelOpen={searchPanelOpen}
                    setSearchPanelOpen={setSearchPanelOpen}
                />
                <Basket
                    basketOpen={basketOpen}
                    setBasketOpen={setBasketOpen}
                />
                <div className={styles.headerContent}>
                    <div className={styles.leftBlock}>
                        <Link to={"/"} className={styles.logoBlock}>
                            <img src="/images/icons/siteLogo.png" alt="Project Logo"/>
                            <p>game<span>storm</span></p>
                        </Link>
                        <div className={styles.phoneBlock}>
                            <PhoneAndroidSharpIcon/>
                            <a href="tel:(302) 555-0107" target={"_blank"}>(302) 555-0107</a>
                        </div>
                    </div>
                    <nav className={styles.navigationBlock}>
                        {navData?.map((nav: NAV_DATA) => {
                            return (
                                <div key={nav?.id} className={`${styles.navEntity} `}>
                                    {nav?.id === 'pages' ?
                                        <>
                                            <p className={`${styles.entity}`}>{nav?.name}<ExpandLessOutlinedIcon/></p>
                                            <div className={styles.navDropDown}>
                                                <div className={styles.dropDownContent}>
                                                    <Link to={"/wishlist"}>
                                                        Wishlist
                                                    </Link>
                                                    <Link to={"/basket"}>
                                                        Basket
                                                    </Link>
                                                    <Link to={"/checkout"}>
                                                        Checkout
                                                    </Link>
                                                    <Link to={"/login"}>
                                                        Login
                                                    </Link>
                                                    <Link to={"/register"}>
                                                        Register
                                                    </Link>
                                                    <Link to={"/privacy-policy"}>
                                                        Privacy Policy
                                                    </Link>
                                                </div>

                                            </div>
                                        </>
                                        :
                                        <Link to={nav?.route}
                                              className={`${styles.entity} ${location.pathname === nav?.route ? styles.current : ''}`}>{nav?.name}</Link>
                                    }
                                </div>
                            )
                        })}
                    </nav>
                    <div className={styles.rightBlock}>
                        <div
                            className={styles.buttonBlock}
                            onClick={handleOpenSearchPanel}
                        >
                            <SearchSharpIcon/>
                        </div>
                        <Link to={"/wishlist"} className={styles.buttonBlock}>
                            <FavoriteBorderIcon/>
                        </Link>
                        <div
                            className={`${styles.buttonBlock} ${styles.accountBtn}`}
                            onClick={handleOpenAccount}


                        >
                            <PersonOutlineIcon/>
                            <div
                                className={`${styles.accountDropdown} ${accountOpen ? styles.accountVisible : ''}`}
                                onClick={ev => ev.stopPropagation()}
                            >
                                {userData && token ? (
                                    <>
                                        <span><PersonOutlineIcon /> Hello, <p>{userData.username}</p></span>
                                        <span onClick={logOut}><LogoutIcon /> Log off</span>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login">Login into account</Link>
                                        <Link to="/register">Create an account</Link>
                                    </>
                                )}
                            </div>
                        </div>
                        <div
                            className={`${styles.buttonBlock} ${styles.cartButton}`}
                            onClick={handleBasketOpen}
                        >
                            <div className={`${styles.circle} ${cartItems?.length > 9 ? styles.wideCircle : ""}`}>
                                {cartItems?.length}
                            </div>
                            <ShoppingCartOutlinedIcon/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
        ;
};
