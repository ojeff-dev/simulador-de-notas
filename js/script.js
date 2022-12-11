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