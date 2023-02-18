import React from 'react';
import './Date_Time.css';

function Date_Time(){

    var moment = require('moment'); // require

    // eslint-disable-next-line no-lone-blocks
    const date = moment(); {/* using moment module */}
    const currentDate = date.format('ll');

    // time-format
    const today = new Date();
    const currentTime = today.getHours() + ":" + today.getMinutes();

    return(
        <h1 className="values">
        <p className="time-content">{currentTime}</p>
        <p className="date-content">{currentDate}</p>
      </h1>
    )
}

export default Date_Time