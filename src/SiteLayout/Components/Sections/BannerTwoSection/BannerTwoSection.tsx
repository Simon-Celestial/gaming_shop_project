import styles from './BannerTwoSection.module.scss';
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";
import {useTranslation} from "react-i18next";

export const BannerTwoSection = () => {
    const {t} = useTranslation();

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
                    <h4>{t('bannerTwoSection.craftingGames')}</h4>
                    <h1>{t('bannerTwoSection.playImproveWin')} {t('bannerTwoSection.and')} <span>{t('bannerTwoSection.win')}</span></h1>
                    <p>{t('bannerTwoSection.description')}</p>
                    <div className={styles.statisticsContainer}>
                        <div className={styles.box}>
                            <p>{t('bannerTwoSection.online')}</p>
                            <h2>19,302,927</h2>
                        </div>
                        <div className={styles.box}>
                            <p className={styles.playing}>{t('bannerTwoSection.playingNow')}</p>
                            <h2>4,831,224</h2>
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <DefaultButton
                            link={"/games"}
                            title={t('bannerTwoSection.exploreGamesButton')}
                            grayBtn={false}
                            wide={false}
                        />
                    </div>
                </div>
            </div>

        </section>

    );
};
