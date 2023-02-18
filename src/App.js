import './App.css';
import Date_Time from './components/Date_Time';
import Switches from './components/Switches';
import Weather from './components/Weather';

function App(props) {

  return (
   <>
      <div className="top-container"> {/* current date & time + house name + places + temp*/}
        <div className="background-content"></div>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <Date_Time />

        <Weather />
        <div className="rectangle-box"></div>
        <p className="name">Prasanna's House</p> 
        <div className="line-1"></div>
        <div className="line-2"></div>

        <div className="places">
          <p className="places-1">LIVING ROOM</p>
          <p className="places-2">KITCHEN</p>
          <p className="places-3">BEDROOM</p>
        </div>
      </div>

      <div className="middle-container"> {/* current weather and temperature */}
        <h1 className="heading">
          <p className="weather">Today's Weather</p>
          <p className="temp">Room Temperature</p>
        </h1>
      </div>

      <hr className="division"></hr> {/* break line */}

      <div className="bottom-container"> {/* switch-toggle and appliances code */}
        <Switches />
      </div>
   </>
  );
}

export default App;