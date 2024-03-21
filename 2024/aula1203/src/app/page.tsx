interface TorreProps {
  altura: number;
  cor: string;
  janelas: boolean;
}
const Torre: React.FC<TorreProps> = () => {
  <>
    <h1>Meu castelo</h1>
    <p>
      <b>Altura: </b>
      {props.altura}metros
    </p>
    <p>
      <b>Cor: </b>
      {props.cor}
    </p>
    <p>
      <b>Possui janelas? </b>
      {props.janelas ? 'Sim' : 'Não'}
    </p>
  </>;
};
export default Torre;
