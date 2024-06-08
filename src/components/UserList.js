// src/components/UserList.js
import React from 'react';
import '../styles/UserForm.css';

const UserList = ({ users }) => (
  <div className="user-list-container">
    
    <table className="user-list-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserList;
