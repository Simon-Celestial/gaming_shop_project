import styles from './BlogPage.module.scss';
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";

export const BlogPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    greenText={"Blog"}
                    whiteText={""}
                    smallText={"Professional Game design and Development services since 1995"}
                />

            </main>
            <FooterOne/>
        </>
    );
};
