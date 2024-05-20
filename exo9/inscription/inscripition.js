const jourSelect = document.getElementById('jour');
for (let day = 1; day <= 31; day++) {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = day;
    jourSelect.appendChild(option);
}

const moisSelect = document.getElementById('mois');
const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
mois.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index + 1; 
    option.textContent = month;
    moisSelect.appendChild(option);
});

const anneeSelect = document.getElementById('annee');
for (let year = 2024; year >= 1905; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    anneeSelect.appendChild(option);
}

let mdpconfirm = document.getElementById("mdpconfirm");
let mdp = document.getElementById("mdp");
let mail = document.getElementById("mail");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom")


function VerifMdp() {
    const alertemdp=document.getElementById("alertemdp");
    if (!mdp.value){
       alertemdp.textContent = "Veuillez insérer votre mot de passe.";
       mdp.classList.add("alerte-border");
       return false;
    }
    mdp.classList.remove("alerte-border");
    alertemdp.textContent = ""
    return true;
}

function Verifmail() {
    const alertemail=document.getElementById("alertemail");
    if (!mail.value){
        alertemail.textContent="Veuillez insérer votre mail.";
        mail.classList.add("alerte-border");
        return false;
    }
    mail.classList.remove("alerte-border");
    alertemail.textContent = ""
    return true;
}

function Verifnom() {
    const alertenom=document.getElementById("alertenom");
    if (!nom.value){
        alertenom.textContent = "Veuillez insérer votre nom et votre prénom.";
        nom.classList.add("alerte-border");
        prenom.classList.add("alerte-border");
        return false;
    }
    nom.classList.remove("alerte-border");
    prenom.classList.remove("alerte-border");
    alertenom.textContent = ""
    return true;
}

function VerifForm() {
    const mdpvalide = VerifMdp();
    const mailvalide = Verifmail();
    const nomvalide = Verifnom();

    return mdpvalide && mailvalide && nomvalide; 
}

document.getElementById("submitBtn").addEventListener('click', function(event){
    if(!VerifForm()){
        event.preventDefault();
        document.getElementById("alerte").textContent

}
 })