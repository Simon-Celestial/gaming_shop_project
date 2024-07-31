import styles from "./CompletedPage.module.scss";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";

export const CompletedPage = () => {

    return (

        <div className={styles.completedOrderWrapper}>
            <div className={styles.pageContent}>
                <h2>Your order has been received</h2>
                <CheckCircleIcon />
                <h3>Thank you for your purchase!</h3>
                <p>You will receive an order confirmation email with details of your order.</p>
                <p>If you have any questions, contact this number: <a href="tel:+994555555555">+994 55 55 55 55</a>
                </p>
                <div className={styles.btnWrapper}>
                    <DefaultButton
                    wide={false}
                    link={"/"}
                    title={"Return to Home"}
                    grayBtn={false}
                    />
                </div>
            </div>

        </div>
    )
}
