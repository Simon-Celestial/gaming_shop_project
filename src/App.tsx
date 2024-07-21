import {MainRouter} from "./Routers/router.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


export const App = () => {

    return (
        <>
            <MainRouter/>
            <ToastContainer
                position="top-center"
                autoClose={3000}
            />
        </>

    )
}

