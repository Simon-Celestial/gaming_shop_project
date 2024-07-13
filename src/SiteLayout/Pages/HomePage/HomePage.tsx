import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {Footer} from "../../Components/Layout/Footer/Footer.tsx";
import {TypeAnimation} from "react-type-animation";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <main className={styles.homeWrapper}>
                <section className={styles.bannerSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.titleContainer}>
                            <h4>Enjoy Gaming World</h4>
                            <h2>We Selling Devices</h2>
                                <TypeAnimation
                                sequence={['Entertainment', 600, 'Quality', 600, 'Reliability', 600]}
                                style={{ fontSize: '2em' }}
                                repeat={Infinity}
                                />
                            <p>Creating innovative, fun-filled gaming devices that bring vibrant colors to your gaming experience.</p>
                        </div>
                        <div className={styles.swiperContainer}>

                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
