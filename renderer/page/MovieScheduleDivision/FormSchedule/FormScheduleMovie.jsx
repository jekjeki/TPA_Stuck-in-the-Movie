import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'renderer/config/firebase';
import { Calendar } from 'react-date-range';
import './style/FormScheduleMovies.css';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css';
import format from 'date-fns/format';
import { async } from '@firebase/util';
import { collection, addDoc } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';



const FormScheduleMovie = (props) => {
  const [detail, setDetail] = useState({});
  const [time, setTime] = useState();
  const [getDate, setDate] = useState('');
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const NOTIFICATION_TITLE = 'Success !';
  const NOTIFICATION_BODY = 'The movie has been scheduled !';
  const CLICK_MESSAGE = 'Thank you !';


  const handleDetailLicenseMovie = async () => {
    let list = [];
    const docRef = doc(db, 'LicenseMovies', `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
    //   list.push(docSnap.data());
      setDetail(docSnap.data());
    }
  };

  const addToSchedule = async () => {
    const docRef = await addDoc(collection(db, 'ScheduleMovies'), {
      id: detail.id,
      movie_title: detail.movie_title,
      overview: detail.overview,
      vote_average: detail.vote_average,
      date_play: getDate.toString(),
      time_play: time,
    });

    console.log(docRef.id);
    new Notification(NOTIFICATION_TITLE, {body: NOTIFICATION_BODY})
    // new Notification(NOTIFICATION_TITLE, {body: NOTIFICATION_BODY})
    navigate('/scheduleMovieDashboard');

  };

  useEffect(() => {
    handleDetailLicenseMovie();
  }, []);

  return (
    <div>
      <div className="form-schedule-header">
        <div className="wrap-form-schedule-title">
          <h3>Form Scheduling Movies</h3>
        </div>
      </div>
        <div className="form-schedule-comp">
          <img src={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`} />
          <p>ID: </p>
          <input value={detail.id} disabled />
          <p>Movie Title:</p>
          <input value={detail.movie_title} disabled />
          <p>Summary :</p>
          <textarea disabled value={detail.overview} />
        </div>

      <div className="wrap-form-schedule-date">
        <p>Select date: </p>
        <input
          value={getDate}
          defaultValue={format(new Date(), 'MM/dd/yyyy')}
          readOnly
          onClick={() => setOpen((open) => !open)}
        />
        {open && (
          <Calendar
            date={new Date()}
            onChange={(e) => setDate(format(e, 'MM/dd/yyyy'))}
          />
        )}
      </div>
      <div className="wrap-form-schedule-time">
        <p>Select time: </p>
        <select onChange={(e) => setTime(e.target.value)}>
          <option>11.00 - 13.00</option>
          <option>14.00 - 16.00</option>
          <option>17.00 - 19.00</option>
        </select>
      </div>
      <div className="wrap-form-schedule-btn">
        <button onClick={() => addToSchedule()}>Add to Schedule</button>
      </div>
    </div>
  );
};

export default FormScheduleMovie;
