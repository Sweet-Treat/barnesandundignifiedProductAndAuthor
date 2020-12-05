
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import 'semantic-ui-css/semantic.min.css';

var isbn = window.location.href.split('/').reverse()[0];
console.log("BROWSER URL IS:", isbn);

ReactDOM.render(
  <App isbn13={isbn}/>,
  document.getElementById('product-details'));



