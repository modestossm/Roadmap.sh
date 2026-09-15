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
            // React always cleans up the previous render’s Effect before the next render’s Effect. 
            // This is why even if you type into the input fast, there is at most one timeout scheduled at a time
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
        {/* Notice how unmounting cleans up the last render’s Effect. Here, it clears the last timeout before it has a chance to fire */}
        {show ? 'Unmount' : 'Mount'} the component
      </button>
      {show && <br />}
      {show && <Playground />}
    </div>
  );
}