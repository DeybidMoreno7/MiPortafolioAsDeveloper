const btnCopiar = document.getElementById("btnCopiar");
const codigo = document.querySelector(".bloqueCod code");

btnCopiar.addEventListener("click", async () => {

    await navigator.clipboard.writeText(codigo.textContent);

    btnCopiar.innerHTML = `
        <i class="bi bi-check-lg"></i>
        ¡Copiado!
    `;

    setTimeout(() => {

        btnCopiar.innerHTML = `
            <i class="bi bi-copy"></i>
            Copiar
        `;

    }, 2000);

});