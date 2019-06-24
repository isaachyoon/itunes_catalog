import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import DashBoard from './components/DashBoard/DashBoard';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from './reducers';

const App = () => (
  // <Provider store={createStore(reducers)}>
  <div>
    <Search></Search>
    <DashBoard></DashBoard>
  </div>
)

export default App;
