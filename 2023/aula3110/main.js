/*alert('Conteudo');
const variavel = 10;

function teste() {
  console.log('Executado');
}

const executar = () => {
  console.log(this);
  //code1
  //code2
};
teste();
*/
//window.alert('Meu alerta');
/*const title = document.querySelector('.js-title');
console.log(title);*/
//title.textContent = "Titulo de minha página";

/*function executar() {
  console.log('Executato');
}
document.addEventListener('click', executar);*/

/*document.addEventListener('click', () => {
  console.count();
});*/

document.addEventListener('DOMContentLoaded', () => {
  const paragraph = document.querySelector('.js.paragraph');

  paragraph.addEventListener('mouseover', () => {
    console.log('Mouseover');
  });

  const button = document.querySelector('.js-button');

  button.addEventListener('click', () => {
    const body = document.querySelector('body');
    const result = body.classlist.contains('dark');
    console.log(result);
  });
});
