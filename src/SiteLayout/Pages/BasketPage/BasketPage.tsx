import {useContext} from 'react';
import styles from "./BasketPage.module.scss";
import {Link} from 'react-router-dom';
import {BasketContext} from "../../../Context/BasketContext/BasketContext.tsx";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {useTranslation} from "react-i18next";


export const BasketPage = () => {
    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItems,
        emptyCart,
        calculateSubtotal
    } = useContext(BasketContext);

    const {t} = useTranslation();

    return (
        <>
            <Header/>
            <main className={styles.basketMain}>
                <PageBanner
                    greenText={t('basketPage.yourBasket')}
                    whiteText={""}
                    smallText={t('basketPage.readyToMakeThemYours')}
                />
                {
                    cartItems?.length < 1 ?
                        <div className={styles.cartEmpty}>
                            <img src="/images/icons/empty.png" alt="Cart Empty"/>
                            <p>{t('basketPage.cartEmpty')}</p>
                            <DefaultButton
                                grayBtn={false}
                                link={"/shop"}
                                title={t('basketPage.returnToShop')}
                                wide={false}
                            />
                        </div>
                        :
                        <div className={styles.basketContent}>
                            <div className={styles.basketCardsWrapper}>
                                <div className={`${styles.tableRow} ${styles.topRow}`}>
                                    <div className={`${styles.product} ${styles.cell}`}>
                                        {t('basketPage.product')}
                                    </div>
                                    <div className={`${styles.price} ${styles.cell}`}>
                                        {t('basketPage.price')}
                                    </div>
                                    <div className={`${styles.quantity} ${styles.cell}`}>
                                        {t('basketPage.quantity')}
                                    </div>
                                    <div className={`${styles.subtotal} ${styles.cell}`}>
                                        {t('basketPage.subtotal')}
                                    </div>
                                    <div className={`${styles.delete} ${styles.cell}`}>
                                        {t('basketPage.delete')}
                                    </div>
                                </div>
                                {cartItems?.map((product) => {
                                    return (
                                        <div key={`${product?.id}_${product.selectedColor}`} className={`${styles.tableRow} ${styles.bottomRow}`}>
                                            <div className={`${styles.product} ${styles.cell}`}>
                                                <div className={styles.colorBox}>
                                                    color: {product?.selectedColor}
                                                </div>
                                                <img src={product?.image?.[0]} alt={product?.name}/>
                                                <Link to={`/product-details/${product?.id}`}>
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
                                            title={t('basketPage.emptyCart')}
                                            link={""}
                                            wide={true}
                                        />
                                    </div>
                            </div>
                            <div className={styles.basketRight}>
                                <div className={styles.rightContainer}>
                                    <h1>{t('basketPage.cartTotal')}</h1>
                                </div>
                                <div className={styles.rightContainer}>
                                    <h1>{t('basketPage.subtotalLabel')} :</h1>
                                    <p>$ {calculateSubtotal?.toFixed(2)}</p>
                                </div>
                                <div className={styles.rightContainer}>
                                    <h1>{t('basketPage.delivery')} :</h1>
                                    <p>{t('basketPage.deliveryFree')}</p>
                                </div>
                                <div className={styles.rightContainer}>
                                    <h1>{t('basketPage.total')} :</h1>
                                    <p>$ {calculateSubtotal?.toFixed(2)}</p>
                                </div>
                                <div className={styles.btnWrapper}>
                                    <DefaultButton
                                        wide={true}
                                        link={"/checkout"}
                                        title={t('basketPage.proceedToCheckout')}
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

