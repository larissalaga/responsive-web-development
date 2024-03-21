import { useEffect, useState } from 'react';

import './Exemplo01.css';
const Exemplo01 = () => {
  const [janela, setJanela] = useState({
    largura: window.innerWidth,
    altura: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setJanela({
        largura: window.innerWidth,
        altura: window.innerHeight,
      });
    };
    //Adicionar o evento de redimensionamento da janela no escopo do componente
    window.addEventListener('resize', handleResize);
    return () => {
      //remove o evento quando o componente é desmontado
      window.removeEventListener('resize', handleResize);
    };
  }, []); //sem segundo parametro, a funação sera executada toda vez que o valor das
  //dependencias mudar. Com ele vazio, so execura apenas uma vez, na montagem do componente

  return (
    <div>
      <>
        <h1>Exemplo01</h1>
        <p>
          <b>Largura</b>
          {janela.largura}px
        </p>
        <p>
          <b>Altura</b>
          {janela.altura}px
        </p>
      </>
    </div>
  );
};
export default Exemplo01;
