import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Clock.scss';

export const Clock = ({ time }: any) =>{
    const{ hours, minutes, seconds} = time;
    const format_time = (num:any) => String(num).padStart(2, '0');

    return(
        <div className="time d-flex justify-content-start align-items-center flex-colum">
            <div className="clock d-flex justify-content-center align-items-center">
                {format_time(hours)}:{format_time(minutes)}:{format_time(seconds)}  
            </div>
    </div>
    )
}

