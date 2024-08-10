import React, {useCallback, useContext, useEffect, useState} from "react";
import {PRODUCTS_DATA} from "../../../../Types/types.ts";
import {Bounce, toast} from "react-toastify";
import {BasketContext} from "../../../../Context/BasketContext/BasketContext.tsx";
import {WishlistContext} from "../../../../Context/WishlishContext/WishlistContext.tsx";
import styles from "./QuickView.module.scss";
import {Rating} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from '@mui/icons-material/Search';
interface QuickViewProps  {
    product : PRODUCTS_DATA | null;
    quickView: boolean;
}

export const QuickView: React.FC<QuickViewProps> = ({product,quickView}) => {
    const {addToCart} = useContext(BasketContext);
    const {addToWishlist, isInWishlist} = useContext(WishlistContext);

    const [selectedImage, setSelectedImage] = useState(0);
    const [scaleImage, setScaleImage] = useState(false);
    const [isProductInWishlist, setIsProductInWishlist] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');

    useEffect(() => {
        if (product) {
            setIsProductInWishlist(isInWishlist(product?.id, selectedColor));
        }
    }, [isInWishlist, product, selectedColor]);


    const handleScaleImage = useCallback(() => {
        setScaleImage(prev => !prev)
    }, []);

    const handleSelectColor = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColor(e.target.value);
    }, []);

    const handleSelectImage = useCallback((imageIndex: number) => {
        setSelectedImage(imageIndex);
        setScaleImage(false);
    }, []);

    const handleAddToCard = useCallback((product: PRODUCTS_DATA, color: string) => {
        if (selectedColor === "") {
            toast.error(`Please select color!`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            addToCart(product, color);
        }
    }, [addToCart, selectedColor]);

    const handleAddToCartClick = useCallback(() => {
        if (product) {
            handleAddToCard(product, selectedColor);
        } else {
            toast.error(`Problem in adding product!`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }, [product, selectedColor, handleAddToCard]);

    const handleAddToWishlist = useCallback((product: PRODUCTS_DATA, color: string) => {
        if (selectedColor === "") {
            toast.error(`Please select color!`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            addToWishlist(product, color);
        }
    }, [addToWishlist, selectedColor]);

    const handleAddToWishlistClick = useCallback(() => {
        if (product) {
            handleAddToWishlist(product, selectedColor);
        } else {
            toast.error(`Problem in adding product!`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }, [product, handleAddToWishlist, selectedColor]);

    return (
        <section className={`${styles.mainProductSection} ${quickView? styles.quickView : ''}`}>
            <div className={styles.productTitle}>
                <h2>{product?.name}</h2>
                <div className={styles.rating}>
                    <h3>Rating : </h3>
                    <Rating
                        name="read-only"
                        value={product?.rating || 0}
                        readOnly
                        sx={{
                            '& .MuiRating-icon': {
                                color: "#0EF0AD"
                            }
                        }}
                    />

                </div>
                <div className={styles.price}>
                    ${product?.salePrice?.toFixed(2)} {product?.regularPrice ?
                    <span>${product?.regularPrice?.toFixed(2)}</span> : null}
                </div>
                <p>{product?.description}</p>
                <div className={styles.details}>
                    <p><strong>SKU: NTLFL5-{product?.id}</strong></p>
                    <p><strong>Category: </strong> {product?.category}</p>
                    <p><strong>Brand: </strong> {product?.brand}</p>
                </div>
                <div className={styles.colorSelection}>
                    <span>Color:</span>
                    <select
                        value={selectedColor}
                        onChange={handleSelectColor}
                    >
                        <option
                            value=""
                            defaultChecked={true}
                            disabled={false}
                        >
                            Choose an option
                        </option>
                        {product?.colors?.map((color: string, index: number) => {
                            return (
                                <option
                                    value={color}
                                    key={index}
                                >
                                    {color}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.stock}>
                    <span>{product?.quantity} in stock</span>
                </div>
                <div
                    className={styles.addBtn}
                    onClick={handleAddToCartClick}
                >
                    Add to cart
                </div>
                <div
                    className={styles.wishlistBtn}
                    onClick={handleAddToWishlistClick}
                >
                    add to wishlist
                    {
                        isProductInWishlist ?
                            <FavoriteIcon/>
                            :
                            <FavoriteBorderIcon/>
                    }
                </div>
            </div>
            <div className={styles.productImage}>
                <div className={styles.imagesColumn}>
                    {product?.image?.map((image, index) => {
                        return (
                            <div
                                key={index}
                                className={`${styles.image} ${index === selectedImage ? styles.selected : ''}`}
                                onClick={() => {
                                    handleSelectImage(index)
                                }}
                            >
                                <img src={image} alt={product?.name}/>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.mainImage}>
                    <div
                        className={styles.scale}
                        onClick={handleScaleImage}
                    >
                        <SearchIcon/>
                    </div>
                    <img
                        src={product?.image[selectedImage]}
                        alt={product?.name}
                        style={{transform: scaleImage ? "scale(1.1)" : "scale(1)"}}
                    />
                </div>
            </div>
        </section>
    );
};
