import React, {useState, createContext, ReactNode, useMemo, useEffect, useCallback} from "react";
import axios from "axios";
import {PRODUCTS_DATA} from "../../Types/types.ts";

interface DataContextType {
    productsData: PRODUCTS_DATA[];
    productsLoading: boolean;
    update: () => void;
    setSelectedProduct: (product: PRODUCTS_DATA | null) => void;
    selectedProduct: PRODUCTS_DATA | null;
    setQuickView: (open: boolean) => void;
    quickView: boolean;
    handleQuickViewOpen: (product: PRODUCTS_DATA | null) => void;
    handleQuickViewClose: () => void;
}

const defaults: DataContextType = {
    productsData: [],
    productsLoading: true,
    update: () => {
    },
    setSelectedProduct: () => {
    },
    selectedProduct: null,
    setQuickView: () => {
    },
    quickView: false,
    handleQuickViewOpen: () => {
    },
    handleQuickViewClose: () => {
    },
}
export const DataContext = createContext<DataContextType>(defaults);

interface DataContextProviderProps {
    children: ReactNode;
}

export const DataContextProvider: React.FC<DataContextProviderProps> = ({children}) => {

    const [productsData, setProductsData] = useState<PRODUCTS_DATA[]>([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [dataUpdate, setDataUpdate] = useState(Date.now());
    const [selectedProduct, setSelectedProduct] = useState<PRODUCTS_DATA | null>(null);
    const [quickView, setQuickView] = useState(false);

    // OPEN AND CLOSE QUICK VIEW OF PRODUCT AND SET IT
    const handleQuickViewOpen = useCallback((product: PRODUCTS_DATA | null) => {
        setSelectedProduct(product);
        setQuickView(true);
    }, [setQuickView, setSelectedProduct]);

    const handleQuickViewClose = useCallback(() => {
        setQuickView(false);
    }, [setQuickView]);


    const update = useCallback(() => {
        setDataUpdate(Date.now());
    }, []);

    useEffect(() => {
        (async () => {
            setProductsLoading(true);
            try {
                const response = await axios.get("https://gaming-shop-server.vercel.app/products");
              // const response = await axios.get("http://localhost:8000/products");
                setProductsData(response.data);
            } catch (error) {
                console.error('Axios error:', error);
            } finally {
                setProductsLoading(false);
            }
        })();
    }, [dataUpdate]);

    const value = useMemo(() => ({
            productsData,
            productsLoading,
            update,
            setSelectedProduct,
            selectedProduct,
            setQuickView,
            quickView,
            handleQuickViewOpen,
            handleQuickViewClose
        }),
        [
            handleQuickViewClose,
            handleQuickViewOpen,
            productsData, productsLoading,
            quickView,
            selectedProduct,
            update
        ]);

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
