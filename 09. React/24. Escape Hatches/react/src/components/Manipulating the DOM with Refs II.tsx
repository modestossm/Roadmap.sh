import { useRef } from "react";

export default function Cats() {
    const firstCatRef = useRef<HTMLImageElement | null>(null);
    const secondCatRef = useRef<HTMLImageElement | null>(null);
    const thirdCatRef = useRef<HTMLImageElement | null>(null);

    function handleScrollToFirstCat() {
        firstCatRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function handleScrollToSecondCat() {
        secondCatRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function handleScrollToThirdCat() {
        thirdCatRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
         <div className="w-200">
            <nav className="mt-10 mx-20 flex gap-4 justify-center">
                <button onClick={handleScrollToFirstCat} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"> Cat 1 </button>

                <button onClick={handleScrollToSecondCat} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"> Cat 2 </button>

                <button onClick={handleScrollToThirdCat} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"> Cat 3 </button>
            </nav>
            
            <div className="mt-4 mx-20 overflow-x-auto scroll-smooth">
                <ul className="flex gap-6 list-none">
                    <li className="shrink-0">
                        <img src="https://placecats.com/neo/300/200" alt="Neo" ref={firstCatRef} className="w-64 h-44 rounded-lg shadow-md"/>
                    </li>

                    <li className="shrink-0">
                        <img src="https://placecats.com/millie/200/200" alt="Millie" ref={secondCatRef} className="w-64 h-44 rounded-lg shadow-md"/>
                    </li>

                    <li className="shrink-0">
                        <img src="https://placecats.com/bella/199/200" alt="Bella" ref={thirdCatRef} className="w-64 h-44 rounded-lg shadow-md"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}