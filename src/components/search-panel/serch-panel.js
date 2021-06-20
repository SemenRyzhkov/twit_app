import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  return (
    <input
      className='form-control search-input'
      placeholder='search posts'
      type='text'
    />
  );
};

export default SearchPanel;
