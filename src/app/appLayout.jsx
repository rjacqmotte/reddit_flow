import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";
// think to add <Outlet/> for react router

export const AppLayout = () => {
    return (
        <div>
        <nav>
            <ul>
                <li>
                    <NavLink to={ROUTES.mainRoute()} >
                        All articles
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.topicsRoute()}>
                        Topics
                    </NavLink>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </div>
    );
}