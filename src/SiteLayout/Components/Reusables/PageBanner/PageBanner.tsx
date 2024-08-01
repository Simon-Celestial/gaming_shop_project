import styles from "./PageBanner.module.scss";
import {Link, useLocation} from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, {useMemo} from "react";

interface PageBannerProps {
    greenText: string;
    whiteText: string;
    smallText: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({greenText,whiteText,smallText}) => {

    const location = useLocation();

    const backgroundStyles = useMemo(() => {
        return styles[location.pathname.substring(1)];
    }, [location.pathname]);

    return (
        <section className={`${styles.bannerSection} ${backgroundStyles}`}>
            <div className={`${styles.decoration} ${styles.decorationShape}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-7.png" alt="Decoration"/>
            </div>
            <div className={`${styles.decoration} ${styles.decorationBubbles}`}>
                <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/bubble.png" alt="Decoration"/>
            </div>

            <div className={styles.bannerContent}>
                <div className={styles.pageLocation}>
                    <Link to={"/"}>
                        Home
                    </Link>
                    <KeyboardArrowRightIcon/>
                    <p>{location.pathname.substring(1)}</p>
                </div>
                <div className={styles.bannerTitle}>
                    <div className={styles.coloredText}>
                        {whiteText?<h2>{whiteText}</h2> : ''} {greenText? <h3 style={{marginBottom: "0"}}>{greenText}</h3> : ''}
                    </div>
                    <div className={styles.solidText}>
                        {smallText}
                    </div>
                </div>
            </div>
        </section>
    );
};
