// src/components/UserList.js
import React from 'react';

const UserList = ({ users }) => (
  <div>
    <h2>Users</h2>
    <ul className="list-group list-group-flush">
      {users.map(user => (
        <li className="list-group-item" key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
);

export default UserList;
