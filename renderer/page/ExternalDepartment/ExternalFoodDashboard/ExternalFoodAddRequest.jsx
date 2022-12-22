import React, { useEffect, useState } from "react";
import './style/externalFoodAddRequest.css';
import {collection, addDoc, getDocs} from 'firebase/firestore';
import { Link } from "react-router-dom";
import { db } from "renderer/config/firebase";


const ExternalFoodAddRequest = () => {

    const [foodName, setFoodName] = useState('');
    const [quantityNeed, setQuantityNeed] = useState(0);
    const [supplierName, setSupplierName] = useState('');
    const [supplierPhone, setSupplierPhone] = useState('');


    const addRequestDataToFinance = async () => {
        const docRef = await addDoc(collection(db, "SupplyRequest"), {
            food_name: foodName,
            quantity_need: quantityNeed,
            supplier_name: supplierName,
            supplier_phone: supplierPhone
        });

        console.log(docRef);
        new Notification('request has send', {body:'please wait'});
    }



    return (
        <div className="container-external-add-request">
            <div className="form-add-request-supply">
                <div className="external-add-request-title">
                    <h3>Add Request Supply</h3>
                </div>
                <div className="comp-add-request">
                    <p>Food Name: </p>
                    <input value={foodName} name="foodName" onChange={(e)=>setFoodName(e.target.value)} />
                </div>
                <div className="comp-add-request">
                    <p>Quantity Need: </p>
                    <input value={quantityNeed} name="quantityNeed" onChange={(e)=>setQuantityNeed(e.target.value)}/>
                </div>
                <div className="comp-add-request">
                    <p>Supplier Name: </p>
                    <input value={supplierName} name="supplierName" onChange={(e)=>setSupplierName(e.target.value)} />
                </div>
                <div className="comp-add-request">
                    <p>Supplier phone: </p>
                    <input value={supplierPhone} name="supplierPhone" onChange={(e)=>setSupplierPhone(e.target.value)}/>
                </div>
                <div className="comp-add-request-send-req">
                    <button onClick={()=>addRequestDataToFinance()}>Send request form</button>
                </div>
                <div className="comp-add-request-cancel">
                    <p><Link to={'/externalDashboard'}>cancel?</Link></p>
                </div>
            </div>
        </div>
    )
}

export default ExternalFoodAddRequest;