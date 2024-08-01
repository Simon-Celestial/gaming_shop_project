import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "../SiteLayout/MainLayout.tsx";
import {HomePage} from "../SiteLayout/Pages/HomePage/HomePage.tsx";
import {NotFoundPage} from "../SiteLayout/Pages/NotFoundPage/NotFoundPage.tsx";
import {ShopPage} from "../SiteLayout/Pages/ShopPage/ShopPage.tsx";
import {WishlistPage} from "../SiteLayout/Pages/WishlistPage/WishlistPage.tsx";
import {BasketPage} from "../SiteLayout/Pages/BasketPage/BasketPage.tsx";
import {CheckoutPage} from "../SiteLayout/Pages/CheckoutPage/CheckoutPage.tsx";
import {CompletedPage} from "../SiteLayout/Pages/CompletedPage/CompletedPage.tsx";
import {LoginPage} from "../SiteLayout/Pages/LoginAndRegisterPages/LoginPage/LoginPage.tsx";
import {RegisterPage} from "../SiteLayout/Pages/LoginAndRegisterPages/RegisterPage/RegisterPage.tsx";
import {AuthContext} from "../Context/AuthContext/AuthContext.tsx";
import {useContext} from "react";
import {PrivacyPolicyPage} from "../SiteLayout/Pages/PrivacyPolicyPage/PrivacyPolicyPage.tsx";

interface UserData {
    email: string;
    username: string;
    registerDate: string;
    phone: string;
    userID: string;
}

interface RouterProps {
    userData: UserData | undefined;
    token: string | undefined;
}


const router = ({userData, token}: RouterProps) => createBrowserRouter([
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {
                    path: "*",
                    element: <NotFoundPage/>
                },

                {
                    path: '/',
                    element: <HomePage/>,
                },
                {
                    path: 'shop',
                    element: <ShopPage/>
                },
                {
                    path: 'wishlist',
                    element: <WishlistPage/>
                },
                {
                    path: 'basket',
                    element: <BasketPage/>
                },
                {
                    path: "checkout",
                    element: <CheckoutPage/>
                },
                {
                    path: "completed",
                    element: <CompletedPage/>
                },
                {
                    path: "login",
                    element: token && userData ? <HomePage/> : <LoginPage/>,
                },
                {
                    path: "register",
                    element: token && userData ? <HomePage/> : <RegisterPage/>,
                },
                {
                    path: "privacy-policy",
                    element: <PrivacyPolicyPage/>,
                }
            ],
        }
    ])
;

export const MainRouter = () => {
    const {token, userData} = useContext(AuthContext);
    return <RouterProvider router={router({token, userData})}/>;
};

