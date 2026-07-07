import React from "react";
import Heading from "./header";
import Footer from "./footer";
import creatNote from "./mapping";
import notes from "../notes";

function App() {
  return (
    <div>
      <Heading />
      {notes.map(creatNote)}
      <Footer />
    </div>
  );
}

export default App;