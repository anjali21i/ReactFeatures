import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../utils/Routes";

const NavBar = () => {
    console.log(ROUTES);
    console.log(ROUTES.HOME);
    console.log([ROUTES.ABOUT]);
    return (
        <>
            <NavLink to={ROUTES.DASHBOARD}>Dashboard </NavLink>
            <NavLink to={ROUTES.HOME} className={({isActive}) => isActive ? "active" : ""}>Home </NavLink>
            <Link to={ROUTES.ABOUT}>About </Link>
        </>
    );
};

export default NavBar;
