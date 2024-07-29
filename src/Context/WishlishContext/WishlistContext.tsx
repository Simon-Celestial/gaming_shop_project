import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Bounce, toast} from "react-toastify";
import {PRODUCTS_DATA} from "../../Types/types.ts";


interface WishlistContextType {
    wishlistItems: PRODUCTS_DATA[];
    addToWishlist: (product: PRODUCTS_DATA) => void;
    removeFromWishlist: (productId: number,productName : string) => void;
}

const initialContextValue: WishlistContextType = {
    wishlistItems: [],
    addToWishlist: () => {
    },
    removeFromWishlist: () => {
    },
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

    const addToWishlist = useCallback((product: PRODUCTS_DATA) => {
        setWishlistItems(prev => {
            const isExistingIndex = prev.findIndex(item => item?.id === product.id);
            if (isExistingIndex === -1) {
                toast.success(`${product?.name} added to wishlist`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return [...prev, product];
            } else {
                toast.error(`${product?.name} removed from wishlist!`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                const updatedWishlist = [...prev];
                updatedWishlist.splice(isExistingIndex, 1);
                return updatedWishlist;
            }
        });
    }, []);

    const removeFromWishlist = useCallback((productId: number,productName: string) => {
        toast.success(`${productName} removed from wishlist`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
        });
        setWishlistItems(prev => prev.filter(item => item?.id !== productId));
    }, []);

    const contextValue = useMemo(() => ({
        wishlistItems,
        addToWishlist,
        removeFromWishlist
    }), [
        wishlistItems,
        addToWishlist,
        removeFromWishlist
    ]);

    return (
        <WishlistContext.Provider
            value={contextValue}>
            {children}
        </WishlistContext.Provider>
    );
};
