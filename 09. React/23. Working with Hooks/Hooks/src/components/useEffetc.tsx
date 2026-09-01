import { useEffect } from "react";

useEffect(() => {
    // Permite executar efeitos colaterais (side effects) em componentes funcionais, interagindo com o "mundo fora" do React  
    const timer = setInterval(() => {
        console.log('tick');
    }, 1000);

    return () => clearInterval(timer); // limpeza
    // Isso evita vazamentos de memória (memory leaks), como timers ou listeners que continuam ativos depois que o componente já saiu da tela.
}, []);