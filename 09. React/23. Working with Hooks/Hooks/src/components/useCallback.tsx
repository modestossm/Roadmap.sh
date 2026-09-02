import React, { useState, useCallback } from "react";

function Pai() {
  const [contador, setContador] = useState<number>(0);
  const [outroEstado, setOutroEstado] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setContador((c) => c + 1);
  }, []); // sem dependências: reaproveita sempre a mesma função

  return (
    <div>
      <button onClick={() => setOutroEstado(!outroEstado)}>Alternar</button>
      <BotaoFilho onClick={handleClick} />
    </div>
  );
}

interface BotaoFilhoProps {
  onClick: () => void;
}

const BotaoFilho = React.memo(({ onClick }: BotaoFilhoProps) => {
  console.log("BotaoFilho renderizou");
  return <button onClick={onClick}>Incrementar</button>;
});

export default Pai;

// Sem useCallback, clicar em "Alternar" faria handleClick ser recriada, e BotaoFilho re-renderizaria à toa mesmo sendo React.memo.
// Com useCallback, a referência fica estável e o filho não re-renderiza.