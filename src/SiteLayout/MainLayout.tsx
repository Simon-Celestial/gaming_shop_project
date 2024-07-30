import {Outlet} from "react-router-dom";
import {MouseFollower} from "./Components/Reusables/MouseFollower/MouseFollower.tsx";
import {BackToTop} from "./Components/Reusables/BackToTop/BackToTop.tsx";
import {SetPageOnTop} from "./Components/Reusables/SetPageOnTop/SetPageOnTop.tsx";

export const MainLayout = () => {
    return (
        <>
            <MouseFollower/>
            <Outlet/>
            <BackToTop/>
            <SetPageOnTop/>
        </>
    );
};
