import React from 'react';
import CelsiusTemperature from './CelsiusTemperature';
import { useState } from 'react';
import './Switches.css';

function Switches(){

     // Implementing Toggle-Switch from react components

    // new switch code-1
    const [isOn1, setIsOn1] = useState(false);

    const handleToggle1 = () => {
      setIsOn1(!isOn1);
    };

    // new switch code-2
    const [isOn2, setIsOn2] = useState(false);

    const handleToggle2 = () => {
      setIsOn2(!isOn2);
    };

    // new switch code-3
    const [isOn3, setIsOn3] = useState(false);

    const handleToggle3 = () => {
      setIsOn3(!isOn3);
    };

    // new switch code-4
    const [isOn4, setIsOn4] = useState(false);

    const handleToggle4 = () => {
      setIsOn4(!isOn4);
    };

    // new switch code-5
    const [isOn5, setIsOn5] = useState(false);

    const handleToggle5 = () => {
      setIsOn5(!isOn5);
    };

    return(
      <>
         <div className="rectangle-1"></div>
        <p className="light-1">Light 1</p>
        <div className="switch-1">
        <div className={`toggle-switch ${isOn1 ? "toggle-switch-on" : ""}`} onClick={handleToggle1}>
            <div className="toggle-switch-knob" />
          </div>
        </div>

        <div className="rectangle-2"></div>
        <p className="light-2">Light 2</p>
        <div className="switch-2">
          <div className={`toggle-switch ${isOn2 ? "toggle-switch-on" : ""}`} onClick={handleToggle2}>
            <div className="toggle-switch-knob" />
          </div>
        </div>

        <div className="rectangle-3"></div>
        <p className="tv">TV</p>
        <div className="switch-3">
        <div className={`toggle-switch ${isOn3 ? "toggle-switch-on" : ""}`} onClick={handleToggle3}>
            <div className="toggle-switch-knob" />
          </div>
        </div>

        <div className="rectangle-4"></div>
        <p className="ac">Air Conditioner</p>

          <div className='col-xl-1'>
           <CelsiusTemperature />
          </div>

        <div className="switch-4">
        <div className={`toggle-switch ${isOn4 ? "toggle-switch-on" : ""}`} onClick={handleToggle4}>
            <div className="toggle-switch-knob" />
          </div>
        </div>

        <div className="rectangle-5"></div>
        <p className="fan">Fan</p>
        <div className="switch-5">
        <div className={`toggle-switch ${isOn5 ? "toggle-switch-on" : ""}`} onClick={handleToggle5}>
            <div className="toggle-switch-knob" />
          </div>
        </div>
      </>
    )
}

export default Switches;