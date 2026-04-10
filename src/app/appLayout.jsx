import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";
// think to add <Outlet/> for react router
import { Menu } from "../components/Menu/Menu";
import styles from './app.module.css';

export const AppLayout = () => {
    return (
        <div className={styles.AppLayoutContainer}>
        <Outlet/>
        <Menu/>
        </div>
);
}