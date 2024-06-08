import React, { useState } from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setSearchQuery(e.target.value);
    
  };

  return (
    <input 
      className="form-control" 
      type="search" 
      placeholder="Search" 
      aria-label="Search" 
      value={searchInput} 
      onChange={handleSearchChange} 
    />
  );
};

export default SearchBar;
