import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";
import styles from "./ShopPage.module.scss";

export const ShopPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.shopWrapper}>Shop PAGE</main>
            <FooterTwo />
        </>
    );
};
