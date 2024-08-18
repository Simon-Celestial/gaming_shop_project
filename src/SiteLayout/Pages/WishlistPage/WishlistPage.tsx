import styles from "./WishlistPage.module.scss";
import {Link} from "react-router-dom";
import {useCallback, useContext} from "react";
import {BasketContext} from "../../../Context/BasketContext/BasketContext.tsx";
import {WishlistContext} from "../../../Context/WishlishContext/WishlistContext.tsx";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {PRODUCTS_DATA} from "../../../Types/types.ts";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import {useTranslation} from "react-i18next";

export const WishlistPage = () => {
    const {
        wishlistItems,
        removeFromWishlist
    } = useContext(WishlistContext);

    const {
        addToCart,
    } = useContext(BasketContext);


    const handleAddToCart = useCallback(async (product: PRODUCTS_DATA, productId: number, productName: string, color: string): Promise<void> => {
        addToCart(product, color);
        await (product?.quantity > 0 ? removeFromWishlist(productId, productName, color, false) : Promise.resolve());
    }, [addToCart, removeFromWishlist]);

    const {t} = useTranslation();


    return (
        <>
            <Header/>
            <main className={styles.wishlistMain}>
                <PageBanner
                    greenText={t('wishlistPage.yourWishlist')}
                    whiteText={""}
                    smallText={t('wishlistPage.yourFavoriteProducts')}
                />
                {wishlistItems?.length < 1 ?
                    <div className={styles.wishlistEmpty}>
                        <img src="/images/icons/empty.png" alt="Empty"/>
                        <p>{t('wishlistPage.wishlistIsEmpty')}</p>
                        <div className={styles.container}>
                            <DefaultButton
                                grayBtn={false}
                                link={"/shop"}
                                title={t('wishlistPage.returnToShop')}
                                wide={false}
                            />
                        </div>
                    </div>
                    :
                    <div className={styles.wishlistCardsWrapper}>
                        <div className={`${styles.tableRow} ${styles.topRow}`}>
                            <div className={`${styles.product} ${styles.cell}`}>
                                {t('wishlistPage.product')}
                            </div>
                            <div className={`${styles.price} ${styles.cell}`}>
                                {t('wishlistPage.price')}
                            </div>
                            <div className={`${styles.stock} ${styles.cell}`}>
                                {t('wishlistPage.stock')}
                            </div>
                            <div className={`${styles.add} ${styles.cell}`}>
                                {t('wishlistPage.addToCart')}
                            </div>
                            <div className={`${styles.delete} ${styles.cell}`}>
                                {t('wishlistPage.delete')}
                            </div>
                        </div>
                        {wishlistItems?.map((product) => {
                            return (
                                <div key={`${product.id}_${product.selectedColor}`} className={`${styles.tableRow} ${styles.bottomRow}`}>
                                    <div className={`${styles.product} ${styles.cell}`}>
                                        <div className={styles.colorBox}>
                                            {t('wishlistPage.color')} {product?.selectedColor}
                                        </div>
                                        <img
                                            src={product?.image?.[0]}
                                            alt={product?.name}/>
                                        <Link to={`/single-product/${product?.id}`}>
                                            {product?.name}
                                        </Link>
                                    </div>
                                    <div className={`${styles.price} ${styles.cell}`}>
                                    <span>
                                        {product?.regularPrice ?
                                            <p>$ {product?.regularPrice?.toFixed(2)}</p>
                                            :
                                            null
                                        }
                                        $ {product?.salePrice?.toFixed(2)}</span>

                                    </div>
                                    <div className={`${styles.stock} ${styles.cell}`}>
                                        {product?.quantity > 0 ?
                                            <span className={styles.inStock}>{t('wishlistPage.inStock')}</span>
                                            :
                                            <span className={styles.notInStock}>{t('wishlistPage.outOfStock')}</span>
                                        }
                                    </div>
                                    <div className={`${styles.add} ${styles.cell}`}>
                                        <div className={`${styles.addToCart}`}
                                             onClick={() => handleAddToCart(product, product.id, product?.name, product?.selectedColor)}>
                                            {t('wishlistPage.addToCartButton')}
                                        </div>

                                    </div>
                                    <div className={`${styles.delete} ${styles.cell}`}>
                                        <div className={styles.deleteBtn}
                                             onClick={() => removeFromWishlist(product.id, product?.name, product?.selectedColor, true)}>
                                            <DeleteIcon/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </main>
            <FooterOne/>
        </>
    )
}

