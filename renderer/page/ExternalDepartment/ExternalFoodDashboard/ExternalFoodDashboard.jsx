import React, { useEffect, useState } from "react";
import { db } from "renderer/config/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { Link } from "react-router-dom";
import './style/externalFoodDashboard.css';
import { Link } from "react-router-dom";


const ExternalFoodDashboard = () => {

    const [foods, setFoods] = useState([]);

    const getListFood = async () => {

        let list = [];

        const querySnapshot = await getDocs(collection(db, 'ListFood'));
        querySnapshot.forEach((doc)=>{
            list.push({id: doc.id, ...doc.data()});
            console.log(doc.data());
        });

        setFoods(list);
    }

    useEffect(() => {

        getListFood();

    }, []);


    return (
        <div>
            <div className="extern-food-dashboard-header">
                <div className="wrap-food-dashboard-back">
                    <p><Link to={'/externalDashboard'}>back</Link></p>
                </div>
                <div className="wrap-food-dashboard-title">
                    <p>Food Dashboard</p>
                </div>
            </div>
            <div className="container-food-dashboard">
                <table className="table-list-food-dashboard">
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Food Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map((food)=>(
                                <tr>
                                    <td>{food.foodName}</td>
                                    <td>{food.quantity}</td>
                                    <td>{food.status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="wrap-food-dashboard-add-request">
                <button><Link to={'/external-division-add-request'}>Request add food supply</Link></button>
            </div>
        </div>
    )
}


export default ExternalFoodDashboard;




