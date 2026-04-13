async function aggiornaOra() {
    const res = await fetch('/ora');
    const json = await res.json();
    document.getElementById('orario').innerText = "Ora del server: " + json.orario;
}

// SALUTO
async function inviaSaluto() {
    const nomeUmano = document.getElementById('input-nome').value;

    if (nomeUmano === "") {
        alert("Ehi, inserisci un nome!");
        return;
    }

    const res = await fetch(`/saluta?nome=${nomeUmano}`);
    const json = await res.json();

    document.getElementById('risposta-saluto').innerText = json.messaggio;
}

// SOMMA
async function inviaSomma() {
    const numero1 = document.getElementById('input-numero1').value;
    const numero2 = document.getElementById('input-numero2').value;

    if (numero1 === "" || numero2 === "") {
        alert("Ehi, inserisci entrambi i numeri!");
        return;
    }

    const res = await fetch(`/somma?numero1=${numero1}&numero2=${numero2}`);
    const json = await res.json();

    document.getElementById('risultato-somma').innerText = "Risultato: " + json.risultato;
}

// BOTTONI
document.getElementById('btn-ora').addEventListener('click', aggiornaOra);
document.getElementById('btn-saluto').addEventListener('click', inviaSaluto);
document.getElementById('btn-somma').addEventListener('click', inviaSomma);