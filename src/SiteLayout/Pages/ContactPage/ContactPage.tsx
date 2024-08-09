import styles from './ContactPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";

export const ContactPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    greenText={"Friendly Team"}
                    whiteText={"Get in touch with our"}
                    smallText={"Our support goes all the way. We love hearing from customers and visitors and are always happy to help."}
                />

            </main>
            <FooterTwo/>
        </>
    );
};
