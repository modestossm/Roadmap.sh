import Queue from './Queueing';
// import UpdateObject from './UpdatingObjects';
import UpdateArray from './UpdatingArrays';
import RemoveFromArray from './RemovingFromArray';

export default function App() {
  return (
    <>
      <Queue />
      <UpdateArray />
      <RemoveFromArray />
      {/* <UpdateObject /> */}
    </>
  );
}

// Naming conventions:
// setEnabled(e => !e);
// setLastName(ln => ln.reverse());
// setFriendCount(fc => fc * 2);