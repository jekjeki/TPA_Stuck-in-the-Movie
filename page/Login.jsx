import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuthentication } from 'renderer/config/firebase';
import { useNavigate } from 'react-router-dom';
import './style/loginStyle.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // handleChange = (e) => {
  //     this.setState({[e.target.name] : e.target.value})
  // }

  // new Notification('welcome', {body: 'stuck in the Movie Application'});


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const user = await signInWithEmailAndPassword(
        firebaseAuthentication,
        email,
        password
      );
      console.log(user);
      if (user.user.email == 'admin@gmail.com') {
        // props.history.push('/dashboard');
        // <Navigate replace to="/dashboard" />
        navigate('/dashboard');
      }

      if(user.user.email == 'schedule.division@gmail.com')
      {
        navigate('/scheduleMovieDashboard');
      }

      if(user.user.email == 'external.department@gmail.com')
      {
        navigate('/externalDashboard');
      }

      if(user.user.email == 'finance.department@gmail.com')
      {
        navigate('/finance-department-dashboard');
      }

      new Notification('welcome to the app !', {body: 'Hi!,'+user.user.email})

    } catch (error) {
      console.log(error.message);
    }

    

    // firebaseAuthentication.createUserWithEmailAndPassword(email, password)
    // .then(res=>{
    //     this.props.history.push('/login');
    // })
    // .catch(err => {
    //     alert(err.message);
    // })
  };

  return (
    <div className='log-box'>
      <h1>Login</h1>
      <form>
        <div>
          <p>Email :</p>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            name="email"
          />
        </div>
        <div>
          <p>password :</p>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            name="password"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
      {/* <p>
        <Link to="/register">sign up</Link>
      </p> */}
    </div>
  );
};

export default Login;
