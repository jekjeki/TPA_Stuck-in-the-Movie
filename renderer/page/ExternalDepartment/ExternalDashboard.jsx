import React from "react";
import Navbar from "renderer/component/Navbar";
import NavbarTop from "renderer/component/NavbarTop";


const ExternalDashboard = () => {
    return (
       <div>
        <Navbar />
            <div>
                <NavbarTop />
                <p>external dashboard</p>
            </div>
       </div>
    )
}

export default ExternalDashboard;

