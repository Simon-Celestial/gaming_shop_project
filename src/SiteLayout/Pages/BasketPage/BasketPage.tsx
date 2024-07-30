import {useContext} from 'react';
import styles from "./BasketPage.module.scss";
import {Header} from '../../Components/Header/Header.tsx';
import {Footer} from '../../Components/Footer/Footer.tsx';
import {Trash} from "@phosphor-icons/react";
import {Link} from 'react-router-dom';
import {BasketContext} from '../../../Context/BasketContext';


export const BasketPage = () => {
    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItems,
        emptyCart,
        calculateSubtotal
    } = useContext(BasketContext);

    return (
        <>
            <Header/>
            <main className={styles.basketMain}>
                {
                    cartItems?.length < 1 ?
                        <div className={styles.cartEmpty}>
                            <img src="/images/emptyCart.png" alt="Cart Empty"/>
                            <p>Your Cart is Empty</p>
                            <div className={styles.container}>
                                <Link className={`${styles.button} ${styles.blackBtn}`} to="/menu">
                                    Return To Menu
                                </Link>
                            </div>
                        </div>
                        :
                        <div className={styles.basketContent}>
                            <div className={styles.basketCardsWrapper}>
                                <div className={`${styles.tableRow} ${styles.topRow}`}>
                                    <div className={`${styles.product} ${styles.cell}`}>
                                        Product
                                    </div>
                                    <div className={`${styles.price} ${styles.cell}`}>
                                        Price
                                    </div>
                                    <div className={`${styles.quantity} ${styles.cell}`}>
                                        Quantity
                                    </div>
                                    <div className={`${styles.subtotal} ${styles.cell}`}>
                                        Subtotal
                                    </div>
                                    <div className={`${styles.delete} ${styles.cell}`}>
                                        Delete
                                    </div>
                                </div>
                                {cartItems?.map((product) => {
                                    return (
                                        <div key={product?.id} className={`${styles.tableRow} ${styles.bottomRow}`}>
                                            <div className={`${styles.product} ${styles.cell}`}>
                                                <img src={product?.image} alt={product?.title}/>
                                                <Link to={`/single-product/${product?.id}`}>
                                                    {product?.title}
                                                </Link>
                                            </div>
                                            <div className={`${styles.price} ${styles.cell}`}>
                                                <b>$ {product?.salePrice?.toFixed(2)}</b>
                                            </div>
                                            <div className={`${styles.quantity} ${styles.cell}`}>
                                                <div className={styles.basketButton}>
                                                    <div className={styles.controlBtn}
                                                         onClick={() => decreaseQuantity(product?.id)}>
                                                        -
                                                    </div>
                                                    <div className={styles.controlBtn}>
                                                        {product?.count}
                                                    </div>
                                                    <div className={styles.controlBtn}
                                                         onClick={() => increaseQuantity(product?.id)}>
                                                        +
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={`${styles.subtotal} ${styles.cell}`}>
                                                <b>$ {(product.salePrice * product.count).toFixed(2)}</b>
                                            </div>
                                            <div className={`${styles.delete} ${styles.cell}`}>
                                                <div className={styles.deleteBtn}
                                                     onClick={() => removeFromCart(product.id)}>
                                                    <Trash/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className={styles.container}>
                                    <div className={`${styles.button} ${styles.blackBtn}`} onClick={emptyCart}>Empty
                                        cart
                                    </div>
                                </div>
                            </div>
                            <div className={styles.basketRight}>
                                <div className={styles.rightContainer}>
                                    <h1>CART TOTAL</h1>
                                </div>
                                <div className={styles.rightContainer}>
                                    <h1>Subtotal</h1>
                                    <p>$ {calculateSubtotal?.toFixed(2)}</p>
                                </div>
                                <div className={styles.rightContainer}>
                                    <h1>Delivery</h1>
                                    <p>FREE</p>
                                </div>
                                <div className={styles.rightContainer}>
                                    <h1>Total</h1>
                                    <p>$ {calculateSubtotal?.toFixed(2)}</p>
                                </div>
                                <div className={styles.container}>
                                    <Link to={"/checkout"} className={`${styles.button} ${styles.blackToWhiteBtn}`}>
                                        PROCEED TO CHECKOUT
                                    </Link>
                                </div>
                            </div>
                        </div>
                }
            </main>
            <Footer/>
        </>
    );
};

