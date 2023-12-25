import React, { useEffect, useState } from "react";
import cssStyle from './Result.module.scss';
import moment from "moment";
import { Danger } from "../Buttons";

const LiveResult = () => {
    const targetDateTime = moment('2023-12-25T21:50:01');
    const calculateTimeRemaining = () => {
        const now = moment();
        const duration = moment.duration(targetDateTime.diff(now));
        return {
            hours: duration.hours(),
            minutes: duration.minutes(),
        };
    }
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    const [currentTime, setCurrentTime] = useState(moment());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment());
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.format('MMM D, YYYY hh:mm:ss A');
    return (
        <div className={`${cssStyle.LiveResultSection} card px-4 py-3 bg-dark mt-1`}>
            <span className={`${cssStyle.Title} text-warning`}>सबसे पहले सबसे तेज़ रिजल्ट वाली सट्टा साइट</span>
            <span className={`${cssStyle.Time} text-light`}>{formattedTime}</span>
            <div className={`${cssStyle.GameSection}`}>
                <span className={`${cssStyle.Game} text-light`}>FARIDABAD</span>
                <span className={`${cssStyle.Result} text-warning`}>72</span>
                <button className={`${cssStyle.Btn} btn btn-danger`}>FARIDABAD Chart 2023</button>
            </div>
            <div className={`${cssStyle.GameSection}`}>
                <span className={`${cssStyle.Game} text-light`}>DELHI DAY</span>
                <span className={`${cssStyle.Late} text-danger`}>{`Result is late by Company Wait: ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes`}</span>
                <button className={`${cssStyle.Btn} btn btn-danger`}>DELHI DAY Chart 2023</button>
            </div>
            <div className={`${cssStyle.GameSection}`}>
                <span className={`${cssStyle.Game} text-light`}>NEW FARIDABAD</span>
                <span className={`${cssStyle.Waiting}`}>{`Remaining Time For Result Update: ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes`}</span>
                <button className={`${cssStyle.Btn} btn btn-danger`}>NEW FARIDABAD Chart 2023</button>
            </div>
            <div className={`${cssStyle.BtnLast}`}>
                <button className={`btn btn-danger`}>ONLINE सट्टा खेलने के लिए यहाँ CLICK करे📱</button>
            </div>
        </div>
    );
};
export default LiveResult;
