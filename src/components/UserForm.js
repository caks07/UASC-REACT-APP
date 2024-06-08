// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ refreshUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [status, setStatus] = useState('active');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post(
        'https://gorest.co.in/public-api/users',
        { name, email, gender, status },
        {
          headers: {
            'Authorization': 'Bearer fd0f5ce543dc5dfbd681eb316f08849f4c0b2b5291b93f3db5c67fef5d183179',
            'Content-Type': 'application/json'
          },
        }
      );
      console.log(response);
      if (response.data.code === 201) {
        refreshUsers();
      } else {
        const errorMessage = response.data.data ? response.data.data.message : 'Failed to create user';
        setError('Failed to create user: ' + errorMessage);
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error.response && error.response.data ? error.response.data.message : error.message;
      setError('Error: ' + errorMessage);
    }
  };

  return (
    <div className="user-form-container">
    <form onSubmit={handleSubmit} className="user-form">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Gender</label>
        <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Status</label>
        <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add User</button>
    </form>
    {error && <p className="error-message">{error}</p>}
  </div>

  );
};

export default UserForm;
