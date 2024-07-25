import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {Link} from "react-router-dom";
import styles from "./DeviceCard.module.scss";
import {PRODUCTS_DATA} from "../../../../Types/types.ts";
import React from "react";

interface DeviceCardProps {
    data: PRODUCTS_DATA
}
export const DeviceCard: React.FC<DeviceCardProps> = ({data}) => {
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
                <Link to={""}>{data?.name}</Link>
                <p>{data?.brand}</p>
            </div>
            <div className={styles.cardImage}>
                <img
                    src={data?.image}
                    alt={data?.name}/>
            </div>
            <div className={styles.cardBottom}>
                <div className={styles.price}>
                    <p>$ {data?.salePrice?.toFixed(2)}</p>
                    {data?.regularPrice ? <span>$ {data?.regularPrice?.toFixed(2)}</span> : null}
                </div>
                <div className={styles.addBtn}>
                    add to card
                </div>
            </div>

        </div>
    );
};
