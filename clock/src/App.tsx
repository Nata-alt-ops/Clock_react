import React from 'react';
import {Clock} from './time/Clock';
import {Clock_alive} from './time2';
import {Cats} from './cats/cat';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Часы с котиками</h1>
      </div>

     
      <div className="clock">
        <div className="time">
           {/* Задание 1. Часть 2 */}
          <h1>Текущее время</h1>
          <Clock_alive />
          {/* Задание 1. Часть 1 */}
          <h1>Статические часы</h1>
          <Clock time={{ hours: 1, minutes: 20, seconds: 15 }}/>
          <Clock time={{ hours: 12, minutes: 3, seconds: 29 }}/>
          <Clock time={{ hours: 6, minutes: 26, seconds: 5 }}/>
        </div>

        {/* Задание 2*/}
        <div className="photo_cats">
          <Cats />
        </div>
        
      </div>
    </div>
  );
}

export default App;