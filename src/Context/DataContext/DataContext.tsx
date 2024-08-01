import React, {useState, createContext, ReactNode, useMemo, useEffect, useCallback} from "react";
import axios from "axios";
import {PRODUCTS_DATA} from "../../Types/types.ts";

interface DataContextType {
    productsData: PRODUCTS_DATA[];
    productsLoading: boolean;
    update: () => void;
}

const defaults: DataContextType = {
    productsData : [],
    productsLoading : true,
    update: ()=> {},
}
export const DataContext = createContext<DataContextType>(defaults);

interface DataContextProviderProps {
    children: ReactNode;
}

export const DataContextProvider: React.FC<DataContextProviderProps> = ({children}) => {

    const [productsData,setProductsData] = useState([]);
    const [productsLoading,setProductsLoading] = useState(true);
    const [dataUpdate, setDataUpdate] = useState(Date.now());

    const update = useCallback(() => {
        setDataUpdate(Date.now());
    }, []);

    useEffect(() => {
        (async () => {
            setProductsLoading(true);
            try {
                const response = await axios.get("http://localhost:8000/products");
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
            update
        }),
        [productsData, productsLoading, update]);

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
