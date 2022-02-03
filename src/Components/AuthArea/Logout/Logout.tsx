import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../service/AuthService";
import "./Logout.css";

function Logout(): JSX.Element {

    const navigate = useNavigate();

    useEffect(() => {

        authService.logout();

        alert("Logout successfully");

        navigate("/home");
        
    }, []);

    return null;
}

export default Logout;
