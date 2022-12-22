import React from 'react';
import { Link } from 'react-router-dom';
import './style/AdvertisementStyle.css';
export default function CompDashboard() {
  return (
    <div>
      <div className="ad-sidebar">
        <h2>Ads Dashboard</h2>
        <ul>
          <li>
            <div>
              <Link to={'/add-advertisement'}>Add Advertisement</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to={'/view-advertisement'}>View Advertisement</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
