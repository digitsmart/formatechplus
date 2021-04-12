var prenomV, nameV, emailV, numberV, adresseV, countryV, villeV, serviceV, planV,;
var insert =document.getElementById('insert');
function insert() {
  prenomV = document.getElementById('prenom').value;
   nameV = document.getElementById('name').value;
   emailV = document.getElementById('email').value;
   numberV = document.getElementById('number').value;
   countryV = document.getElementById('country').value;
   villeV = document.getElementById('ville').value;
   adresseV = document.getElementById('adresse').value;
   serviceV = document.getElementById('service').value;
   planV = document.getElementById('plan').value;
   var write =document.getElementById('write');
   var valide =document.getElementById('valide');
   if (nameV ==""){
    document.getElementById('msgmail').innerHTML="Veuillez entrer votre nom";
   }
   if (numberV ==""){
    document.getElementById('msgmail').innerHTML="Veuillez entrer votre numero";
   }
   if (emailV ==""){
    document.getElementById('msgmail').innerHTML="Veuillez entrer votre email";
   }
   if (countryV ==""){
    document.getElementById('msgmail').innerHTML="Veuillez selectionner votre pays";
   }else{
    firebase.database().ref("MonTravail/" +prenomV).set({
      BPrenom: prenomV,
      ANom: nameV,
      CEmail: emailV,
      DPays: countryV,
      ENumero: numberV,
      FVille: villeV,
      GAdresse: adresseV,
      HTravail : serviceV,
      IPlan: planV,
  });
  document.getElementById('write').style.display = "none";
  document.getElementById('valide').style.display = "block";
   }
 
    }
     

