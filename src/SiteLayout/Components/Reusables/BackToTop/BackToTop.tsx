import {useState, useEffect, useCallback} from 'react';
import styles from "./BackToTop.module.scss";

export const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);


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
    return (
        <div
            className={`${styles.backToTop} ${backToTop ? styles.show : ''}`}
            onClick={scrollToTop}
        >
            <span></span>
            <p>Back To Top</p>
        </div>
    );
};
