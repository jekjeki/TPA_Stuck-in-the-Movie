import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from 'renderer/config/firebase';

export default function ViewAdvertisement() {
  const [listAdv, setListAdv] = useState([]);

  const getListAdvertisement = async () => {
    let list = [];
    const querySnapshot = await getDocs(collection(db, 'AdvertisementPartner'));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      list.push({ id: doc.id, ...doc.data() });
    });
    setListAdv(list);
  };

  useEffect(() => {
    getListAdvertisement();
  }, []);

  return (
    <div>
      <table className="table-list-supplier">
        <thead>
          <tr>
            <th>Company Partner</th>
          </tr>
        </thead>
        <tbody>
          {listAdv.map((la) => (
            <tr>
              <td>{la.advCompany}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
