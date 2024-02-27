import { useState } from 'react';

function Exemplo01() {
  const [nome, setNome] = useState('');

  return (
    <>
      <h1>Exemplo 01</h1>
      <p>
        <b>Aluno: {nome}</b>
      </p>
      <p>
        <button onClick={() => setNome('João')}>Clique Aqui</button>
      </p>
    </>
  );
}
export default Exemplo01;
