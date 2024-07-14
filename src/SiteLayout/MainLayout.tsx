import {Outlet} from "react-router-dom";
import {MouseFollower} from "./Components/Reusables/MouseFollower/MouseFollower.tsx";

export const MainLayout = () => {
    return (
        <>
            <MouseFollower/>
            <Outlet/>

        </>
    );
};
