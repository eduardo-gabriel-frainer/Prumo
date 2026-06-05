
        lucide.createIcons();

        const tabela = $("#tabelaObras").DataTable({
            language: {
                url: "https://cdn.datatables.net/plug-ins/1.13.8/i18n/pt-BR.json"
            }
        });

        document.getElementById("cep").addEventListener("blur", async function () {

            const cep = this.value.replace(/\D/g, "");

            if (cep.length != 8) {
                return
            }

            const url = `https://viacep.com.br/ws/${cep}/json/`

            try {
                const response = await fetch(url)
                const dados = await response.json();

                if (dados.uf == undefined) {
                    return
                }

                console.log('Buscando dados do CEP')

                document.getElementById('estado').value = dados.uf;
                document.getElementById('cidade').value = dados.localidade;
                document.getElementById('endereco').value = dados.logradouro;

            } catch (error) {

            }

        });


document.getElementById("btnSalvar").addEventListener("click", function () {
    const obra = document.getElementById("obra").value;
    const cliente = document.getElementById("cliente").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const cep = document.getElementById("cep").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    if (!obra || !cliente || !telefone || !endereco || !cep || !cidade || !estado) {
        alert("Preencha todos os campos.");
        return;
    }

    tabela.row.add([obra, cliente, telefone, endereco]).draw();

    bootstrap.Toast.getOrCreateInstance(document.getElementById('toastSucesso')).show();

    document.getElementById("formObras").reset();
});
