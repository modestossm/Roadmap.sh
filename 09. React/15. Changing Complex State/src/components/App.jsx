import React from "react";

function App() {
  const [fullName, setfullName] = React.useState({fName: "", lName: ""});

  function handleChangeName(e) {
    const newValue = e.target.value;
    const inputName = e.target.name;

    setfullName(prevValue => {
      if(inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        }
      } else if(inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        }
      }
    });
  }

  // const [fName, setfName] = React.useState("");
  // const [lName, setlName] = React.useState("");

  // function changeFName(e) {
  //   setfName(e.target.value);
  // }

  // function changeLName(e) {
  //   setlName(e.target.value);
  // }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChangeName}/>
        <input name="lName" placeholder="Last Name" onChange={handleChangeName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
