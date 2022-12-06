import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseAuthentication } from 'renderer/config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './style/registerStyle.css';
import Navbar from 'renderer/component/Navbar';

export default class Registration extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const user = await createUserWithEmailAndPassword(
        firebaseAuthentication,
        email,
        password
      );
      console.log(user);
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

  render() {
    const { email, password } = this.state;
    return (
      <div className="reg-container">
        <Navbar />
        <div className="box-register">
          <h1>Add New Employee</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="email"
                value={email}
                onChange={this.handleChange}
                name="email"
                placeholder="email"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={this.handleChange}
                name="password"
                type="password"
                placeholder="password"
              />
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
        {/* <p><Link to="/">login</Link></p> */}
      </div>
    );
  }
}
