import styles from "./CompletedPage.module.scss";
import {CheckCircle} from "@phosphor-icons/react";
import {Link} from "react-router-dom";

export const CompletedPage = () => {

    return (

        <div className={styles.completedOrderWrapper}>
            <div className={styles.pageContent}>
                <h2>Your order has been received</h2>
                <CheckCircle weight="fill"/>
                <h3>Thank you for your purchase!</h3>
                <p>You will receive an order confirmation email with details of your order.</p>
                <p>If you have any questions, contact this number: <a href="tel:+994551234567">+994 55 123 45 67</a>
                </p>
                <div className={styles.container}>
                    <Link to="/home" className={`${styles.button} ${styles.blackToWhiteBtn}`}>Return home</Link>
                </div>
            </div>

        </div>
    )
}
