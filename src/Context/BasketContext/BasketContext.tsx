import React, {useState, useEffect, useCallback, useMemo} from "react";
import {Bounce, toast} from 'react-toastify';
import {PRODUCTS_DATA} from "../../Types/types.ts";

interface BasketContextType {
    addToCart: (product: PRODUCTS_DATA, color: string) => void;
    removeFromCart: (productId: number, productName: string, color: string) => void;
    increaseQuantity: (productId: number, color: string) => void;
    decreaseQuantity: (productId: number, color: string) => void;
    cartItems: PRODUCTS_DATA[];
    calculateSubtotal: number;
    emptyCart: () => void;
}

export const BasketContext = React.createContext<BasketContextType>({
    addToCart: () => {
    },
    removeFromCart: () => {
    },
    increaseQuantity: () => {
    },
    decreaseQuantity: () => {
    },
    cartItems: [],
    calculateSubtotal: 0,
    emptyCart: () => {
    },
});

interface BasketContextProviderProps {
    children: React.ReactNode;
}

const initialCartItems: PRODUCTS_DATA[] = JSON.parse(localStorage.getItem("basket") || '[]');

export const BasketContextProvider: React.FC<BasketContextProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<PRODUCTS_DATA[]>(initialCartItems);

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = useCallback((product: PRODUCTS_DATA, color: string) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item?.id === product?.id && item?.selectedColor === color);
            if (existingItem) {
                toast.success(`${product?.name} (${color}) added to basket`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return prev.map(item =>
                    item?.id === product?.id && item?.selectedColor === color
                        ? {...item, count: item?.count + 1}
                        : item
                );
            } else if (product.quantity < 1) {
                toast.error(`Product is out of stock!`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return [...prev];
            } else {
                toast.success(`${product?.name} (${color}) added to basket`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return [...prev, {...product, count: 1, selectedColor: color}];
            }
        });
    }, []);

    const removeFromCart = useCallback((productId: number, productName: string, color: string) => {
        toast.success(`${productName} (${color}) removed from basket`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        setCartItems((prev) =>
            prev?.filter((item) => !(item?.id === productId && item?.selectedColor === color))
        );
    }, []);

    const increaseQuantity = useCallback((productId: number, color: string) => {
        setCartItems(prev => prev?.map(item =>
            item?.id === productId && item?.selectedColor === color ? {...item, count: item?.count + 1} : item
        ));
    }, []);

    const decreaseQuantity = useCallback((productId: number, color: string) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item?.id === productId && item?.selectedColor === color
                        ? {...item, count: Math.max(0, item?.count - 1)}
                        : item
                )
                .filter(item => item?.count > 0)
        );
    }, []);

    const emptyCart = useCallback(() => {
        setCartItems([]);
        toast.success(`Basket successfully cleared!`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }, []);

    const calculateSubtotal = useMemo(() => {
        return cartItems?.reduce((acc, b) => b.salePrice * b.count + acc, 0);
    }, [cartItems]);

    return (
        <BasketContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            calculateSubtotal,
            emptyCart,
        }}>
            {children}
        </BasketContext.Provider>
    );
};
