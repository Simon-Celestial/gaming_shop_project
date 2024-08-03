import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Bounce, toast} from "react-toastify";
import {PRODUCTS_DATA} from "../../Types/types.ts";


interface WishlistContextType {
    wishlistItems: PRODUCTS_DATA[];
    addToWishlist: (product: PRODUCTS_DATA, color: string) => void;
    removeFromWishlist: (productId: number, productName: string, color: string, alert: boolean) => void;
    isInWishlist: (productId: number, color: string) => boolean;
}

const initialContextValue: WishlistContextType = {
    wishlistItems: [],
    addToWishlist: () => {
    },
    removeFromWishlist: () => {
    },
    isInWishlist: () => false,
};

export const WishlistContext = React.createContext<WishlistContextType>(initialContextValue);

interface WishlistContextProviderProps {
    children: React.ReactNode;
}

export const WishlistContextProvider: React.FC<WishlistContextProviderProps> = ({children}) => {
    const initialItems: PRODUCTS_DATA[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const [wishlistItems, setWishlistItems] = useState<PRODUCTS_DATA[]>(initialItems);


    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = useCallback((product: PRODUCTS_DATA, color: string) => {
        setWishlistItems((prev) => {
            const isExistingIndex = prev.findIndex(
                (item) => item?.id === product?.id && item?.selectedColor === color
            );

            if (isExistingIndex === -1) {
                toast.success(`${product?.name} (${color}) added to wishlist`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    transition: Bounce,
                });

                return [...prev, {...product, selectedColor: color}];
            } else {
                toast.error(`${product?.name} (${color}) removed from wishlist!`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    transition: Bounce,
                });

                const updatedWishlist = [...prev];
                updatedWishlist.splice(isExistingIndex, 1);
                return updatedWishlist;
            }
        });
    }, []);

    const removeFromWishlist = useCallback(
        (productId: number, productName: string, color: string, alert: boolean) => {
            if (alert) {
                toast.error(`${productName} (${color}) removed from wishlist`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    transition: Bounce,
                });
            }
            setWishlistItems((prev) =>
                prev.filter(
                    (item) => !(item?.id === productId && item?.selectedColor === color)
                )
            );
        },
        []
    );

    // CHECK PRODUCT IN WISH LIST
    const isInWishlist = useCallback(
        (productId: number, color: string): boolean => {
            return wishlistItems.some(
                (item) => item?.id === productId && item?.selectedColor === color
            );
        },
        [wishlistItems]
    );


    const contextValue = useMemo(() => ({
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
    }), [
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
    ]);

    return (
        <WishlistContext.Provider
            value={contextValue}>
            {children}
        </WishlistContext.Provider>
    );
};
