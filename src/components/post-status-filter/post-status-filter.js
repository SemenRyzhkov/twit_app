import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
  return (
    <div className='btn-group d-flex justify-content-between'>
      <button type='button' className='btn btn-info mr-2'>
        All
      </button>
      <button type='button' className='btn btn-outline-secondary ml-2'>
        Is like
      </button>
    </div>
  );
};

export default PostStatusFilter;
