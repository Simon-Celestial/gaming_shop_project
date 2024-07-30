import {useContext} from 'react';
import styles from "./BasketPage.module.scss";
import {Link} from 'react-router-dom';
import {BasketContext} from "../../../Context/BasketContext/BasketContext.tsx";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {PageBanner} from "../../Components/Reusables/PageBanner/PageBanner.tsx";


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
                <PageBanner greenText={""} whiteText={"Your basket"} smallText={"Ready to make them yours?"}/>
                {
                    cartItems?.length < 1 ?
                        <div className={styles.cartEmpty}>
                            <img src="/images/empty.png" alt="Cart Empty"/>
                            <p>Your basket is currently empty</p>
                            <DefaultButton
                                grayBtn={false}
                                link={"/shop"}
                                title={"Return To Shop"}
                                wide={false}
                            />
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
                                                <img src={product?.image[0]} alt={product?.name}/>
                                                <Link to={`/single-product/${product?.id}`}>
                                                    {product?.name}
                                                </Link>
                                            </div>
                                            <div className={`${styles.price} ${styles.cell}`}>
                                                <b>$ {product?.salePrice?.toFixed(2)}</b>
                                            </div>
                                            <div className={`${styles.quantity} ${styles.cell}`}>
                                                <div className={styles.basketButton}>
                                                    <div className={styles.controlBtn}
                                                         onClick={() => decreaseQuantity(product?.id, product?.selectedColor)}>
                                                        -
                                                    </div>
                                                    <div className={styles.controlBtn}>
                                                        {product?.count}
                                                    </div>
                                                    <div className={styles.controlBtn}
                                                         onClick={() => increaseQuantity(product?.id, product?.selectedColor)}>
                                                        +
                                                    </div>
                                                </div>

                                            </div>
                                            <div className={`${styles.subtotal} ${styles.cell}`}>
                                                <b>$ {(product.salePrice * product.count).toFixed(2)}</b>
                                            </div>
                                            <div className={`${styles.delete} ${styles.cell}`}>
                                                <div className={styles.deleteBtn}
                                                     onClick={() => removeFromCart(product.id, product?.name, product?.selectedColor)}>
                                                    <DeleteIcon/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                    <div className={styles.btnWrapper} onClick={emptyCart}>
                                        <DefaultButton
                                            grayBtn={false}
                                            title={"Empty Cart"}
                                            link={""}
                                            wide={true}
                                        />
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
                                <div className={styles.btnWrapper}>
                                    <DefaultButton
                                        wide={true}
                                        link={"/checkout"}
                                        title={"Proceed to Checkout"}
                                        grayBtn={false}/>
                                </div>
                            </div>
                        </div>
                }
            </main>
            <FooterOne/>
        </>
    );
};

