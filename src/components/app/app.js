import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
import styled from 'styled-components';
import uuid from 'react-uuid';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Label1', important: true, id: 1 },
        { label: 'Label2', important: false, id: 2 },
        { label: 'Label3', important: false, id: 3 },
      ],
    };
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newArr = data.filter((item) => item.id !== id);
      return {
        data: newArr,
      };
    });
  };

  addItem = (label) => {
    const newItem = { label, important: false, id: uuid() };
    console.log(newItem);
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return { data: newArr };
    });
  };

  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className='search-panel d-flex'>
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm addItem={this.addItem} />
      </AppBlock>
    );
  }
}
