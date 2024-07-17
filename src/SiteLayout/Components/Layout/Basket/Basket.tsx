import styles from './Basket.module.scss';
import React, {useCallback} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {DefaultButton} from "../../Reusables/DefaultButton/DefaultButton.tsx";

interface BasketProps {
    basketOpen: boolean;
    setBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Basket: React.FC<BasketProps> = ({basketOpen, setBasketOpen}) => {

    const handleCloseBasket = useCallback(() => {
        setBasketOpen(false);
    }, [setBasketOpen]);

    return (
        <div className={`${styles.basketWrapper} ${basketOpen ? styles.active : ''}`}>
            <div className={styles.closeMenu} onClick={handleCloseBasket}>
                <CloseIcon/>
            </div>
            <div className={styles.basketHead}>
                Your Shopper
            </div>
            <div className={styles.basketProducts}>
                <div className={styles.productCard}>
                    <div className={styles.image}>
                        <img
                            src="https://pixner.net/gamestorm3/main/assets/images/product-img-1.png"
                            alt="Product"/>
                    </div>
                    <div className={styles.details}>
                        <Link to={"/"}>USB Gaming Keyboard</Link>
                        <div className={styles.price}>
                            $45.00
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.counterBtn}>
                                <RemoveIcon/>
                            </div>
                            <div className={styles.show}>1</div>
                            <div className={styles.counterBtn}>
                                <AddIcon/>
                            </div>

                        </div>
                    </div>
                    <div className={styles.delete}>
                        <DeleteIcon/>
                    </div>

                </div>
                <div className={styles.productCard}>
                    <div className={styles.image}>
                        <img
                            src="https://pixner.net/gamestorm3/main/assets/images/product-img-1.png"
                            alt="Product"/>
                    </div>
                    <div className={styles.details}>
                        <Link to={"/"}>USB Gaming Keyboard</Link>
                        <div className={styles.price}>
                            $45.00
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.counterBtn}>
                                <RemoveIcon/>
                            </div>
                            <div className={styles.show}>1</div>
                            <div className={styles.counterBtn}>
                                <AddIcon/>
                            </div>

                        </div>
                    </div>
                    <div className={styles.delete}>
                        <DeleteIcon/>
                    </div>

                </div>
                <div className={styles.productCard}>
                    <div className={styles.image}>
                        <img
                            src="https://pixner.net/gamestorm3/main/assets/images/product-img-1.png"
                            alt="Product"/>
                    </div>
                    <div className={styles.details}>
                        <Link to={"/"}>USB Gaming Keyboard</Link>
                        <div className={styles.price}>
                            $45.00
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.counterBtn}>
                                <RemoveIcon/>
                            </div>
                            <div className={styles.show}>1</div>
                            <div className={styles.counterBtn}>
                                <AddIcon/>
                            </div>

                        </div>
                    </div>
                    <div className={styles.delete}>
                        <DeleteIcon/>
                    </div>

                </div>
                <div className={styles.productCard}>
                    <div className={styles.image}>
                        <img
                            src="https://pixner.net/gamestorm3/main/assets/images/product-img-1.png"
                            alt="Product"/>
                    </div>
                    <div className={styles.details}>
                        <Link to={"/"}>USB Gaming Keyboard</Link>
                        <div className={styles.price}>
                            $45.00
                        </div>
                        <div className={styles.counter}>
                            <div className={styles.counterBtn}>
                                <RemoveIcon/>
                            </div>
                            <div className={styles.show}>1</div>
                            <div className={styles.counterBtn}>
                                <AddIcon/>
                            </div>

                        </div>
                    </div>
                    <div className={styles.delete}>
                        <DeleteIcon/>
                    </div>

                </div>
            </div>
            <div className={styles.basketFooter}>
                <div className={styles.priceInfo}>
                    <p>Products: 17 items</p>
                    <p>Sub Total: $500.00</p>
                </div>
                <div className={styles.buttonsBlock}>
                    <DefaultButton title={"Visit Card"} link={"/cart"} grayBtn={false} />
                    <DefaultButton title={"Check Out"} link={"/checkout"} grayBtn={true} />
                </div>
            </div>


        </div>
    );
};
