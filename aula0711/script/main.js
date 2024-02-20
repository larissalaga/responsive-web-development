document.addEventListener('DOMContentLoaded'),
  () => {
    const button = document.querySelector('.js-button');
    button.addEventListener('click', () => {
      const inputWeight = document.querySelector('#input-weight');
      const inputHeight = document.querySelector('#input-heigt');
      const message = document.querySelector('.message');

      const result = Numer(inputWeight.value) / (Number(inputHeight.value) ^ 2);
      const p = document.createElement('p');

      if (result < 17) {
        p.textContent = 'IMC ' + RESULT + '-' + 'Muito abaixo do peso';
      } else if (result >= 17 && result <= 18.49) {
        p.textContent = 'IMC ' + RESULT + '-' + 'Abaixo do peso';
      } else if (result >= 18.5 && result <= 24.99) {
        p.textContent = 'IMC ' + RESULT + '-' + 'Dentro do peso';
      } else if (result >= 25 && result <= 29.99) {
        p.textContent = 'IMC ' + RESULT + '-' + 'Acima do peso';
      } else if (result >= 30 && result <= 34.99) {
        p.textContent = 'IMC ' + RESULT + '-' + 'Obesidade I';
      } else if (result >= 35 && result <= 39.99) {
        p.textContent = 'IMC ' + RESULT + '-' + 'Obesidade II';
      } else {
        p.textContent = 'IMC ' + RESULT + '-' + 'Obesidade III - Mórbida';
      }
    });
  };
