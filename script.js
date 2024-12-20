const taxasCapim = {
    1: 3.15, 2: 4.39, 3: 4.96, 4: 5.54, 5: 6.12, 6: 6.70, 7: 7.48, 8: 8.06, 9: 8.64, 
    10: 9.22, 11: 9.35, 12: 10.14, 13: 11.13, 14: 11.90, 15: 12.67, 16: 13.44, 17: 14.21, 
    18: 14.98, 19: 15.75, 20: 16.52, 21: 17.29, 22: 18.00, 23: 18.50
};

const vendasMesInput = document.getElementById('vendasMes');
const numParcelasRange = document.getElementById('numParcelas');
const numParcelasLabel = document.getElementById('numParcelasLabel');
const parcelaAtualLabel = document.getElementById('parcelasAtualLabel');
const taxaAtualInput = document.getElementById('taxaAtual');
const btnCalcular = document.getElementById('btnCalcular');
const alerta = document.getElementById('alerta');
const resultBlock = document.getElementById('result-block');
const concTaxaEl = document.getElementById("concTaxa");
const concTotalEl = document.getElementById("concTotal");
const concParcelaEl = document.getElementById("concParcela");
const capimTaxaEl = document.getElementById("capimTaxa");
const capimTotalEl = document.getElementById("capimTotal");
const capimParcelaEl = document.getElementById("capimParcela");
const economiaEl = document.getElementById("economia");

const btnAvancadas = document.getElementById('btnAvancadas');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const btnFecharSidebar = document.getElementById('btnFecharSidebar');
const taxasList = document.getElementById('taxasList');
const contatoInput = document.getElementById('contato');
const btnEnviarProposta = document.getElementById('btnEnviarProposta');
const btnEnviarPropostaTopo = document.getElementById('btnEnviarPropostaTopo');

vendasMesInput.addEventListener('input', formatarMoeda);
vendasMesInput.addEventListener('blur', () => {
    if (vendasMesInput.value.trim() === '') {
        vendasMesInput.value = 'R$ 0,00';
    }
    formatarMoeda();
});

taxaAtualInput.addEventListener('input', () => {
    formatarTaxaInputPercentual(taxaAtualInput);
});

numParcelasRange.addEventListener('input', () => {
    const qtd = parseInt(numParcelasRange.value, 10);
    atualizarLabelParcelas(qtd);
});

btnCalcular.addEventListener('click', calcular);
btnAvancadas.addEventListener('click', abrirSidebar);
overlay.addEventListener('click', fecharSidebar);
btnFecharSidebar.addEventListener('click', fecharSidebar);
btnEnviarProposta.addEventListener('click', enviarProposta);
btnEnviarPropostaTopo.addEventListener('click', enviarProposta);

function formatarMoeda() {
    let valor = vendasMesInput.value.replace(/[^\d]/g, '');
    if (valor === '') {
        vendasMesInput.value = '';
        return;
    }
    while (valor.length < 3) {
        valor = '0' + valor;
    }
    const inteiros = valor.slice(0, -2);
    const decimais = valor.slice(-2);
    const inteirosFormatados = inteiros.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    vendasMesInput.value = 'R$ ' + inteirosFormatados + ',' + decimais;
}

// Formata a taxa com '%' no final
function formatarTaxaInputPercentual(input) {
    let valor = input.value.replace(/[^\d]/g, '');
    if (valor === '') {
        input.value = '';
        return;
    }
    while (valor.length < 3) {
        valor = '0' + valor;
    }
    const parteInteira = parseInt(valor.slice(0, -2), 10);
    const parteDecimal = valor.slice(-2);
    input.value = parteInteira + ',' + parteDecimal + '%';
}

function atualizarLabelParcelas(value) {
    numParcelasLabel.textContent = value + 'x';
    parcelaAtualLabel.textContent = value + 'x';
}

function converterValorMoedaParaNumero(str) {
    const valorStr = str.replace(/[^\d]/g, '');
    if (valorStr === '') return 0;
    return parseFloat(valorStr.slice(0, -2) + '.' + valorStr.slice(-2));
}

function converterTaxaParaNumero(str) {
    if (!str || str === '') return 0;
    // Remove %
    const semPorcentagem = str.replace('%', '');
    const limpa = semPorcentagem.replace(',', '.').replace(/[^\d.]/g, '');
    return parseFloat(limpa) || 0;
}

function formatarNumeroComPontos(num) {
    return num.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function calcular() {
    const valor = converterValorMoedaParaNumero(vendasMesInput.value);
    const parcelas = parseInt(numParcelasRange.value);
    const taxaConcorrencia = converterTaxaParaNumero(taxaAtualInput.value);

    if (isNaN(valor) || valor <= 0) {
        alerta.innerHTML = 'Preencha o valor de vendas no mês corretamente.';
        resultBlock.style.display = 'none';
        return;
    }

    if (isNaN(taxaConcorrencia) || taxaConcorrencia === 0) {
        alerta.innerHTML = 'Defina a taxa da concorrência para ' + parcelas + 'x (não pode ficar em 0,00%).';
        resultBlock.style.display = 'none';
        return;
    }

    alerta.innerHTML = '';
    resultBlock.style.display = 'block';

    const valorFinalConc = valor + (valor * (taxaConcorrencia / 100));
    const parcelaConc = valorFinalConc / parcelas;

    const taxaCapimEscolhida = taxasCapim[parcelas] || 0;
    const valorFinalCapim = valor + (valor * (taxaCapimEscolhida / 100));
    const parcelaCapim = valorFinalCapim / parcelas;

    concTaxaEl.innerText = taxaConcorrencia.toFixed(2) + '%';
    concTotalEl.innerText = 'R$ ' + formatarNumeroComPontos(valorFinalConc);
    concParcelaEl.innerText = 'R$ ' + formatarNumeroComPontos(parcelaConc);

    capimTaxaEl.innerText = taxaCapimEscolhida.toFixed(2) + '%';
    capimTotalEl.innerText = 'R$ ' + formatarNumeroComPontos(valorFinalCapim);
    capimParcelaEl.innerText = 'R$ ' + formatarNumeroComPontos(parcelaCapim);

    const economiaValor = valorFinalConc - valorFinalCapim;
    let economiaTexto = '';
    if (economiaValor > 0) {
        economiaTexto = 'Você economiza: R$ ' + formatarNumeroComPontos(economiaValor) + ' optando pela Capim!';
    } else if (economiaValor < 0) {
        economiaTexto = 'Nesta condição, a Capim sai mais cara. Entre em contato para negociar.';
    } else {
        economiaTexto = 'Os custos são iguais. Entre em contato para melhores condições.';
    }

    economiaEl.innerText = economiaTexto;
}

function criarLinhasTaxasAvancadas() {
    taxasList.innerHTML = '';
    for (let i = 1; i <= 23; i++) {
        const row = document.createElement('div');
        row.className = 'taxa-row';

        const label = document.createElement('div');
        label.className = 'taxa-row-label';
        label.innerText = i + 'x';

        const inputsContainer = document.createElement('div');
        inputsContainer.className = 'taxa-row-inputs';

        const inputTxt = document.createElement('input');
        inputTxt.type = 'text';
        inputTxt.className = 'taxa-input';
        inputTxt.placeholder = '0,00';
        inputTxt.dataset.parcela = i;

        const range = document.createElement('input');
        range.type = 'range';
        range.min = '0';
        range.max = '30';
        range.step = '0.01';
        range.value = '0';
        range.className = 'taxa-slider';
        range.dataset.parcela = i;

        inputTxt.addEventListener('input', () => {
            let valor = inputTxt.value.replace(/[^\d]/g, '');
            if (valor === '') {
                inputTxt.value = '';
                return;
            }
            while (valor.length < 3) {
                valor = '0' + valor;
            }
            const parteInteira = parseInt(valor.slice(0, -2), 10);
            const parteDecimal = valor.slice(-2);
            inputTxt.value = parteInteira + ',' + parteDecimal;
            const valorNumero = converterTaxaParaNumero(inputTxt.value + '%');
            range.value = valorNumero.toFixed(2);
        });

        range.addEventListener('input', () => {
            const valor = parseFloat(range.value);
            const inteiro = Math.floor(valor);
            const decimais = Math.round((valor - inteiro) * 100);
            const valorStr = inteiro + ',' + (decimais < 10 ? '0' + decimais : decimais);
            inputTxt.value = valorStr;
        });

        inputsContainer.appendChild(inputTxt);
        inputsContainer.appendChild(range);

        row.appendChild(label);
        row.appendChild(inputsContainer);
        taxasList.appendChild(row);
    }
}

function criarListaTaxasCapim() {
    const lista = document.getElementById('listaTaxasCapim');
    lista.innerHTML = '';
    for (let i = 1; i <= 23; i++) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${i}x:</strong> ${taxasCapim[i].toFixed(2)}%`;
        lista.appendChild(li);
    }
}

criarLinhasTaxasAvancadas();
criarListaTaxasCapim();

function abrirSidebar() {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
}

function fecharSidebar() {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
}

function enviarProposta() {
    const contato = contatoInput.value.trim();
    alert('Dados enviados com sucesso!');
    fecharSidebar();
    contatoInput.value = '';
}
