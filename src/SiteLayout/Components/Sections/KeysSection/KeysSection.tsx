import styles from './KeysSection.module.scss';
import CelebrationIcon from "@mui/icons-material/Celebration";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import {useTranslation} from "react-i18next";
export const KeysSection = () => {
    const {t} = useTranslation();
    return (
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
                    {t('keysSection.TheFourKeyComponents')}
                    <span> {t('keysSection.GamestormStudio')}</span>
                </h2>
                <div className={styles.keysContainer}>
                    <div className={styles.keyBox}>
                        <div className={styles.circle}>
                            <CelebrationIcon/>
                        </div>
                        <div className={styles.title}>
                            <h3>{t('keysSection.LongLastingFun')}</h3>
                            <p>{t('keysSection.LongLastingFunDescription')}</p>
                        </div>
                    </div>
                    <div className={styles.keyBox}>
                        <div className={styles.circle}>
                            <SportsEsportsIcon/>
                        </div>
                        <div className={styles.title}>
                            <h3>{t('keysSection.ForEveryone')}</h3>
                            <p>{t('keysSection.ForEveryoneDescription')}</p>
                        </div>
                    </div>
                    <div className={styles.keyBox}>
                        <div className={styles.circle}>
                            <TipsAndUpdatesIcon/>
                        </div>
                        <div className={styles.title}>
                            <h3>{t('keysSection.UniqueTwist')}</h3>
                            <p>{t('keysSection.UniqueTwistDescription')}</p>
                        </div>
                    </div>
                    <div className={styles.keyBox}>
                        <div className={styles.circle}>
                            <TrackChangesIcon/>
                        </div>
                        <div className={styles.title}>
                            <h3>{t('keysSection.GradualLearningCurve')}</h3>
                            <p>{t('keysSection.GradualLearningCurveDescription')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
