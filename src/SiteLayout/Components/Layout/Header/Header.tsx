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
import {QuickView} from "../../Reusables/QuickView/QuickView.tsx";
import {DataContext} from "../../../../Context/DataContext/DataContext.tsx";
import CloseIcon from '@mui/icons-material/Close';
import {useTranslation} from "react-i18next";

interface NAV_DATA {
    id: string;
    name: string;
    route: string;
    children: NAV_DATA[] | null
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

    const {
        selectedProduct,
        quickView,
        handleQuickViewClose
    } = useContext(DataContext);

    const {i18n,t} = useTranslation();
    const location = useLocation();

    const [basketOpen, setBasketOpen] = useState(false);
    const [searchPanelOpen, setSearchPanelOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [translatedNavigation, setTranslatedNavigation] = useState(navData?.en)

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

    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedNavigation(navData?.en);
        } else if (i18n.language === "ru") {
            setTranslatedNavigation(navData?.ru);
        } else {
            setTranslatedNavigation(navData?.tr);
        }
    }, [i18n.language]);


    const handleOpenSearchPanel = useCallback(() => {
        setSearchPanelOpen(true);
    }, []);

    const handleBasketOpen = useCallback(() => {
        setBasketOpen(true)
    }, [setBasketOpen]);


    return (
        <>
            <div className={`${styles.quickViewWrapper} ${quickView ? styles.opened : ''}`}>
                <div
                    className={styles.closeBtn}
                    onClick={handleQuickViewClose}
                >
                    <CloseIcon/>
                </div>
                <QuickView product={selectedProduct} quickView={true}/>
            </div>
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
                        {translatedNavigation?.map((nav: NAV_DATA) => {
                            return (
                                <div key={nav?.id} className={`${styles.navEntity} `}>
                                    {nav?.id === 'pages' ?
                                        <>
                                            <p className={`${styles.entity}`}>{nav?.name}<ExpandLessOutlinedIcon/></p>
                                            <div className={styles.navDropDown}>
                                                <div className={styles.dropDownContent}>
                                                    {nav?.children?.map((child: NAV_DATA) => {
                                                        return (
                                                            <Link
                                                                className={location.pathname === child?.route ? styles.current : ''}
                                                                key={child?.id}
                                                                to={child?.route}
                                                            >
                                                                {child?.name}
                                                            </Link>
                                                        )
                                                    })}
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
                                        <span><PersonOutlineIcon/> {t("header.helloUser")}, <p>{userData.username}</p></span>
                                        <span onClick={logOut}><LogoutIcon/> {t("header.logOff")}</span>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login">{t("header.loginLink")}</Link>
                                        <Link to="/register">{t("header.registerLink")}</Link>
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
