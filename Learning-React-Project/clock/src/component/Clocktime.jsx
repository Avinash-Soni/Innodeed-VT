import { useEffect, useState } from "react";

function ClockTime() {

  const [time, setTime]=useState(new Date());

useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(interval); // Clean up on unmount
}, []);

  return (
    <div>
      <p>Date: {time.toLocaleDateString()}</p>
      <p>Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default ClockTime;
