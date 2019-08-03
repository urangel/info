import _ from 'lodash'
import './style.css'
import Bernie from './bernieSanders.jpg'
import Data from './democratic-candidate-totals-2019-08-03T17_37_29.csv'
import xml from "./data.xml"

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Democratic', 'Presidential', 'Candidates'], ' ');
  element.classList.add('title');

  const bernieImg = new Image();
  bernieImg.src = Bernie;

  element.appendChild(document.createElement('br'));
  element.appendChild(bernieImg);

  console.log(xml);
  console.log(Data);

  return element;

}

document.body.appendChild(component());