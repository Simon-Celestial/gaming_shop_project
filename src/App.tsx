import {MainRouter} from "./Routers/router.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {DataContextProvider} from "./Context/DataContext/DataContext.tsx";


export const App = () => {

    return (
        <>
            <DataContextProvider>
            <MainRouter/>
            <ToastContainer
                position="top-center"
                autoClose={3000}
            />
            </DataContextProvider>
        </>

    )
}

