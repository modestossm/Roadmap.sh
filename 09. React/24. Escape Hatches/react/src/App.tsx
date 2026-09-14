import Counter from "./components/Referencing Values with Refs I";
import Stopwatch from "./components/Referencing Values with Refs II";
import Form from "./components/Manipulating the DOM with Refs I";
import Cats from "./components/Manipulating the DOM with Refs II";
import TodoList from "./components/Flushing state";
import AppVideoPlayer from "./components/useEffects";

function App() {
  return (
    <>
      <Counter />
      <Stopwatch />
      <Form />
      <Cats />
      <AppVideoPlayer />
      <TodoList />
    </>
  );
}

export default App;
