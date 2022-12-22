import React from "react";
import Navbar from "renderer/component/Navbar";
import './style/resetPasswordStaff.css';
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuthentication } from "renderer/config/firebase";


const ResetPassword = () => {

    const [resetEmail, setResetEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

       sendPasswordResetEmail( firebaseAuthentication ,resetEmail)
       .then(()=>{
        console.log('silahkan periksa email anda')
       })
       .catch(error=>{
        console.log(error);
       })

    }

    return (
        <div className="con-resetpass">
            <Navbar />
            <div className="page-resetpass">
                <div className="box-resetpass">
                    <h3>Reset Staff Password</h3>
                    <form>
                        <div>
                            <p>Email :</p>
                            <input type="email" value={resetEmail} onChange={(event)  => {setResetEmail(event.target.value)}} />                           
                        </div>
                        <button type="submit" onClick={handleSubmit}>Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ResetPassword;