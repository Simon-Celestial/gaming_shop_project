import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {Link} from "react-router-dom";
import styles from "./DeviceCard.module.scss";
import {PRODUCTS_DATA} from "../../../../Types/types.ts";
import React from "react";
import {Rating} from "@mui/material";

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
                {
                    data.regularPrice ?
                        <div className={`${styles.flag} ${styles.offer}`}>
                            {(((data.regularPrice - data.salePrice) / data?.regularPrice) * 100)?.toFixed(1)} %
                        </div>
                        :
                        null
                }

                <Link
                    to={""}
                >
                    {data?.name}
                </Link>
                <Rating
                    name="read-only"
                    value={data?.rating}
                    readOnly
                    sx={{
                        '& .MuiRating-icon': {
                            color: "#0EF0AD"
                        }
                    }}

                />

                <p>{data?.brand}</p>
            </div>
            <div className={styles.cardImage}>
                <img
                    src={data?.image[0]}
                    alt={data?.name}
                    loading={"lazy"}
                />
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
