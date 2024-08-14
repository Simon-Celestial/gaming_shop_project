import {useState, useEffect, useCallback} from 'react';
import styles from "./BackToTop.module.scss";
import {useTranslation} from "react-i18next";

export const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    const {i18n} = useTranslation();

    const handleScroll = useCallback(() => {
        if (window.scrollY > 300) {
            setBackToTop(true);
        } else {
            setBackToTop(false);
        }
    }, [setBackToTop]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);


    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    const { t } = useTranslation();

    return (
        <div
            className={`${styles.backToTop} ${backToTop ? styles.show : ''} ${i18n.language === "ru" || i18n.language === "tr"? styles.differentShow : ''}`}
            onClick={scrollToTop}
        >
            <span></span>
            <p>{t('backToTop')}</p>
        </div>
    );
};
