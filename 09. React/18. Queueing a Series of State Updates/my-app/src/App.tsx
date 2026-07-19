import { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className='div-main'>
      <h1>{number}</h1>
      <button className='btn' onClick={() => {
        setNumber(number + 100);
        setNumber(number + 99);
        setNumber(number + 1); //apenas o ultimo valor da fila será levado em conta
        setNumber(n => n + 1); //a função atuliza o mesmo state da variavel multiplas vezes antes do re-render, por isso soma-se ao valor anterior
      }}>+2</button>
    </div>
  )
}