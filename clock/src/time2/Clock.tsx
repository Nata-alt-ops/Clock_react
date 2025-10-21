import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Clock } from "../time/Clock";

export const Clock_alive = () =>{
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

   return <Clock time={time} />
}