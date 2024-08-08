import styles from "./AboutSection.module.scss";
import {Odometer} from "../../Reusables/Odometer/Odometer.tsx";
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";
import {useRef} from "react";


export const AboutSection = () => {
    const odometerRef = useRef<HTMLDivElement | null>(null);

    return (
            <section className={styles.aboutSection} ref={odometerRef}>
                <div className={styles.sectionContent}>
                    <div className={styles.imageContainer}>
                        <div className={styles.experienceBlock}>
                            <div className={styles.experienceContent}>
                                <div className={styles.number}><Odometer
                                    currentRef={odometerRef}
                                    stopValue={31}
                                    latency={75}
                                />+
                                </div>
                                <div className={styles.title}>
                                    Years Of Experience
                                </div>
                            </div>
                        </div>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/about-block-bg.png" alt="Users"/>
                    </div>
                    <div className={styles.titleContainer}>
                        <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                            <h4>Welcome To <span>GAMESTORM</span> Gaming Shop</h4>
                            <h2>Bringing People Together Through <span>The Power Of Play</span></h2>
                            <p>As Gamestorm, we continue to open doors to new worlds every day and we are
                                working excitedly introduce new gaming devices!</p>
                        </div>
                        <div className={styles.infoContainers}>
                            <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={500}
                                            latency={5}
                                        />
                                        M
                                        <p>+</p></span>
                                <p>Sales, or 6% of the world’s population.</p>
                            </div>
                            <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={2}
                                            latency={1250}
                                        />
                                        M
                                        <p>+</p>
                                    </span>
                                <p>Our products have over 2 million unique daily customers.</p>
                            </div>
                            <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={52}
                                            latency={50}
                                        />
                                        <p>+</p>
                                    </span>
                                <p>Experts collaborating to blow your mind in one place.</p>
                            </div>
                            <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={100}
                                            latency={25}
                                        />
                                        <p>%</p></span>
                                <p>Our devices gives you full experience.</p>
                            </div>

                        </div>
                        <DefaultButton
                            title={"Explore Out Products"}
                            link={"/shop"}
                            grayBtn={false}
                            wide={false}
                        />
                    </div>
                </div>
            </section>
    );
};
