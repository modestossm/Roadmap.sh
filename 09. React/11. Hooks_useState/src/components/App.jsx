import React from "react";

function App() {
  const [time, changeTime] = React.useState(null);
  
  function timeNow() {
    const timed = new Date().toLocaleTimeString();
    console.log(time, timed);
    
    changeTime(timed);
  }

  return (
    <div className="container">
      <h1>{time ? time : "TIME"}</h1>
      <button onClick={timeNow}>Get Time</button>
    </div>
  );
}

export default App;
