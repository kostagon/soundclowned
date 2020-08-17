import React from 'react';

import happy_music from '../assets/svgs/happy_music.svg';
import happy_music_2 from '../assets/svgs/undraw_happy_music_g6wc.svg';
import nature from '../assets/svgs/nature.svg';
import nature_2 from '../assets/svgs/undraw_nature_m5ll.svg';
import astronaut from '../assets/svgs/astronaut.svg';
import relaunch_day from '../assets/svgs/undraw_relaunch_day_902d.svg';

const imgs = [astronaut, happy_music, happy_music_2, relaunch_day, nature, nature_2];

function SvgCmp() {
    const rndNum = (max) => {
        let rnd = Math.floor((Math.random(1, max)) * 10)
        if (rnd >= max) rnd = max;
        return rnd;
    }
    let rndIdx = rndNum(imgs.length - 1);
    let imgSrc = imgs[rndIdx]

    return (
        <div className="svg-container align-self-end justify-self-center">
            <img src={imgSrc} alt="for the horde" />
        </div>
    )
}

export default SvgCmp
