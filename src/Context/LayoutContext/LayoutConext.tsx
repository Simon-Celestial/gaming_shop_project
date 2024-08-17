import React, {createContext, ReactNode, useCallback, useMemo, useState} from "react";

interface LayoutContextType {
    menuState: boolean;
    setMenuState: (open: boolean) => void;
    handleMenuOpen: () => void;
    setQuickView: (open: boolean) => void;
    quickView: boolean;
    handleQuickViewOpen: () => void;
    handleQuickViewClose: () => void;

}

const defaults: LayoutContextType = {
    menuState: false,
    setMenuState: () => {
    },
    handleMenuOpen: () => {
    },
    setQuickView: () => {
    },
    quickView: false,
    handleQuickViewOpen: () => {
    },
    handleQuickViewClose: () => {
    }
}
export const LayoutContext = createContext<LayoutContextType>(defaults);

interface LayoutContextProviderProps {
    children: ReactNode;
}

export const LayoutContextProvider: React.FC<LayoutContextProviderProps> = ({children}) => {
    const [menuState, setMenuState] = useState(false);
    const [quickView, setQuickView] = useState(false);


    // FUNCTION TO OPEN AND CLOSE MOBILE MENU
    const handleMenuOpen = useCallback(() => {
        setMenuState(prevState => !prevState);
    }, []);

    // OPEN AND CLOSE QUICK VIEW
    const handleQuickViewOpen = useCallback(() => {
        setQuickView(true);
    }, [setQuickView]);

    const handleQuickViewClose = useCallback(() => {
        setQuickView(false);
    }, [setQuickView]);


    const value = useMemo(() => ({
            menuState,
            setMenuState,
            handleMenuOpen,
            setQuickView,
            quickView,
            handleQuickViewOpen,
            handleQuickViewClose

        }),
        [
            handleQuickViewClose,
            handleQuickViewOpen,
            menuState,
            setMenuState,
            handleMenuOpen,
            quickView,
        ]);

    return (
        <LayoutContext.Provider value={value}>
            {children}
        </LayoutContext.Provider>
    );
};
