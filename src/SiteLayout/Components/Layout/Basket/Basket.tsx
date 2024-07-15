import styles from './Basket.module.scss';
import React, {useCallback} from "react";
import CloseIcon from '@mui/icons-material/Close';

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


        </div>
    );
};
