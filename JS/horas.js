
lucide.createIcons();

const tabela = $("#tabelaHoras").DataTable({
    language: {
        url: "https://cdn.datatables.net/plug-ins/1.13.8/i18n/pt-BR.json"
    }
});

function calcularHoras(entrada, saida, intervalo) {

    const [hEntrada, mEntrada] = entrada.split(":").map(Number);
    const [hSaida, mSaida] = saida.split(":").map(Number);

    let minutosEntrada = hEntrada * 60 + mEntrada;
    let minutosSaida = hSaida * 60 + mSaida;

    let totalMinutos = minutosSaida - minutosEntrada - intervalo;

    let horas = Math.floor(totalMinutos / 60);
    let minutos = totalMinutos % 60;

    return `${horas}h ${minutos}min`;
}

document.getElementById("btnSalvar").addEventListener("click", function () {
    const funcionario = document.getElementById("funcionario").value;
    const obra = document.getElementById("obra").value;
    const data = document.getElementById("data").value;
    const entrada = document.getElementById("entrada").value;
    const saida = document.getElementById("saida").value;
    const intervalo = Number(document.getElementById("intervalo").value);

    if (!funcionario || !obra || !data || !entrada || !saida) {
        alert("Preencha todos os campos.");
        return;
    }

    const dataFormatada = new Date(data).toLocaleDateString("pt-BR");

    const total = calcularHoras(entrada, saida, intervalo || 0);

    tabela.row.add([
        dataFormatada,
        funcionario,
        obra,
        entrada,
        saida,
        total,
        `<button class="btn p-0 border-0 text-danger btnExcluir">
            <i data-lucide="trash"></i>
        </button>`
    ]).draw();

    lucide.createIcons();

    bootstrap.Toast.getOrCreateInstance(document.getElementById('toastSucesso')).show();

    document.getElementById("formHoras").reset();
});

async function buscarNomes() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/babynames?gender=neutral', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'eaY2lynmyl4MrlhCNjI3ZYcekf7ghN9KeZUGSFAU'
            }
        })

        const data = await response.json();

        console.log(data)

        const selectFuncionario = document.getElementById('funcionario')

        data.forEach(nome => {
            const option = document.createElement('option');

            option.value = nome;
            option.textContent = nome;

            selectFuncionario.appendChild(option);
        });

    } catch (error) {
        console.log('Não foi possivel buscar os nomes na API')
    }
}

buscarNomes()

$('#tabelaHoras').on('click', '.btnExcluir', function () {
    if (confirm('Deseja remover este registro?')) {
        tabela.row($(this).closest('tr')).remove().draw();
    }
});