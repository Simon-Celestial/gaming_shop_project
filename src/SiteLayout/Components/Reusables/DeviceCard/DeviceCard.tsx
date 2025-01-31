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
import {useTranslation} from "react-i18next";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutConext.tsx";
import {DataContext} from "../../../../Context/DataContext/DataContext.tsx";

interface DeviceCardProps {
    data: PRODUCTS_DATA
}

export const DeviceCard: React.FC<DeviceCardProps> = ({data}) => {
    const {setSelectedProduct} = useContext(DataContext);
    const {addToCart} = useContext(BasketContext);
    const {addToWishlist, isInWishlist} = useContext(WishlistContext);
    const {
        handleQuickViewOpen
    } = useContext(LayoutContext);

    const [selectedColor, setSelectedColor] = useState(data?.colors[0]);

    const {t} = useTranslation();

    // SELECT PRODUCT COLOR
    const handleSelectColor = useCallback((color: string): void => {
        setSelectedColor(color)
    }, [setSelectedColor]);

    const setProductToQuickViewAndOpen = useCallback((product: PRODUCTS_DATA) => {
        setSelectedProduct(product);
        handleQuickViewOpen();
    }, [handleQuickViewOpen, setSelectedProduct])

    return (
        <div
            className={styles.deviceCard}
            style={{
                filter: data?.quantity < 1 ? "grayscale(0.9) blur(1px)" : ""
            }}
        >
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
                <div
                    className={styles.option}
                    onClick={() => setProductToQuickViewAndOpen(data)}
                >
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
                        : `${t('deviceCard.offer')}`}
                </div>
                <Link
                    to={`/product-details/${data?.id.toString()}`}
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
            <div className={`${styles.cardImage}`}>
                {
                    data?.quantity < 1 ?
                        <div className={styles.outOfStock}>
                            {t('deviceCard.outOfStock')}
                        </div>
                        :
                        null
                }
                <img
                    src={data?.image?.[0]}
                    alt={data?.name}
                    loading={"lazy"}
                />
                <img
                    src={data?.image?.[1]}
                    alt={data?.name}
                    loading={"lazy"}
                />
            </div>
            <div className={styles.cardBottom}>
                <div className={styles.price}>
                    <p>$ {data?.salePrice?.toFixed(2)}</p>
                    {data?.regularPrice ? <span>$ {data?.regularPrice?.toFixed(2)}</span> : null}
                    {data.regularPrice?  null : <span style={{height: "18px"}}></span>}
                </div>
                <div
                    className={styles.addBtn}
                    onClick={() => addToCart(data, selectedColor)}
                >
                    {t('deviceCard.addToCart')}
                </div>
            </div>
        </div>
    );
};
