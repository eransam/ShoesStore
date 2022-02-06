import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../service/AuthService";
import notify from "../../../service/NotifyService";
import "./Logout.css";

function Logout(): JSX.Element {

    const navigate = useNavigate();

    useEffect(() => {

        authService.logout();
        notify.success("Logout successfully");


        navigate("/home");
        
    }, []);

    return null;
}

export default Logout;
