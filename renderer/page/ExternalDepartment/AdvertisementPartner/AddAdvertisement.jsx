import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from 'renderer/config/firebase';
import './style/addAdvertisement.css';
import { Link } from 'react-router-dom';

export default function AddAdvertisement() {
    const [advTitle, setAdvTitle] = useState('');
    const [advDesc, setAdvDesc] = useState('');
    const [advDuration, setAdvDuration] = useState('');
    const [advCompany, setAdvCompany] = useState('');
    const [advCosts, setAdvCosts] = useState(0);

    const AdvSingleton = (()=>{

        function AddAdv(){
            addAdvertisementPartner();
        }

        const addAdvertisementPartner = async () => {
            const docRef = await addDoc(collection(db, "AdvertisementPartner"), {
                advId: Math.ceil(Math.random())*100,
                advTitle: advTitle,
                advDesc: advDesc,
                advDuration: advDuration,
                advCompany: advCompany,
                advCosts: advCosts
            })
            console.log(docRef);
            new Notification('advertisement has added', {body:'thank you !'});
        }

        let add;

        const createAdd = () => {
            add = new AddAdv();
            return add;
        }

        return {
            getAddAdvertisement:()=>{
                if(!add){
                    add = createAdd();
                    return add;
                }
            }
        }

    })()

    const headingStyle = {
        marginBottom: "30px",
        textAlign: "center",
    }

    const divbtnStyle = {
        marginTop: "10px"
    }

    const btnstyle = {
        backgroundColor: "#82AAE3",
        color: "white",
        alignItems: "center",
        border: "none",
        padding: "7px",
        borderRadius: "7px",
        width: "100%"
    }

    const cancelBtn = {
        backgroundColor: "#62B6B7",
        color: "white",
        alignItems: "center",
        border: "none",
        padding: "7px",
        borderRadius: "7px",
        width: "100%"
    }

    const wrapDuration = {
        display: "flex"
    }

    const txtMinute = {
        marginLeft: "10px"
    }

  return (
    <div>
        <div className='add-adv-form'>
            <h3 className='form-add-adv-heading' style={headingStyle}>Add Advertisement Form</h3>
            <div className='add-adv-title'>
                <div>
                    Title:
                </div>
                <div>
                    <input value={advTitle} name="advTitle" onChange={(e)=>setAdvTitle(e.target.value)} />
                </div>
            </div>
            <div className='add-adv-desc'>
                <div>
                    Description:
                </div>
                <div>
                    <input value={advDesc} name="advDesc" onChange={(e)=>{setAdvDesc(e.target.value)}} />
                </div>
            </div>
            <div>
                <div>
                    Duration:
                </div>
                <div className='wrap-adv-duration' style={wrapDuration}>
                    <div>
                        <input value={advDuration} name="advDuration" onChange={(e)=>setAdvDuration(e.target.value)} />
                    </div>
                    <div className='txt-min' style={txtMinute}>
                        Minutes
                    </div>
                </div>
            </div>
            <div>
                <div>
                    External Company:
                </div>
                <div>
                    <input value={advCompany} name="advCompany" onChange={(e)=>setAdvCompany(e.target.value)} />
                </div>
            </div>
            <div>
                <div>
                    Costs: 
                </div>
                <div>
                    <input value={advCosts} name="advCosts" onChange={(e)=>setAdvCosts(e.target.value)} />
                </div>
            </div>
            <div className='wrap-add-adv-btn'>
                <div style={divbtnStyle}>
                    <button onClick={()=>AdvSingleton.getAddAdvertisement()} style={btnstyle}>Add Advertisement</button>
                </div>
                <div style={divbtnStyle}>
                    <button style={cancelBtn}><Link to={'/externalDashboard'}>Cancel</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}
