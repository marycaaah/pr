const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');
const resultMessagee = document.getElementById('resultMessagee');

function calculateAge() {
  const day = parseInt(document.getElementById('dayInput').value);
  const month = parseInt(document.getElementById('monthInput').value);
  const year = parseInt(document.getElementById('yearInput').value);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const ageInMilliseconds = today - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  if (isNaN(ageInYears)) {
    resultMessage.textContent = 'Por favor, insira uma data válida.';
  } else if (ageInYears >= 18) {
    resultMessage.textContent = 'Você é maior de idade!';
  } else {
    resultMessage.textContent = 'Você é menor de idade.';
  }

}
const nome = prompt("Digite seu nome");
document.getElementById("nome").innerHTML = nome;

checkButton.addEventListener('click', calculateAge);