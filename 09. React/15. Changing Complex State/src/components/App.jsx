import React from "react";

function App() {
  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");

  function changeFName(e) {
    setfName(e.target.value);
  }

  function changeLName(e) {
    setlName(e.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={changeFName}/>
        <input name="lName" placeholder="Last Name" onChange={changeLName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
