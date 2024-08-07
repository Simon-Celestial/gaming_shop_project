import styles from './AboutPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";

export const AboutPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.pageWraper}>
                <PageBanner
                    whiteText={"Our Simple is Fun"}
                    greenText={"Everywhere Anytime"}
                    smallText={"We continue to open doors to new worlds every day and we are working excitedly for creating new games and unique ideas!"}
                />
                <div className={styles.pageContent}>

                </div>

            </main>
            <FooterTwo/>
        </>
    );
};
