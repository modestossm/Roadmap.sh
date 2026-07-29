import Declarative from "./components/DeclarativeProgramming";
import StateStructure from "./components/StateStructure";
import Accordion from "./components/SharingState";
import Counter from "./components/PreservingAndResettingState";

export default function App() {
  return (
    <>
      <Declarative />
      <br />
      <StateStructure />
      <br />
      <Accordion />
      <br />
      <Counter />
    </>
  );
}