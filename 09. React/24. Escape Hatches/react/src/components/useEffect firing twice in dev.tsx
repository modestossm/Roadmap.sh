import { useState, useEffect } from "react";

function Playground() {
    const [text, setText] = useState("a");

    useEffect(() => {
        function onTimeout() {
            console.log('⏰ ' + text);
        }

        console.log('🔵 Schedule "' + text + '" log');
        const timeoutId = setTimeout(onTimeout, 3000);

        return () => {
             console.log('🟡 Cancel "' + text + '" log');
            clearTimeout(timeoutId);
        }
    });

    return (
        <div className="ms-16 mt-2 px-4 py-2 ">
            <label>
                What to log:{" "}
                <input value={text} onChange={e => setText(e.target.value)} className="rounded border-2 border-cyan-900"/>
            </label>
        </div>
    );
}

export default function AppPlayground() {
  const [show, setShow] = useState(false);
  return (
    <div >
      <button onClick={() => setShow(!show)} className="ms-20 mt-20 px-4 py-2 rounded text-white bg-blue-500">
        {show ? 'Unmount' : 'Mount'} the component
      </button>
      {show && <br />}
      {show && <Playground />}
    </div>
  );
}