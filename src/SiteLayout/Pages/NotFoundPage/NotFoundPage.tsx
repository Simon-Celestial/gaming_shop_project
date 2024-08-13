import styles from "./NotFoundPage.module.scss";
import {useTranslation} from "react-i18next";

export const NotFoundPage = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.pageContent}>
                <h1>{t('notFoundPage.404')}</h1>
                <p>{t('notFoundPage.pageNotFound')}</p>
            </div>
        </div>
    );
};

