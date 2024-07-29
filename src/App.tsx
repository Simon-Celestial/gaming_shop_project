import {MainRouter} from "./Routers/router.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {DataContextProvider} from "./Context/DataContext/DataContext.tsx";
import {BasketContextProvider} from "./Context/BasketContext/BasketContext.tsx";


export const App = () => {

    return (
        <>
            <BasketContextProvider>
                <DataContextProvider>
                    <MainRouter/>
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                    />
                </DataContextProvider>
            </BasketContextProvider>
        </>

    )
}

