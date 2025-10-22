import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Clock.scss';

export const Clock = ({ time }: any) =>{
    const{ hours, minutes, seconds} = time;
    const format_time = (num:any) => String(num).padStart(2, '0');
    return(
        <div className="time-static d-flex justify-content-start align-items-center flex-colum">
            <div className="card">
                <div className="time-block-static">
                    <div className="time-number-static">
                        <div className="time_text-static">
                        {format_time(time.hours)}</div></div>
                    <div className="time-label-static">Часы</div>
                </div>
                <p>:</p>
                <div className="time-block-static">
                    <div className="time-number-static">
                        <div className="time_text-static">
                            {format_time(time.minutes)}</div></div>
                    <div className="time-label-static">Минуты</div>
                </div>
                <p>:</p>
                <div className="time-block-static">
                    <div className="time-number-static">
                        <div className="time_text-static">
                            {format_time(time.seconds)}
                            </div></div>
                    <div className="time-label-static">Секунды</div>
                </div>
            </div>
        </div>
    )
}

