import React, { useState } from 'react';
import Clock from './Clock';

function getCurrentTime() {
    const currentTime = new Date();
    return {
        h: currentTime.getHours() % 12,
        m: currentTime.getMinutes(),
        s: currentTime.getSeconds()
    }
}

export default () => {
    const [time, setTime ] = useState(getCurrentTime());
    setInterval(() => setTime(getCurrentTime()), 1000);
    return (<Clock {...time} />);
}