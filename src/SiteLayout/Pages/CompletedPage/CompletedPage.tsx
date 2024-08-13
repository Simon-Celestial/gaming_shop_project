import styles from "./CompletedPage.module.scss";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import {useTranslation} from "react-i18next";

export const CompletedPage = () => {
   const {t} = useTranslation();
    return (

        <div className={styles.completedOrderWrapper}>
            <div className={styles.pageContent}>
                <h2>{t('completedPage.orderReceived')}</h2>
                <CheckCircleIcon />
                <h3>{t('completedPage.thankYou')}</h3>
                <p>{t('completedPage.confirmationEmail')}</p>
                <p>{t('completedPage.contactNumber')} <a href="tel:+994555555555">+994 55 55 55 55</a>
                </p>
                <div className={styles.btnWrapper}>
                    <DefaultButton
                    wide={false}
                    link={"/"}
                    title={t('completedPage.returnToHome')}
                    grayBtn={false}
                    />
                </div>
            </div>

        </div>
    )
}
