import React, { useState } from 'react';
import '../styles/UserForm.css';

const SearchBar = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input 
        className="form-control" 
        type="search" 
        placeholder="Search" 
        aria-label="Search" 
        value={searchInput} 
        onChange={handleSearchChange} 
      />
    </div>
  );
};

export default SearchBar;
