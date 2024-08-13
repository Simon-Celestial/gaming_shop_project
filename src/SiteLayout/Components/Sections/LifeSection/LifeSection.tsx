import styles from "./LifeSection.module.scss";
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";

export const LifeSection = () => {
    return (
        <section className={styles.lifeSection}>
            <div className={styles.sectionContent}>
                <div className={styles.topTitle}>
                    <div className={`${styles.pageHeading}`}>
                        <h4>We're Part Of A <span>Big Family</span></h4>
                        <h2>Get to know our staff <span>Better.</span></h2>
                        <p>Experience the magic of gaming development with a look inside our studio. See the
                            art, science, and innovation at work.</p>
                    </div>
                </div>
                <div className={styles.imagesContainer}>
                    <div className={styles.imagesRow}>
                        <div className={styles.bigImg}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-1.png"
                                 alt="Office"/>
                        </div>
                        <div className={styles.bigImg}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-2.png"
                                 alt="Office"/>
                        </div>
                    </div>
                    <div className={styles.imagesRow}>
                        <div className={styles.smallImg}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-3.png"
                                 alt="Office"/>
                        </div>
                        <div className={styles.smallImg}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-4.png"
                                 alt="Office"/>
                        </div>
                        <div className={styles.smallImg}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-5.png"
                                 alt="Office"/>
                        </div>
                    </div>


                </div>
                <div className={styles.joinContainer}>
                    <h2>join us!</h2>
                    <p>Still haven't found your dream job? Join Team Gamestorm and become the next Gamestorm of
                        an ever-growing family!</p>
                    <DefaultButton
                        link={"/about"}
                        title={"Check Open Positions"}
                        grayBtn={false}
                        wide={false}
                    />
                </div>

            </div>
        </section>
    );
};
