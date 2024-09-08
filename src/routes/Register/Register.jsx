import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/users-slice';
import { notification } from 'antd'

import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
       name, 
       surname,
       age
     };
    dispatch(addUser(newUser));
    setName('');
    setSurname('');
    setAge('');
    notification.success({message : "User added successfully"})
  };

  return (
    <div className="container">
    <div className="form-wrapper">
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            id="surname"
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            id="age"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  );
};

export default Register