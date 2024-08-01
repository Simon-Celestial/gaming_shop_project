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

const router = () => createBrowserRouter([
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
                element: <LoginPage/>
            },
            {
                path: "register",
                element: <RegisterPage/>
            }

        ],
    }
]);

export const MainRouter = () => {
    return <RouterProvider router={router()}/>;
};

