lucide.createIcons();

let contadorSecoes = 0;

document.getElementById("btnNovaSecao").addEventListener("click", () => criarSecao(false));

function criarSecao(isInitial = false) {
    contadorSecoes++;

    const secaoId = `secao-${contadorSecoes}`;
    const secao = document.createElement("div");
    secao.className = "card shadow-sm secao-card";

    secao.innerHTML = `
    <div class="card-body">
        <div class="secao-header mb-3">
            <div id="nomeItem" class="d-flex gap-3">
                <input class="form-control" placeholder="Nome da Seção..."></input>
                <select class="form-select" id="obra">
                    <option value="">Selecione uma obra</option>
                    <option>Casa do Mazzi</option>
                    <option>Mario Bernandes</option>
                    <option>Marinho Buzzi</option>
                </select>
            </div>
            <button
                class="btn btn-outline-warning btnAdicionarItem"
                data-secao="${secaoId}">
                <i data-lucide="plus"></i>
                Novo Item
            </button>
        </div>
        <div id="${secaoId}"></div>
    </div>
    `;

    document.getElementById("containerSecoes").appendChild(secao);
    lucide.createIcons();

    secao.querySelector(".btnAdicionarItem").addEventListener("click", function () {
        adicionarItem(this.dataset.secao, false);
    });

    if (!isInitial) {
        const toastEl = document.getElementById("toastSucesso");
        if (toastEl) {
            bootstrap.Toast.getOrCreateInstance(toastEl).show();
        }
    }
}

function adicionarItem(secaoId, isInitial = false) {
    const grupoRadio = `grupo-${Date.now()}`;
    const item = document.createElement("div");
    item.className = "item-checklist";

    item.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
        <div id="nomeItem">
            <input class="form-control" placeholder="Nome do item..."></input>
        </div>
        <div class="radio-group">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="${grupoRadio}" value="Sim">
                <label class="form-check-label">Sim</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="${grupoRadio}" value="Não">
                <label class="form-check-label">Não</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="${grupoRadio}" value="N/A">
                <label class="form-check-label">N/A</label>
            </div>
        </div>
    </div>
    `;

    document.getElementById(secaoId).appendChild(item);

    if (!isInitial) {
        const toastEl = document.getElementById("toastSucesso");
        if (toastEl) {
            bootstrap.Toast.getOrCreateInstance(toastEl).show();
        }
    }
}

window.onload = function () {
    criarSecao(true);   
    adicionarItem("secao-1", true); 
};