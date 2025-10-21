import React from 'react';
import {Clock} from './time/Clock';
import { Clock_alive } from './time2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='title justify-content-center d-flex'>
        <h1>Текущее время</h1>
      </div>
      {/*Задание 1.Часть 2*/}
      <Clock_alive />

   
      {/*Задание 1.Часть 1*/}
      <div className='title justify-content-center d-flex'>
        <h1>Статические часы</h1>
      </div>
      <Clock time = {{ hours: 1, minutes: 20, seconds: 15 }}/>
      <Clock time = {{ hours: 12, minutes: 3, seconds: 29 }}/>
      <Clock time = {{ hours: 6, minutes: 26, seconds: 5 }}/>
      
    </div>
  );
}

export default App;
