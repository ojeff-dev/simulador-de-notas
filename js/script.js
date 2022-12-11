// Funções que oculta/exibe o campo opcional

const ligaDiv = () => {
  const campoOpcional = document.getElementById('campoOpcional');
  const valorInputRadioSim = document.getElementById('respostaPositiva').value;

  if (valorInputRadioSim === 'sim') { campoOpcional.style.display = 'block'; }
};
const desligaDiv = () => {
  const campoOpcional = document.getElementById('campoOpcional');
  const valorInputRadioNao = document.getElementById('respostaNegativa').value;

  if (valorInputRadioNao === 'nao') { campoOpcional.style.display = 'none'; }
};

// Instruções para o click do botão 'calcular'

function calculaNota() {
    /* Recebe valores dos inputs da AVALIAÇÃO 1 */
  const trab1 = parseFloat(document.getElementById("trabalho1").value.replace(',', '.'));
  const trab2 = parseFloat(document.getElementById("trabalho2").value.replace(',', '.'));
  const avaliacao1 = (trab1 + trab2) / 2; // Cálculo da Avaliação 1

  /* Recebe valores dos inputs da AVALIAÇÃO 2 e 3 */
  const avaliacao2 = parseFloat(document.getElementById("prova1").value.replace(',', '.'));
  const avaliacao3 = parseFloat(document.getElementById("prova2").value.replace(',', '.'));

  const statusNota = document.getElementById("statusNota"); // Recebe ID statusNota

  let notaFinal = 0; // Nota final começando em 0.

  /* Verifica se a nota da Avaliação 3 é maior que a nota da Avaliação 2. */
  if (avaliacao3 === 10 || avaliacao3 > avaliacao2) {
      avaliacao2 = avaliacao3;
  }
  // Instruções realizadas caso a Avaliação 1 NÃO tenha sido ZERADA.
  if (avaliacao1 > 0){

      notaFinal = (avaliacao1 * 0.4) + (avaliacao2 * 0.6);
      if (notaFinal >= 6) {
          document.getElementById("resultado").innerHTML = "Sua nota: " + notaFinal.toFixed(2);
          resultado.style.color = "green";
          statusNota.style.color = "green";
          statusNota.style.backgroundColor = '#C0C0C0';
          statusNota.innerHTML = "Aprovado!"
      
      } else {
          document.getElementById("resultado").innerHTML = "Sua nota: " + notaFinal.toFixed(2);
          resultado.style.color = "red";
          statusNota.style.color = "red";
          statusNota.style.backgroundColor = '#C0C0C0';
          statusNota.innerHTML = "Reprovado! Sua nota é menor que 6."
      }
      // Instruções realizadas caso a Avaliação 1 tenha sido ZERADA.
  } else if (avaliacao1 === 0){
      notaFinal = (avaliacao2 * 0.6) / 2;
      document.getElementById("resultado").innerHTML = "Sua nota: " + notaFinal.toFixed(2);
          statusNota.style.color = "red";
          statusNota.style.backgroundColor = '#C0C0C0';
          statusNota.innerHTML = "Reprovado! Você ZEROU a Avaliação 1."
  } else {
      resultado.style.color = "red";
      document.getElementById("resultado").innerHTML = "Preencha os campos corretamente!";
  }
}