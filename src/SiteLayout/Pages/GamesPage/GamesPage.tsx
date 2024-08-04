import styles from "./GamesPage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import CelebrationIcon from '@mui/icons-material/Celebration';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import {GamesSection} from "../../Components/Sections/GamesSection/GamesSection.tsx";
import {Link} from "react-router-dom";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import {SliderSection} from "../../Components/Sections/SliderSection/SliderSection.tsx";
import {FooterTwo} from "../../Components/Layout/FooterTwo/FooterTwo.tsx";

export const GamesPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    smallText={"Our projects feature unique mechanics, fine-tuned gameplay, and eye-catching visual style."}
                    whiteText={"Our"}
                    greenText={"Games"}
                />
                <section className={styles.keysSection}>
                    <div className={`${styles.decoration} ${styles.cube}`}>
                        <img src="/images/icons/shape1.png" alt="Decoration"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.diamond}`}>
                        <img src="/images/icons/shape2.png" alt="Decoration"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.xmark}`}>
                        <img src="/images/icons/shape3.png" alt="Decoration"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.coin}`}>
                        <img src="/images/icons/shape4.png" alt="Decoration"/>
                    </div>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.heading}>
                            The Four Key Components of a
                            <span> Gamestorm studio</span>
                        </h2>
                        <div className={styles.keysContainer}>
                            <div className={styles.keyBox}>
                                <div className={styles.circle}>
                                    <CelebrationIcon/>
                                </div>
                                <div className={styles.title}>
                                    <h3>Long-Lasting Fun</h3>
                                    <p>Our games offer explosive fun with playability and constant content updates
                                        through our games as a service approach.</p>
                                </div>
                            </div>
                            <div className={styles.keyBox}>
                                <div className={styles.circle}>
                                    <SportsEsportsIcon/>
                                </div>
                                <div className={styles.title}>
                                    <h3>For Everyone</h3>
                                    <p>When developing our video games, we make sure that every player can scratch
                                        their gaming itch, from casual to completes to speed runners.</p>
                                </div>
                            </div>
                            <div className={styles.keyBox}>
                                <div className={styles.circle}>
                                    <TipsAndUpdatesIcon/>
                                </div>
                                <div className={styles.title}>
                                    <h3>Unique Twist</h3>
                                    <p>We put our own spin on beloved game genres, from a racing game where the goal
                                        is to stop, to a point-and-click game in a 360-degree environment.</p>
                                </div>
                            </div>
                            <div className={styles.keyBox}>
                                <div className={styles.circle}>
                                    <TrackChangesIcon/>
                                </div>
                                <div className={styles.title}>
                                    <h3>Gradual Learning Curve</h3>
                                    <p>Our games are easy to learn but hard to master. This makes our games both
                                        accessible to newcomers and challenging for pros.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*GAMES SECTION HERE*/}
                <GamesSection/>
                <section className={styles.communitySection}>
                    <div className={styles.background}>
                        <video
                            src="/videos/background.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>
                    <div className={styles.sectionContent}>
                        <div className={styles.circleContainer}>
                            <p>Our work has brought together a community of</p>
                            <h2>59,135,660</h2>
                            <p>Gamers from all over the world</p>
                        </div>
                    </div>
                </section>
                <section className={styles.contactSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.title}>
                            <p>Contact With Us</p>
                            <h2>Contact us today for a free consultation</h2>
                            <Link to={"/contact"}>Start Your Project</Link>
                        </div>
                        <div className={styles.animatedBox}>
                            <div className={styles.row}>
                                <PhoneAndroidIcon/>
                                <span>Call Us</span>
                            </div>
                            <div className={styles.row}>
                                <h2>(302) 555-0107</h2>
                            </div>
                            <span className={`${styles.decoration} ${styles.circleOne}`}></span>
                            <span className={`${styles.decoration} ${styles.circleTwo}`}></span>
                            <span className={`${styles.decoration} ${styles.circleThree}`}></span>
                            <span className={`${styles.decoration} ${styles.circleFour}`}></span>
                            <span className={`${styles.decoration} ${styles.circleFive}`}></span>
                            <span className={`${styles.decoration} ${styles.circleSix}`}></span>
                            <span className={`${styles.decoration} ${styles.circleSeven}`}></span>
                            <span className={`${styles.decoration} ${styles.circleEight}`}></span>
                            <span className={`${styles.decoration} ${styles.circleNine}`}></span>
                            <span className={`${styles.decoration} ${styles.circleTen}`}></span>
                        </div>
                    </div>
                </section>
                {/*IMAGES SLIDER SECTION*/}
                <SliderSection />
            </main>
            <FooterTwo />
        </>
    );
};
