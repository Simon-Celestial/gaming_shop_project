import styles from './Header.module.scss';
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import {Link, useLocation} from "react-router-dom";
import {SideMenu} from "../SideMenu/SideMenu.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import navData from '/public/data/NavData/navData.json';
import {Basket} from "../Basket/Basket.tsx";
import {useCallback, useContext, useState} from "react";
import {BasketContext} from "../../../../Context/BasketContext/BasketContext.tsx";

interface NAV_DATA {
    id: string;
    name: string;
    route: string;
}


export const Header = () => {
    const {
        cartItems
    } = useContext(BasketContext)
    const location = useLocation();
    const [basketOpen, setBasketOpen] = useState(false);

    const handleBasketOpen = useCallback(() => {
        setBasketOpen(true)
    }, [setBasketOpen])


    return (
        <>
            <SideMenu/>
            <header className={styles.headerWrapper}>
                <Basket
                    basketOpen={basketOpen}
                    setBasketOpen={setBasketOpen}
                />
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
                                              className={`${styles.entity} ${location.pathname === nav?.route ? styles.current : ''}`}>{nav?.name}</Link>
                                    }
                                </div>
                            )
                        })}
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
