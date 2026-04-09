import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";
// think to add <Outlet/> for react router
import { Menu } from "../components/Menu/Menu";

export const AppLayout = () => {
    return (
        <div>
        <Outlet/>
        <Menu/>
        </div>
    );
}