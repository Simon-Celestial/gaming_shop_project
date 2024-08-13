import styles from './FocusSection.module.scss';
import {Odometer} from "../../Reusables/Odometer/Odometer.tsx";
import {VideoContainer} from "../../Reusables/VideoContainer/VideoContainer.tsx";
import {useRef} from "react";

export const FocusSection = () => {
    const focusRef = useRef<HTMLDivElement | null>(null);

    return (
        <section className={styles.focusSection} ref={focusRef}>
            <div className={`${styles.decoration} ${styles.square}`}>
                <img src="/images/icons/object-1.png" alt="Decoration"/>
            </div>
            <div className={`${styles.decoration} ${styles.spring}`}>
                <img src="/images/icons/line-1.png" alt="Decoration"/>
            </div>
            <div className={styles.sectionContent}>
                <div className={styles.achievementContainer}>
                    <div className={styles.container}>
                        <div className={styles.title}>
                            <h2>
                                <Odometer stopValue={26} latency={100} currentRef={focusRef}/>+
                            </h2>
                            <p>
                                Years in Business
                            </p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.title}>
                            <h2>
                                <Odometer stopValue={78} latency={25} currentRef={focusRef}/>+
                            </h2>
                            <p>
                                Downloads
                            </p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.title}>
                            <h2>
                                <Odometer stopValue={89} latency={20} currentRef={focusRef}/>+
                            </h2>
                            <p>
                                Games Launched
                            </p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.title}>
                            <h2>
                                <Odometer stopValue={22} latency={80} currentRef={focusRef}/>+
                            </h2>
                            <p>
                                Gaming Projects Delivered
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*VIDEO CONTAINER*/}
            <VideoContainer
                link={"https://www.youtube.com/embed/IaT4DneyKLc?autoplay=1"}
                image={"https://pixner.net/gamestorm3/main/assets/images/video-bg-2.png"}
            />
        </section>

    );
};
