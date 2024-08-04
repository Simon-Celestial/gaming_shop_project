import styles from "./SearchPanel.module.scss";
import CloseIcon from '@mui/icons-material/Close';
import React, {useCallback, useContext, useMemo, useState} from "react";
import {DataContext} from "../../../../Context/DataContext/DataContext.tsx";
import {Link} from "react-router-dom";

interface SearchPanelProps {
    searchPanelOpen: boolean;
    setSearchPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;

}

export const SearchPanel: React.FC<SearchPanelProps> = ({searchPanelOpen, setSearchPanelOpen}) => {
    const {
        productsData
    } = useContext(DataContext);

    const [searchInputValue, setSearchInputValue] = useState("");

    const handleSearchInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(e.target.value)
    }, [])

    const handleCloseSearchPanel = useCallback(() => {
        setSearchPanelOpen(false);
    }, [setSearchPanelOpen]);

    const filteredData = useMemo(() => {
        if (!searchInputValue.trim()) {
            return [];
        }
        return productsData.filter((product) =>
            product?.name?.toLowerCase().includes(searchInputValue.toLowerCase())
        );
    }, [searchInputValue, productsData]);


    return (
        <div
            className={`${styles.searchWrapper}
             ${searchPanelOpen ? styles.panelActive : ''}
              ${filteredData?.length > 0? styles.fullScreen : ''}`}>
            <div className={styles.topRow}>
                <div className={styles.logoBlock}>
                    <img src="/images/icons/siteLogo.png" alt="Project Logo"/>
                    <p>game<span>storm</span></p>
                </div>
                <div
                    className={styles.closeBtn}
                    onClick={handleCloseSearchPanel}
                >
                    <CloseIcon/>
                </div>
            </div>
            <div className={styles.searchRow}>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        placeholder={"Type words to search"}
                        value={searchInputValue}
                        onChange={handleSearchInputChange}
                    />
                </div>
            </div>
            <div className={styles.searchResults}>
                {filteredData?.length > 0 ? (
                        filteredData?.map((product) => (
                            <div key={product?.id} className={styles.productWrapper}>
                                <img src={product?.image[0]} alt={product?.name}/>
                                <Link to={product?.id?.toString()}>
                                    {product?.name}
                                </Link>
                                <p>
                                    ${product?.salePrice?.toFixed(2)}
                                    {product?.regularPrice && <span>${product?.regularPrice?.toFixed(2)}</span>}
                                </p>
                            </div>
                        ))
                    )
                    :
                    searchInputValue.length > 0 ?
                        <h2>No matching search query products...</h2>
                        :
                        null
                }
            </div>
        </div>
    );
};
