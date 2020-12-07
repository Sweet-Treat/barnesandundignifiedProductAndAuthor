
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import 'semantic-ui-css/semantic.min.css';


const queryString = window.location.search;
console.log('queryString is:', queryString);
const urlParams = new URLSearchParams(queryString);
var isbn = urlParams.get('isbn');
console.log('isbn is:', isbn);

ReactDOM.render(
  <App isbn13={isbn}/>,
  document.getElementById('product-details'));



