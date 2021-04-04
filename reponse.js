function myFunction() {
  var x = document.getElementById("write");
  var y = document.getElementById("read");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
  } 

  function hide() {
      var x = document.getElementById("write");
      var y = document.getElementById("read");
      if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
      } else {
        y.style.display = "block";
        x.style.display = "none";
      }
      }

  

var codeV, nameV, emailV, numberV, adresseV, countryV, villeV, serviceV, planV, imagesV;

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
   imagesV = document.getElementById('images').value;
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
      JImages: imagesV,
  });
  document.getElementById('write').style.display = "none";
  document.getElementById('valide').style.display = "block";
   }
 
    }
     

