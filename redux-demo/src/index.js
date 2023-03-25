import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { combineReducers,createStore } from 'redux';
import loginReducer from './components/store/loginReducer';
import Productreducer from './components/store/ProductReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootReducer = combineReducers({
  pr:Productreducer,
  lr:loginReducer
})

const store = createStore(rootReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//By doing this, we have just made sure that the store is availaible to all the components
// But to access to data pieces we will again use the hooks or connect() method to get the data at components level
// The <Provider> is used to make the store object availaible to the entire application or the components which you wrap around the <Provider/>

