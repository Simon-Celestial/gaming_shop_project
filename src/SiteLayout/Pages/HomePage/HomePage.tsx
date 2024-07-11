import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {Footer} from "../../Components/Layout/Footer/Footer.tsx";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <main className={styles.homeWrapper}>
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores ea repellendus? Ab aperiam corporis exercitationem, explicabo harum ipsum iure, nemo nisi nulla optio praesentium quidem saepe sit, soluta totam.
            </main>
            <Footer/>
        </>
    );
};
