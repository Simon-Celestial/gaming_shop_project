import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from "react-router-dom";
import styles from "./DeviceCard.module.scss";
import {PRODUCTS_DATA} from "../../../../Types/types.ts";
import React, {useCallback, useContext, useState} from "react";
import {Rating} from "@mui/material";
import {BasketContext} from "../../../../Context/BasketContext/BasketContext.tsx";
import {WishlistContext} from "../../../../Context/WishlishContext/WishlistContext.tsx";

interface DeviceCardProps {
    data: PRODUCTS_DATA
}

export const DeviceCard: React.FC<DeviceCardProps> = ({data}) => {
    const {addToCart} = useContext(BasketContext);
    const {addToWishlist, wishlistItems} = useContext(WishlistContext);

    const [selectedColor, setSelectedColor] = useState(data?.colors[0]);

    // SELECT PRODUCT COLOR
    const handleSelectColor = useCallback((color: string): void => {
        setSelectedColor(color)
    }, [setSelectedColor]);

    // CHECK PRODUCT IN WISH LIST
    const isInWishlist = useCallback(
        (productId: number, color: string): boolean => {
            return wishlistItems.some(
                (item) => item?.id === productId && item?.selectedColor === color
            );
        },
        [wishlistItems]
    );


    return (
        <div className={styles.deviceCard}>
            <div className={styles.deviceOptions}>
                <div
                    className={styles.option}
                    onClick={() => addToWishlist(data, selectedColor)}
                >
                    {isInWishlist(data?.id, selectedColor) ?
                        <FavoriteIcon
                            sx={{
                                color: "#0EF0AD"
                            }}
                        />
                        :
                        <FavoriteBorderIcon
                            sx={{
                                color: "#F5F5F5"
                            }}
                        />
                    }
                </div>
                <div className={styles.option}>
                    <RemoveRedEyeOutlinedIcon/>
                </div>
                <div className={styles.colorsBox}>
                    {data?.colors?.map((color) => {
                        return (
                            <div
                                onClick={() => handleSelectColor(color)}
                                style={{
                                    backgroundColor: color,
                                    border: selectedColor == color ? `2px solid #0EF0AD` : '1px solid transparent',
                                }}
                                key={color}
                                className={styles.color}>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className={styles.cardTitle}>
                <div className={`${styles.flag} ${styles.offer}`}>
                    {data.regularPrice
                        ? `${(((data.regularPrice - data.salePrice) / data.regularPrice) * 100).toFixed(1)} %`
                        : 'offer'}
                </div>
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
                <img
                    src={data?.image[1]}
                    alt={data?.name}
                    loading={"lazy"}
                />
            </div>
            <div className={styles.cardBottom}>
                <div className={styles.price}>
                    <p>$ {data?.salePrice?.toFixed(2)}</p>
                    {data?.regularPrice ? <span>$ {data?.regularPrice?.toFixed(2)}</span> : null}
                </div>
                <div
                    className={styles.addBtn}
                    onClick={() => addToCart(data, selectedColor)}
                >
                    add to card
                </div>
            </div>

        </div>
    );
};
