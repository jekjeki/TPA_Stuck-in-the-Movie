import React, { useState } from 'react';
import './style/externalAddSupplier.css';
import { Link } from 'react-router-dom';
import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'renderer/config/firebase';


export default function AddNewSupplier() {

  const [supplierName, setSupplierName] = useState('');
  const [supplierEmail, setSupplierEmail] = useState('');
  const [supplierMaterial, setSupplierMaterial] = useState('');
  const [supplierAddress, setSupplierAdress] = useState('');

  const addNewSupplier = async() => {
    const docRef = await addDoc(collection(db, 'ListSuppliers'), {
      supplierAddress: supplierAddress, 
      supplierEmail: supplierEmail,
      supplierName: supplierName,
      supply_material: supplierMaterial,
      supplierID: Math.floor(Math.random()*1000)

    })
    console.log(docRef);
    new Notification('supplier data has added !', {body:'thank you !'});
  }


  return (
    <div>
      <div className="add-splr-form">
        <h3 className="add-new-splr-heading">Add New Supplier Form</h3>
        <div className="wrap-addsplr-name">
          <div>Name:</div>
          <div>
            <input value={supplierName} name="supplierName" onChange={(e)=>setSupplierName(e.target.value)} />
          </div>
        </div>
        <div className="wrap-addsplr-email">
          <div>Email:</div>
          <div>
            <input value={supplierEmail} name="supplierEmail" onChange={(e)=>setSupplierEmail(e.target.value)}/>
          </div>
        </div>
        <div className="wrap-addsplr-material">
          <div>Material:</div>
          <div>
            <div>
              <input value={supplierMaterial} name="supplierMaterial" onChange={(e)=>setSupplierMaterial(e.target.value)} />
            </div>
          </div>
        </div>
        <div className='wrap-addsplr-address'>
          <div>Address:</div>
          <div>
            <input value={supplierAddress} name="supplierAddress" onChange={(e)=>setSupplierAdress(e.target.value)} />
          </div>
        </div>
        <div className="wrap-add-splr-btn">
          <div>
            <button onClick={()=>addNewSupplier()}>Add New Supplier</button>
          </div>
          <div className='btn-add-splr-cancel'>
            <button><Link to={'/externalDashboard'}>Cancel</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}
