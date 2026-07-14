import React from "react";

function App() {
  const [fullName, setfullName] = React.useState({fName: "", lName: ""});

  function handleChangeName(e) {
    const {value, name} = e.target;

    setfullName(prevValue => {
      if(name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if(name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
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
