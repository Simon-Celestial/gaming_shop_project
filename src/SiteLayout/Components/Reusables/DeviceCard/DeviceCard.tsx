import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {Link} from "react-router-dom";
import styles from "./DeviceCard.module.scss";

export const DeviceCard = () => {
    return (
        <div className={styles.deviceCard}>
            <div className={styles.deviceOptions}>
                <div className={styles.option}>
                    <FavoriteBorderIcon/>
                </div>
                <div className={styles.option}>
                    <RemoveRedEyeOutlinedIcon/>
                </div>

            </div>
            <div className={styles.cardTitle}>
                <div className={styles.offer}>
                    Offer
                </div>
                <Link to={""}>PC Master Series X-9700K Gaming Core i7 Mid Tower cpu</Link>
                <p>Gaming, Best seller, E-sports</p>
            </div>
            <div className={styles.cardImage}>
                <img
                    src="https://themes.workdo.io/wordpress/toaster/gaming/wp-content/uploads/2022/03/1-2.png"
                    alt="Device"/>
            </div>
            <div className={styles.cardBottom}>
                <div className={styles.price}>
                    <p>$ 449.00</p>
                    <span>$ 500.00</span>
                </div>
                <div className={styles.addBtn}>
                    add to card
                </div>
            </div>

        </div>
    );
};
