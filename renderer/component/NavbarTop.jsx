import React, { useState } from "react";
import './style/navbarTop.css';
import { firebaseAuthentication } from "renderer/config/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavbarTop = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});

    onAuthStateChanged(firebaseAuthentication, (currentUser) => {
        setUser(currentUser);
    })

    const handleLogout = async () => {
        await signOut(firebaseAuthentication);
        navigate('/');
    }


    return (
        <div className="navbar-top">
            <div>
                <div>
                    <p>{user?.email}</p>
                </div>
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default NavbarTop;