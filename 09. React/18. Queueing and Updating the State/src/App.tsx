import Queue from './Queueing';
import UpdateObject from './UpdatingObjects';
import UpdateArray from './UpdatingArrays';

export default function App() {
  return (
    <>
      <Queue />
      <UpdateArray />
      {/* <UpdateObject /> */}
    </>
  );
}

// Naming conventions:
// setEnabled(e => !e);
// setLastName(ln => ln.reverse());
// setFriendCount(fc => fc * 2);