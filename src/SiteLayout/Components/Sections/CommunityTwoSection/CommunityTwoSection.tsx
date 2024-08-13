import styles from './CommunityTwoSection.module.scss';

export const CommunityTwoSection = () => {
    return (
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
    );
};
