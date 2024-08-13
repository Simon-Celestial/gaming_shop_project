import styles from './BannerTwoSection.module.scss';
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";

export const BannerTwoSection = () => {
    return (
        <section className={styles.bannerSection}
                 style={{
                     backgroundImage: "url(/images/posters/banner.png)"
                 }}
        >
            <div className={styles.joystickTop}>
                <img src="/images/icons/ellipse-10.png" alt="Gaming"/>
            </div>
            <div className={styles.joystickBottom}>
                <img src="/images/icons/ellipse-9.png" alt="Gaming"/>
            </div>

            <div className={styles.decoration}>
                <img src="/images/icons/index-3-obj.png" alt="Decoration"/>
            </div>
            <div className={styles.sectionContent}>
                <div className={styles.titleContainer}>
                    <h4>Crafting Exceptional Games</h4>
                    <h1>Play, Improve & <span>Win</span></h1>
                    <p>Gamestorm is the ultimate destination for playing, discussing and creating game.</p>
                    <div className={styles.statisticsContainer}>
                        <div className={styles.box}>
                            <p>Online</p>
                            <h2>19,302,927</h2>
                        </div>
                        <div className={styles.box}>
                            <p className={styles.playing}>Playing Now</p>
                            <h2>4,831,224</h2>
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <DefaultButton
                            link={"/games"}
                            title={"Explore Out Games"}
                            grayBtn={false}
                            wide={false}
                        />
                    </div>
                </div>
            </div>

        </section>

    );
};
