import styles from "./CommunitySection.module.scss";
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";

export const CommunitySection = () => {
    return (
        <section className={styles.communitySection}>
            <div className={styles.sectionContent}>
                <div className={styles.imageBlock}>
                    <img src="https://pixner.net/gamestorm3/main/assets/images/call-to-action-circle.png"
                         alt="Community Gamers"/>
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
                <div className={styles.titleBlock}>
                    <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                        <h4>Join Our <span>Community!</span></h4>
                        <h2>Connect With <span>Gamers Worldwide</span></h2>
                        <p>Join the revolution and immerse yourself in the ultimate gaming experience, where the
                            boundaries between reality and fantasy blur, and the only limit is your imagination.
                            Sign up now and be the first to play our latest game releases.</p>
                    </div>
                    <div className={styles.buttonsBlock}>
                        <DefaultButton
                            title={"Explore Our Games"}
                            link={"/games"}
                            grayBtn={false}
                            wide={false}
                        />
                        <DefaultButton
                            title={"Join Our Community"}
                            link={"/about"}
                            grayBtn={true}
                            wide={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
