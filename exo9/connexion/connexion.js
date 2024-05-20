let mail = document.getElementById("mail");
let mdp = document.getElementById("mdp");

function Verifmail(){
    const alertemail=document.getElementById("alertemail");
if (!mail.value){
    alertemail.textContent="Veuillez entrer votre email.";
    return false;
}
alertemail.textContent= "";
return true;
}

function Verifmdp(){
    const alertemdp=document.getElementById("alertemdp")
    if (!mdp.value){
        alertemdp.textContent="Veuillez entrer votre mot de passe."
        
        return false;
    }
    alertemdp.textContent="";
    return true;
}

function VerifForm(){
    const mdpvalide= Verifmdp();
    const mailvalide= Verifmail();
    
    return mdpvalide && mailvalide
}

document.getElementById("submitBtn").addEventListener('click', function(event){
    if(!VerifForm()){
event.preventDefault();
document.getElementById("alerte").textContent 
    }
})