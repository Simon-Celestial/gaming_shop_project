import styles from "./PageBanner.module.scss";
import {Link, useLocation} from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";

interface PageBannerProps {
    greenText: string;
    whiteText: string;
    smallText: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({greenText, whiteText, smallText}) => {

    const location = useLocation();

    const backgroundStyles = useMemo(() => {
        return styles[location.pathname.substring(1)];
    }, [location.pathname]);

    const {t, i18n} = useTranslation();

    const pathNameTranslator = useMemo(() => {
        const translations: { [key: string]: { [key: string]: string } } = {
            "/games": {
                en: "Games",
                ru: "Игры",
                default: "Oyunlar"
            },
            "/shop": {
                en: "Shop",
                ru: "Магазин",
                default: "Magaza"
            },
            "/services": {
                en: "Services",
                ru: "Сервисы",
                default: "Servisler"
            },
            "/about": {
                en: "About Us",
                ru: "О нас",
                default: "Hakkımızda"
            },
            "/blog": {
                en: "Blog",
                ru: "Блог",
                default: "Blog"
            },
            "/contact": {
                en: "Contact Us",
                ru: "Контакты",
                default: "İletişim"
            },
            "/wishlist": {
                en: "Wishlist",
                ru: "Избранное",
                default: "Favoriler"
            },
            "/basket": {
                en: "Basket",
                ru: "Корзина",
                default: "Sepet"
            },
            "/checkout": {
                en: "Checkout",
                ru: "Оформление",
                default: "Ödeme"
            },
            "/privacy-policy": {
                en: "Privacy Policy",
                ru: "Конфеденциальность",
                default: "Gizlilik Politikası"
            },
            "/login": {
                en: "Login",
                ru: "Войти",
                default: "Giriş"
            },
            "/register": {
                en: "Register",
                ru: "Регистрация",
                default: "Kayıt"
            }
        };

        const path = location.pathname;
        const lang = i18n.language;

        return translations[path]?.[lang] || translations[path]?.default || "NO INFO";
    }, [i18n.language, location.pathname]);

    return (
        <section className={`${styles.bannerSection} ${backgroundStyles}`}>
            <div className={`${styles.decoration} ${styles.decorationShape}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-7.png" alt="Decoration"/>
            </div>
            <div className={`${styles.decoration} ${styles.decorationBubbles}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/bubble.png" alt="Decoration"/>
            </div>

            <div className={styles.bannerContent}>
                <div className={`${styles.pageLocation} ${location.pathname === "/shop" ? styles.shopPage : ''}`}>
                    <Link to={"/"}>
                        {t("pageBanner.home")}
                    </Link>
                    <KeyboardArrowRightIcon/>
                    <p>{pathNameTranslator}</p>
                </div>
                <div className={styles.bannerTitle}>
                    <div className={styles.coloredText}>
                        {whiteText && !greenText ? <h2>{whiteText}</h2> : null}
                        {greenText && !whiteText ? <h3 style={{margin: 0}}>{greenText}</h3> : null}
                        {greenText && whiteText ? <h2>{whiteText} <span>{greenText}</span></h2> : null}
                    </div>
                    <div className={styles.solidText}>
                        {smallText}
                    </div>
                </div>
            </div>
        </section>
    );
};
