
var nameV, emailV;

function insert() {
    var msg = document.getElementById('msg');
     nameV = document.getElementById('name').value;
     emailV = document.getElementById('email').value;
     
    if(nameV == ""){
      document.getElementById('msgName').innerHTML="Veuillez entrer votre nom";
    }
    if(emailV == ""){
      document.getElementById('msgEmail').innerHTML="Veuillez entrer votre email";
    }else{
      firebase.database().ref("Abonnez/" + nameV).set({
        NAME: nameV,
        Mail: emailV,
    });
    window.location='https://drive.google.com/uc?export=download&id=1Pi_R9QBsoqUbR6ShKg4LqmXpaP92vcZa';
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    }
 }



