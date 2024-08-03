import styles from "./GamesPage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {PageBanner} from "../../Components/Reusables/PageBanner/PageBanner.tsx";
import CelebrationIcon from '@mui/icons-material/Celebration';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

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
                <div className={styles.pageContent}>
                    <section className={styles.keysSection}>
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

                </div>

            </main>
        </>
    );
};
