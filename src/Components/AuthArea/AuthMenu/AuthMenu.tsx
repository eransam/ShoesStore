import { Button, ButtonGroup } from "@material-ui/core";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import store from "../../../redux/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserModel>(null);

    // Register 
    useEffect(() => {

        // Once - update user at component load: 
        setUser(store.getState().authState.user);

        // Subscribe to store changes - whenever AuthState change - report it:
        const unsubscribeMe = store.subscribe(() => {
            setUser(store.getState().authState.user);
        });

        // When component destroyed:
        return () => unsubscribeMe();

    }, []);

    return (
        <div className="AuthMenu">
            {user === null ?
                <>
                
                
                <div className="backgroundColorTorkey"><span>Hello Guest</span></div>
                <div className="backgroundColorTorkey"><NavLink to="/login">Login</NavLink></div>
                <div className="backgroundColorTorkey"><NavLink to="/register">Register</NavLink></div>
                    
                
                </>
                :
                <>
                
                <div className="backgroundColorTorkey">
                    <span>Hello {user.firstName} {user.lastName}</span>
                   <NavLink to="/logout">Logout</NavLink>
                    </div>
                
                </>
            }
        </div>
    );
}

export default AuthMenu;
