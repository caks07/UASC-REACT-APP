// src/pages/UsersPage.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import SearchBar from './components/SearchBar';
import Pagination from './components/Paagination';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(`https://gorest.co.in/public-api/users?page=${currentPage}`,
        {
          headers: {
            'Authorization': 'Bearer fd0f5ce543dc5dfbd681eb316f08849f4c0b2b5291b93f3db5c67fef5d183179',
            'Content-Type': 'application/json'
          },
        });
      // const response = await axios.get(`https://gorest.co.in/public-api/users?page=${currentPage}`);
      setUsers(response.data.data);
      console.log(response.data.data);
      setTotalPages(response.data.meta.pagination.pages);
    } catch (error) {
      console.error(error);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const refreshUsers = () => {
    fetchUsers();
  };

  return (
    <div>

      <h1>User Management</h1>
      
      <SearchBar setSearchQuery={setSearchQuery} />
      <UserForm refreshUsers={refreshUsers} />
      <UserList users={users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()))} />
      <Pagination currentPage={currentPage} totalPages={totalPages} setPage={setCurrentPage} />
    </div>
  );
};

export default UsersPage;
