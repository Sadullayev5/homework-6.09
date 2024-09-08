import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/users-slice';
import { notification } from 'antd'

const Home = () => {
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeUser(id));
    notification.success({message : "User deleted successfully!"})
  };

  return (
    <div className="home-container">
      <div className="table-wrapper">
        <h2>Users List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name} {user.surname}</td>
                  <td>{user.age}</td>
                  <td>
                    <button onClick={() => handleRemove(user.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Home