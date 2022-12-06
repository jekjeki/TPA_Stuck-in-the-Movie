import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
// import './App.css';
import Login from './page/Login';
import Registration from './page/Registration';
import Dashboard from './page/Dashboard';
import MovieScheduleDashboard from './page/MovieScheduleDivision/MovieScheduleDashboard';
import ResetPassword from './page/resetPassword';
import ExternalDashboard from './page/ExternalDepartment/ExternalDashboard';
import ValidateMovies from './page/ExternalDepartment/Validatemovies';
import DetailMovie from './page/ExternalDepartment/DetailMovie/DetailMovie';
import LookLicenseMovie from './page/MovieScheduleDivision/LookLicenseMovie';
import ScheduleDetailMovie from './page/MovieScheduleDivision/DetailPage/ScheduleDetailMovie';
import FormScheduleMovie from './page/MovieScheduleDivision/FormSchedule/FormScheduleMovie';
import ListScheduleMovies from './page/MovieScheduleDivision/ListScheduleMovies/ListScheduleMovies';
import ExternalFoodDashboard from './page/ExternalDepartment/ExternalFoodDashboard/ExternalFoodDashboard';
import ExternalFoodAddRequest from './page/ExternalDepartment/ExternalFoodDashboard/ExternalFoodAddRequest';
import ExternalListSuppliers from './page/ExternalDepartment/ExternalFoodDashboard/ExternalListSuppliers';
import FinanceDepartment from './page/FinanceDepartment/FinanceDepartment';
import ReviewRequestFood from './page/FinanceDepartment/ReviewRequestFood';
import LookListSupplier from './page/FinanceDepartment/LookListSupplier';
import LookRequestResult from './page/ExternalDepartment/ExternalFoodDashboard/LookRequestResult';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path='/scheduleMovieDashboard' element={<MovieScheduleDashboard />} />
        <Route path='/resetStaffPassword' element={<ResetPassword />}/>
        <Route path='/externalDashboard' element={<ExternalDashboard />} />
        <Route path='/validate-movies' element={<ValidateMovies />}/>
        <Route path='/detail-movie/:id' element={<DetailMovie />} />
        <Route path='/lookLicenseMovies' element={<LookLicenseMovie />}/>
        <Route path='/schedule-license-detail/:id' element={<ScheduleDetailMovie/>}/>
        <Route path='/schedule-license-detail/form/:id' element={<FormScheduleMovie />} />
        <Route path='/list-schedule-movies' element={<ListScheduleMovies />}/>
        <Route path='/external-division-food-dashboard' element={<ExternalFoodDashboard />}/>
        <Route path='/external-division-add-request' element={<ExternalFoodAddRequest />}/>
        <Route path='/external-division-list-suppliers' element={<ExternalListSuppliers />} />
        <Route path='/external-division-list-suppliers-request' element={<LookRequestResult />}/>
        <Route path='/finance-department-dashboard' element={<FinanceDepartment />}/>
        <Route path='/finance-department-review-request-supply' element={<ReviewRequestFood />}/>
        <Route path='/finance-department-look-list-suppliers' element={<LookListSupplier />}/>
      </Routes>
    </Router>
  );
}
