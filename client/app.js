import React from 'react';
import ReactDOM from 'react-dom';
import Closet from './Closet.js';
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Closet />
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
