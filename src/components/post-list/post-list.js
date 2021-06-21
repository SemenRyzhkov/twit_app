import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({ posts }) => {
  const elements = posts.map((post) => {
    if (typeof post === 'object' && !isEmpty(post)) {
      const { id, ...postProps } = post;
      return (
        <li key={id} className='list-group-item'>
          <PostListItem {...postProps} />
        </li>
      );
    }
  });

  function isEmpty(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }

  return <ListGroup className='app-list'>{elements}</ListGroup>;
};

export default PostList;
