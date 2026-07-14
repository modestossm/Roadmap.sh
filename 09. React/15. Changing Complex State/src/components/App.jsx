import React from "react";

function App() {
  const [fullName, setfullName] = React.useState({fName: "", lName: "", email: ""});

  function handleChange(e) {
    const {value, name} = e.target;

    setfullName(prevValue => {
      if(name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        }
      } else if(name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        }
      } else if(name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
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

      <p>{fullName.email}</p>

      <br />

      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange}/>
        <input name="lName" placeholder="Last Name" onChange={handleChange}/>
        <input name="email" placeholder="E-mail" onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
