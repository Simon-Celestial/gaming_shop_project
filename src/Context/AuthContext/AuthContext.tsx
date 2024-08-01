import React, {ReactNode, useCallback, useEffect, useState} from "react";
import {Bounce, toast} from "react-toastify";

interface UserData {
    email: string;
    username: string;
    registerDate: string;
    phone: string;
    userID: string;
}

interface AuthContextType {
    token: string | undefined;
    userData: UserData | undefined;
    setToken: (token: string | undefined) => void;
    setUserData: (data: UserData | undefined) => void;
    logOut: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
    token: undefined,
    userData: undefined,
    setToken: () => {},
    setUserData: () => {},
    logOut: () => {},
});

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | undefined>(localStorage.getItem("token") ?? undefined);
    const [userData, setUserData] = useState<UserData | undefined>(
        localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData") ?? '{}') : undefined
    );
    useEffect(() => {
        if (token !== undefined) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    useEffect(() => {
        if (userData !== undefined) {
            localStorage.setItem("userData", JSON.stringify(userData));
        } else {
            localStorage.removeItem("userData");
        }
    }, [userData]);


    const logOut = useCallback(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        setToken(undefined);
        setUserData(undefined);
        toast.error('You have logged out', {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }, []);

    return (
        <AuthContext.Provider value={{
            token,
            userData,
            setToken,
            setUserData,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
};