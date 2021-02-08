import React, { useRef, useEffect } from 'react';
import PropType from 'prop-types';

import CoreClock from './ClockCore';
import Grath from './Grath';

const Clock = ({ h, m, s, pathImg }) => {
    const canv = useRef(null);
    useEffect(() => {
        const ctx = canv.current.getContext('2d');
        const grath = new Grath(ctx);
        var img = new Image();
        img.src = pathImg;
        img.onload = () => {
            const cp = ctx.createPattern(img, 'no-repeat');
            const clock = new CoreClock(grath, cp);
            clock.setArrows([
                {len: 70, speed: 12, value: h, color: 'blue'},
                {len: 90, speed: 60, value: m, color: 'blue'},
                {len: 105, speed: 60, value: s, color: 'red'}
            ]);
            clock.draw();
        }
    }, [h, m, s, pathImg]);
    return (<div>
        <canvas ref={ canv }></canvas>
    </div>)
}


Clock.propTypes = {
    /** Часы */
    h: PropType.number.isRequired,
    /** Минуты */
    m: PropType.number.isRequired,
    /** Секунды */
    s: PropType.number.isRequired,
    /** Ссылка на фоновое изображение */
    pathImg: PropType.string
}

Clock.defaultProps = {
    h: 0,
    m: 0,
    s: 0,
    pathImg: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkLQsgr2zn2QqOnyhxTkcuqaaKTM5SRkZCeTgDn6uOyic&fn=sqr_288'
}

export default Clock;