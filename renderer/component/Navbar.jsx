import React, { useState } from 'react';
import './style/navbarAdmin.css';
import { Link, useNavigate } from 'react-router-dom';
import { firebaseAuthentication } from 'renderer/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBook,
  faIndustry,
  faPowerOff,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { signOut } from 'firebase/auth';

library.add(faHome);
library.add(faBook);
library.add(faIndustry);
library.add(faPowerOff);
library.add(faBars);

const Navbar = () => {
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuthentication, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogout = async () => {
    await signOut(firebaseAuthentication);
    navigate('/');
  };

  return (
    <div className="sidebar">
      {user.email == 'external.department@gmail.com' ? (
        <ul>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-house" />
            <Link to="/validate-movies">validate movies</Link>
          </li>
          <li>
            <Link to="/external-division-food-dashboard">Food dashboard</Link>
          </li>
          <li>
            <Link to="/external-division-list-suppliers">
              List of suppliers
            </Link>
          </li>
          <li>
            <div className="wrap-side-comp">
              <div>
                <FontAwesomeIcon icon={'bars'} />
              </div>
              <div>
                <Link to={'/external-division-list-suppliers-request'}>
                  List Result Request
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="wrap-side-comp">
              <div>
               
              </div>
              <div>
                <Link to={'/advertisement-dashboard'}>Advertisement</Link>
              </div>
            </div>
          </li>
        </ul>
      ) : user.email == 'admin@gmail.com' ? (
        <ul>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-house" />
            <Link to="/dashboard">Home</Link>
          </li>
          <li>View Movie Schedule</li>
          <li>
            <Link to="/register">Register new Employee</Link>
          </li>
          <li>
            <Link to="/resetStaffPassword">Reset staff password</Link>
          </li>
        </ul>
      ) : user.email == 'schedule.division@gmail.com' ? (
        <ul>
          <li>
            <div className="wrap-side-comp">
              <div>
                <FontAwesomeIcon icon={'home'} />
              </div>
              <div>
                <Link to="/scheduleMovieDashboard">Schedule dashboard</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/lookLicenseMovies">Look license movie</Link>
          </li>
          <li>
            <Link to="/list-schedule-movies">List schedule movies</Link>
          </li>
        </ul>
      ) : user.email == 'finance.department@gmail.com' ? (
        <ul>
          <li>
            <div className="wrap-side-comp">
              <div>
                <FontAwesomeIcon icon="home" />
              </div>
              <div>
                <Link to="/finance-department-dashboard">
                  Finance dashboard
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="wrap-side-comp">
              <div>
                <FontAwesomeIcon icon={'book'} />
              </div>
              <div>
                <Link to={'/finance-department-review-request-supply'}>
                  Review request food
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="wrap-side-comp">
              <div>
                <FontAwesomeIcon icon={'industry'} />
              </div>
              <div>
                <Link to={'/finance-department-look-list-suppliers'}>
                  List Suppliers
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="wrap-side-comp">
              <div>
                <FontAwesomeIcon icon={'power-off'} />
              </div>
              <div>
                <p onClick={() => handleLogout()}>Logout</p>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        ' '
      )}
    </div>
  );
};

export default Navbar;
