import { useMemo, useState } from "react";

type Produto = { id: number; nome: string };

function ListaFiltrada({ produtos }: { produtos: Produto[] }) {
  const [busca, setBusca] = useState("");
  const [tema, setTema] = useState("claro");

  const filtrados = useMemo(() => {
    console.log("filtrando..."); // só roda quando 'busca' ou 'produtos' mudam
    return produtos.filter((p) => p.nome.includes(busca));
  }, [produtos, busca]);

  return (
    <div className={tema}>
      <input value={busca} onChange={(e) => setBusca(e.target.value)} />
      <ul>
        {filtrados.map((p) => <li key={p.id}>{p.nome}</li>)}
      </ul>
    </div>
  );
}

// Trocar o tema causa um re-render do componente, mas não refaz o .filter(), porque busca e produtos não mudaram.
// Sem o useMemo, o filtro rodaria de novo a cada render, mesmo quando irrelevante.