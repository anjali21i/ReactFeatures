import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../utils/Routes";

const NavBar = () => {
    console.log(ROUTES);
    return (
        <div className="wrap_nav">
            <NavLink className={"_nav"} to={ROUTES.BASE}>Log In/ Sign Up </NavLink>
            <NavLink className={"_nav"} to={ROUTES.DASHBOARD}>Dashboard </NavLink>
            <NavLink to={ROUTES.HOME} className={"_nav"}>Home </NavLink>
            <Link className={"_nav"} to={ROUTES.ABOUT}>About </Link>
        </div>
    );
};

export default NavBar;
