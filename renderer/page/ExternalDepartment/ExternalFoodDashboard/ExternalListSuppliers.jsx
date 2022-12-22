import React, { useEffect, useState } from "react";
import {collection, getDoc, getDocs} from 'firebase/firestore';
import BackComponent from "renderer/component/BackComponent";
import { db } from "renderer/config/firebase";
import { Link } from "react-router-dom";
import './style/externalListSuppliers.css';
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuthentication } from "renderer/config/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faAngleLeft);

const ExternalListSuppliers = () => {

    const [listSupplier, setListSupplier] = useState([]);
    const [user, setUser] = useState('');

    onAuthStateChanged(firebaseAuthentication, (currentUser)=>{
        setUser(currentUser);
    });


    const getListSuppliers = async() => {
        let list = [];
        const querySnapshot = await getDocs(collection(db, 'ListSuppliers'));
        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            list.push({id: doc.id, ...doc.data()});
        });
        setListSupplier(list);
    }

    useEffect(()=>{
        getListSuppliers();
    }, []);


    const stylebtnadd = {
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }

    return (
        <div className="container-list-suppliers">
            <div className="container-list-supliers-header">
                <div className="wrap-back-list-suppliers">
                    {
                        (user.email == 'external.department@gmail.com') ?
                        <Link to={'/external-division-food-dashboard'}>
                                <BackComponent />
                            <div>
                                <p>back</p>
                            </div>
                        </Link>
                        :
                        <Link to={'/finance-department-dashboard'}>
                            
                            <BackComponent />
                            <div>
                                <p>back</p>
                            </div>
                        </Link>
                    }
                </div>
                <div className="wrap-list-suppliers-title">
                    <h3>List Suppliers</h3>
                </div>
            </div>
            <div className="page-list-suppliers">
                <table className="table-list-supplier">
                    <thead>
                        <tr>
                            <th>Supplier Name</th>
                            <th>Supplier Email</th>
                            <th>Supply Material</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            listSupplier.map((ls)=>(
                                    <tr key={ls.supplierID}>
                                        <td>{ls.supplierName}</td>
                                        <td>{ls.supplierEmail}</td>
                                        <td>{ls.supply_material}</td>
                                        <td>{ls.supplierAddress}</td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="wrap-btn-add-splr" style={stylebtnadd}>
                <button><Link to={'/add-new-supplier'}>Add New Supplier</Link></button>
            </div>
        </div>
    );
}

export default ExternalListSuppliers;




