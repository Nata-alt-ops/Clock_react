import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Clock } from "../time/Clock";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Clock.scss';

export const Clock_alive = () =>{
    const format_time = (num:any) => String(num).padStart(2, '0');
    const[time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const time_update = () =>{
            const time_now = new Date();
            setTime({
                hours: time_now.getHours(),
                minutes: time_now.getMinutes(),
                seconds: time_now.getSeconds(),
            });
        };

        time_update();

        const time_interval = setInterval(time_update, 1000)

        return () => clearInterval(time_interval);
    }, []);

   /*return <Clock time={time} />*/

   return(
    <div className="time">
        <div className="card">
            <div className="time-block">
                <div className="time-number">{format_time(time.hours)}</div>
                <div className="time-label">Часы</div>
            </div>
            <p>:</p>
            
            
            <div className="time-block">
                <div className="time-number">{format_time(time.minutes)}</div>
                <div className="time-label">Минуты</div>
            </div>
            <p>:</p>
            <div className="time-block">
                <div className="time-number">{format_time(time.seconds)}</div>
                <div className="time-label">Секунды</div>
            </div>
        </div>
    </div>
   )
}