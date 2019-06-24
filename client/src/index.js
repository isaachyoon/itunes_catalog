import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './App';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const render = Component => {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
  document.getElementById('root'),
  )
}

render(App);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
