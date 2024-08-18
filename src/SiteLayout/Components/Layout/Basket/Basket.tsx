import styles from './Basket.module.scss';
import React, {useCallback, useContext} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {BasketContext} from "../../../../Context/BasketContext/BasketContext.tsx";
import {PRODUCTS_DATA} from "../../../../Types/types.ts";
import {useTranslation} from "react-i18next";

interface BasketProps {
    basketOpen: boolean;
    setBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Basket: React.FC<BasketProps> = ({basketOpen, setBasketOpen}) => {

    const {
        cartItems,
        removeFromCart,
        calculateSubtotal,
        increaseQuantity,
        decreaseQuantity
    } = useContext(BasketContext);


    const handleCloseBasket = useCallback(() => {
        setBasketOpen(false);
    }, [setBasketOpen]);

    const {t} = useTranslation();

    return (
        <div className={`${styles.basketWrapper} ${basketOpen ? styles.active : ''}`}>
            <div className={styles.closeMenu} onClick={handleCloseBasket}>
                <CloseIcon/>
            </div>
            {
                cartItems?.length > 0 ?
                    <>
                        <div className={styles.basketHead}>
                            {t('basket.yourShopper')}
                        </div>
                        <div className={styles.basketProducts}>
                            {cartItems?.map((product: PRODUCTS_DATA) => {
                                return (
                                    <div
                                        key={`${product?.id}+${product.selectedColor}`}
                                        className={styles.productCard}
                                    >
                                        <div className={styles.color}>
                                            {t('basket.color')} : {product?.selectedColor}
                                        </div>
                                        <div className={styles.image}>
                                            <img
                                                src={product?.image?.[0]}
                                                alt={product?.name}/>
                                        </div>
                                        <div className={styles.details}>
                                            <Link to={`/product-details/${product?.id}`}>{product?.name}</Link>
                                            <div className={styles.price}>
                                                ${product?.salePrice?.toFixed(2)}
                                            </div>
                                            <div className={styles.counter}>
                                                <div
                                                    className={styles.counterBtn}
                                                    onClick={() => decreaseQuantity(product?.id, product?.selectedColor)}
                                                >
                                                    <RemoveIcon/>
                                                </div>
                                                <div className={styles.show}>{product?.count}</div>
                                                <div
                                                    className={styles.counterBtn}
                                                    onClick={() => increaseQuantity(product?.id, product?.selectedColor)}
                                                >
                                                    <AddIcon/>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            onClick={() => removeFromCart(product?.id, product?.name, product?.selectedColor)}
                                            className={styles.delete}
                                        >
                                            <DeleteIcon/>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.basketFooter}>
                            <div className={styles.priceInfo}>
                                <p>{t('basket.products')}: {cartItems?.length} {t('basket.items')}</p>
                                <p>{t('basket.subTotal')}: ${calculateSubtotal?.toFixed(2)}</p>
                            </div>
                            <div className={styles.buttonsBlock}>
                                <Link to={"/basket"}>{t('basket.visitCart')}</Link>
                                <Link to={"/checkout"}>{t('basket.checkout')}</Link>
                            </div>
                        </div>
                    </>
                    :
                    <div className={styles.emptyShopper}>
                        <img src="/images/icons/empty.png" alt="empty shopper"/>
                        <p>{t('basket.emptyShopperMessage')}...</p>
                    </div>
            }
        </div>
    );
};
