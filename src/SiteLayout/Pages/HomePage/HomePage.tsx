import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {Footer} from "../../Components/Layout/Footer/Footer.tsx";
import {TypeAnimation} from "react-type-animation";
import {Link} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

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
                                style={{fontSize: '2em'}}
                                repeat={Infinity}
                            />
                            <p>Creating innovative, fun-filled gaming devices that bring vibrant colors to your gaming
                                experience.</p>
                        </div>
                        <div className={styles.swiperContainer}>
                            <div className={styles.swiperHead}>
                                <img src="/images/bottomArrow.png" alt="arrow bottom"/>
                                <p>Featured Device</p>
                            </div>
                            <div className={styles.deviceCard}>
                                <div className={styles.deviceOptions}>
                                    <div className={styles.option}>
                                        <FavoriteBorderIcon/>
                                    </div>
                                    <div className={styles.option}>
                                        <RemoveRedEyeOutlinedIcon/>
                                    </div>

                                </div>
                                <div className={styles.cardTitle}>
                                    <div className={styles.offer}>
                                    Offer
                                    </div>
                                    <Link to={""}>PC Master Series X-9700K Gaming Core i7 Mid Tower cpu</Link>
                                    <p>Gaming, Best seller, E-sports</p>
                                </div>
                                <div className={styles.cardImage}>
                                    <img src="https://themes.workdo.io/wordpress/toaster/gaming/wp-content/uploads/2022/03/1-2.png" alt="Device"/>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.price}>
                                        <p>$ 449.00</p>
                                        <span>$ 500.00</span>
                                    </div>
                                    <div className={styles.addBtn}>
                                        add to card
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
