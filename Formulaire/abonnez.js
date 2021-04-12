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
  

  function insert() {
    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var country = document.getElementById('country').value;
    var ville = document.getElementById('ville').value;
    var adresse = document.getElementById('adresse').value;
    var service = document.getElementById('service').value;
    var plan = document.getElementById('plan').value;
    var images = document.getElementById('images').value;
     var msg =document.getElementById('msg');
     if (nom.value ===""){
      document.getElementById('msg').innerHTML="Veuillez entrer votre nom";
     }
     if (number.value ===""){
      document.getElementById('msgmail').innerHTML="Veuillez entrer votre numero";
     }
     if (emailV ==""){
      document.getElementById('msgmail').innerHTML="Veuillez entrer votre email";
     }
     if (countryV ==""){
      document.getElementById('msgmail').innerHTML="Veuillez selectionner votre pays";
     }
    }
  