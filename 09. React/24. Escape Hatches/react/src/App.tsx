import Counter from "./components/Referencing Values with Refs I";
import Stopwatch from "./components/Referencing Values with Refs II";
import Form from "./components/Manipulating the DOM with Refs I";
import Cats from "./components/Manipulating the DOM with Refs II";
import TodoList from "./components/Flushing state";
import AppVideoPlayer from "./components/useEffects";
import AppPlayground from "./components/useEffect firing twice in dev";
import Time from "./components/useMemo";

function App() {
  return (
    <>
      <Counter />
      <Stopwatch />
      <Form />
      <Cats />
      <AppVideoPlayer />
      <AppPlayground />
      <TodoList />
      <Time />
    </>
  );
}

export default App;
