
import { useState, useEffect } from 'react';

function ClockDigital({ data }) {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 style=
        {{
          color: data,
          backgroundColor: '#000',
          width: "156px",
          padding: "10px",
          borderRadius: "10px"
        }}
      >{time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default ClockDigital;