import {Outlet} from "react-router-dom";
import {MouseFollower} from "./Components/Reusables/MouseFollower/MouseFollower.tsx";
import {BackToTop} from "./Components/Reusables/BackToTop/BackToTop.tsx";

export const MainLayout = () => {
    return (
        <>
            <MouseFollower/>
            <Outlet/>
            <BackToTop/>

        </>
    );
};
