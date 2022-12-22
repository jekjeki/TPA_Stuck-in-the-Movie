import React, { useEffect, useState } from 'react';
import {collection, getDocs, doc, deleteDoc, setDoc} from 'firebase/firestore';
import { db } from 'renderer/config/firebase';
import './style/reviewRequestFood.css';
import { async } from '@firebase/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Link} from 'react-router-dom';

library.add(faAngleLeft);

export default function ReviewRequestFood() {

    const [requests, setRequests] = useState([]);
    const [look, setLook] = useState(true);
    const [disabled, setDisabled] = useState(false);
    

    const getAllFoodRequest = async () => {
        let list = [];
        const query = await getDocs(collection(db, 'SupplyRequest'));
        query.forEach((doc)=>{
            list.push({id: doc.id, ...doc.data()});
            console.log(doc.data());
            console.log(list)
        });
        setRequests(list);
    }

    const handleAcceptClick = async(id, acc, supplierName, foodName, quantityNeed, supplierPhone) => {
        await setDoc(doc(db, 'SupplyRequest', id), {
            supplier_name: supplierName,
            food_name: foodName,
            quantity_need: quantityNeed,
            supplier_phone: supplierPhone, 
            status: acc,
        })

        new Notification('Status Send !', {body: 'thanks for chosing accept !'});
        setDisabled(true)
       
    }

    const handleRejectClick = async (id, acc, supplierName, foodName, quantityNeed, supplierPhone) => {
        await setDoc(doc(db, 'SupplyRequest', id), {
            supplier_name: supplierName,
            food_name: foodName,
            quantity_need: quantityNeed,
            supplier_phone: supplierPhone, 
            status: acc,
        });
        new Notification('Status Send !', {body: 'thanks for chosing reject !'});
        setDisabled(true)
        
    }

    useEffect(()=>{
        getAllFoodRequest();
    },[]);

  return (
    <div className='review-request-food-page'>
        <div className='header-review-request'>
            <div className='wrap-review-food-back'>
                <Link to={'/finance-department-dashboard'}>
                    <div>
                        <FontAwesomeIcon icon={'angle-left'} />
                    </div>
                    <div>
                        <p>back</p>
                    </div>
                </Link>
            </div>
            <div className='wrap-review-food-title'>
                <h3>Review request food</h3>
            </div>
        </div>
        <div className='container-look-request-food'>
            <table className='request-list'>
                <thead>
                    <tr>
                        <th>Supplier Name</th>
                        <th>Material Supply</th>
                        <th>Quantity Need</th>
                        <th>Supplier Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        requests.map((r)=>(
                            <tr>
                                <td>{r.supplier_name}</td>
                                <td>{r.food_name}</td>
                                <td>{r.quantity_need}</td>
                                <td>{r.supplier_phone}</td>
                                <td>
                                    {
                                        look ? 
                                        <div >
                                            <button disabled={disabled} onClick={()=>handleAcceptClick(r.id, 'accept', r.supplier_name, r.food_name, r.quantity_need, r.supplier_phone )}>Accept</button>
                                            <button disabled={disabled} onClick={()=>handleRejectClick(r.id, 'reject', r.supplier_name, r.food_name, r.quantity_need, r.supplier_phone)}>Reject</button>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
