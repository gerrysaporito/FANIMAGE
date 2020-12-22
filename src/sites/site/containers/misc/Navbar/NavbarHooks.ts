import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { SITE_ROUTES } from "../../misc/Routes/routes";
import { logout } from "../../../../../store/dispatches/site/user";
import { IRootState } from "../../../../../store/reducers";
import { useHistory } from "react-router-dom";


const NavbarHooks = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userState } = useSelector((state: IRootState) => state);

    /* Button Event to log out user */
    const logoutUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        new Promise((resolve, reject) => {
            const status = dispatch(logout());
            resolve(status)
        })
            .then(() => {
                history.push(SITE_ROUTES.home.route);
            })
    }


    return {
        logoutUser,
        userState,
    };
};

export default NavbarHooks;
