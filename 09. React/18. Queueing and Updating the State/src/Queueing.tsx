import { useState } from "react";

export default function Queue() {
    const [number, setNumber] = useState(0);

    return (
        <div className='div-main'>
            <h1>{number}</h1>
            <button className='btn' onClick={() => {
                setNumber(number + 100); 
                setNumber(number + 99); //equivale a: setNumber(n => number + 99), por isso o valor anterior é substituído (ao invés de somado, como se esperaria)
                setNumber(number + 1); //apenas o ultimo valor da fila será contado
                setNumber(n => n + 1); //a função pode atulizar o mesmo state da variavel multiplas vezes antes do re-render, por isso soma-se ao valor anterior
            }}>+2</button>
        </div>
    );
}

