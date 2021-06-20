import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css'

const App = () => {
  const data = [
    {},
    'string',
    3,
    {label: 'Label1', important: true, id: 'qwe'},
    {label: 'Label2', important: false, id: 'qdefwfewe'},
    {label: 'Label3', important: false, id: 'qweww'},
  ]
  return (
    <div className='app'>
      <AppHeader />
      <div className='search-panel d-flex'>
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data}/>
      <PostAddForm />
    </div>
  );
};

export default App;
