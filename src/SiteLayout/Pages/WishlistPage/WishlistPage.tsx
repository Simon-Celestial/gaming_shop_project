import styles from "./WishlistPage.module.scss";
import {Link} from "react-router-dom";
import {useCallback, useContext} from "react";
import {BasketContext} from "../../../Context/BasketContext/BasketContext.tsx";
import {WishlistContext} from "../../../Context/WishlishContext/WishlistContext.tsx";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {PRODUCTS_DATA} from "../../../Types/types.ts";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {PageBanner} from "../../Components/Reusables/PageBanner/PageBanner.tsx";
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";

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


    return (
        <>
            <Header/>
            <main className={styles.wishlistMain}>
                <PageBanner greenText={""} whiteText={"Your wishlist"} smallText={"Your favorite products"}/>
                {wishlistItems?.length < 1 ?
                    <div className={styles.wishlistEmpty}>
                        <img src="/images/empty.png" alt="Empty"/>
                        <p>Your wishlist is currently empty.</p>
                        <div className={styles.container}>
                            <DefaultButton
                                grayBtn={false}
                                link={"/shop"}
                                title={"Return to Shop"}
                                wide={false}
                            />
                        </div>
                    </div>
                    :
                    <div className={styles.wishlistCardsWrapper}>
                        <div className={`${styles.tableRow} ${styles.topRow}`}>
                            <div className={`${styles.product} ${styles.cell}`}>
                                Product
                            </div>
                            <div className={`${styles.price} ${styles.cell}`}>
                                Price
                            </div>
                            <div className={`${styles.stock} ${styles.cell}`}>
                                Stock
                            </div>
                            <div className={`${styles.add} ${styles.cell}`}>
                                Add to Cart
                            </div>
                            <div className={`${styles.delete} ${styles.cell}`}>
                                Delete
                            </div>
                        </div>
                        {wishlistItems?.map((product) => {
                            return (
                                <div key={product.id} className={`${styles.tableRow} ${styles.bottomRow}`}>
                                    <div className={`${styles.product} ${styles.cell}`}>
                                        <div className={styles.colorBox}>
                                            color : {product?.selectedColor}
                                        </div>
                                        <img
                                            src={product?.image[0]}
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
                                            <span className={styles.inStock}>In Stock</span>
                                            :
                                            <span className={styles.notInStock}>Out of Stock</span>
                                        }
                                    </div>
                                    <div className={`${styles.add} ${styles.cell}`}>
                                        <div className={`${styles.addToCart}`}
                                             onClick={() => handleAddToCart(product, product.id, product?.name, product?.selectedColor)}>
                                            add to cart
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

