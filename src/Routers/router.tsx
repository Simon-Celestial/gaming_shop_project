import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "../SiteLayout/MainLayout.tsx";
import {HomePage} from "../SiteLayout/Pages/HomePage/HomePage.tsx";
import {NotFoundPage} from "../SiteLayout/Pages/NotFoundPage/NotFoundPage.tsx";
import {ShopPage} from "../SiteLayout/Pages/ShopPage/ShopPage.tsx";

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
                path: 'home',
                element: <HomePage/>,
            },
            {
                path: 'shop',
                element: <ShopPage/>
            }
        ],
    }
]);

export const MainRouter = () => {
    return <RouterProvider router={router()}/>;
};

