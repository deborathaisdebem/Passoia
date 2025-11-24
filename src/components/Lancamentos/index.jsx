import { useState } from "react";

// Import das imagens
import roxo from "../../assets/roxo.png";
import vermelho from "../../assets/vermelho.png";
import marrom from "../../assets/marrom.png";
import salmao from "../../assets/salmao.png";

function Lancamentos() {
   // Estado que guarda a cor (imagem) atual
  // O valor inicial é a imagem "vermelho"
  const [cor, setCor] = useState(vermelho);
  
  return (
    <>
      <h1>Cor Favorita</h1>

      {/* A imagem exibida será sempre a do estado "cor" */}
      <img src={cor} alt="Batom" />

      {/* Cada botão altera o estado "cor", trocando a imagem exibida */}
      <button onClick={() => setCor(roxo)}>Roxo</button>
      <button onClick={() => setCor(vermelho)}>Vermelho</button>
      <button onClick={() => setCor(marrom)}>Marrom</button>
      <button onClick={() => setCor(salmao)}>Salmão</button>
    </>
  );
}

export default Lancamentos;