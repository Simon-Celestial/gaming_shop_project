import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "../SiteLayout/MainLayout.tsx";
import {HomePage} from "../SiteLayout/Pages/HomePage/HomePage.tsx";
import {NotFoundPage} from "../SiteLayout/Pages/NotFoundPage/NotFoundPage.tsx";

const router = () => createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "*",
                element: <NotFoundPage />
            },

            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: 'home',
                element: <HomePage/>,
            }
        ],
    }
]);

export const MainRouter = () => {
    return <RouterProvider router={router()}/>;
};

