// import _ from 'lodash'
// import './style.css'
// import Bernie from './assets/bernieSanders.jpg'
// import Data from './assets/democratic-candidate-totals-2019-08-03T17_37_29.csv'
// // import xml from "./data.xml"
// import printMe from './print.js'

// const component = () => {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');
  
//   element.innerHTML = _.join(['Democratic', 'Presidential', 'Candidates'], ' ');
//   element.classList.add('title');

//   btn.innerHTML = 'I run the function in print.js!';
//   btn.onclick = printMe;

//   const bernieImg = new Image();
//   bernieImg.src = Bernie;

//   element.appendChild(document.createElement('br'));
//   element.appendChild(bernieImg);
//   element.appendChild(document.createElement('br'));
//   element.appendChild(btn);

//   console.log(Data);

//   return element;

// }

// document.body.appendChild(component());

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

module.hot.accept();