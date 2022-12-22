import React, { useState } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { db } from 'renderer/config/firebase';
import BackComponent from 'renderer/component/BackComponent';

export default function LookRequestResult() {

    const [listReq, setListReq] = useState([]);

    const handleResultRequest = async() => {
        let list = [];
        const query = await getDocs(collection(db, 'SupplyRequest'));
        query.forEach((doc)=>{
            list.push({id: doc.id, ...doc.data()});
            console.log(doc.data());
        });

        setListReq(list); 
        
    }

  return (
    <div>
        <div className='header-look-request'>
            <BackComponent />
            <div>
                <p>List Status Request</p>
            </div>
        </div>
        <div className='page-look-request'>
            <table>
                <thead>
                    <tr>
                        <th>Supplier Name</th>
                        <th>Supplier Phone</th>
                        <th>Quantity Request</th>
                        <th>Material Name</th>
                        
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}
