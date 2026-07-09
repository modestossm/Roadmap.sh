import React from "react";

function App() {
  let [isDone, change] = React.useState(false);

  function strike() {
    change(true)
  }

  function unStrike() {
    change(false)
  }

  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
