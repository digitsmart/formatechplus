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

    

var codeV, nameV, emailV, numberV, montantV;

function insert() {
    codeV = document.getElementById('code').value;
     nameV = document.getElementById('name').value;
     emailV = document.getElementById('email').value;
     numberV = document.getElementById('number').value;
     montantV = document.getElementById('montant').value;
 
    firebase.database().ref(codeV).set({
        CODE: codeV,
        NAME: nameV,
        Mail: emailV,
        NUMBER: numberV,
        BALANCE: montantV,
    });

 }



 function Ready(){
    codeV = document.getElementById('code').value;
    nameV = document.getElementById('name').value;
    emailV = document.getElementById('email').value;
    numberV = document.getElementById('number').value;
    montantV = document.getElementById('montant').value;
 }

    document.getElementById('show').onclick = function(){
     Ready();
     firebase.database().ref('numberV').on('value',function(snapshot){
         document.getElementById('email').value= snapshot.val().Mail;
         document.getElementById('number').value= snapshot.val().NUMBER;
         document.getElementById('montant').value= snapshot.val().BALANCE;
     });
 }


 function getdata() {
    var codep=document.getElementById("codep").value;
    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    firebase.database().ref(codep).once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var namep=snapshot.val().NAME;
        var emailp=snapshot.val().Mail;
        var numberp=snapshot.val().NUMBER;
        var montantp=snapshot.val().BALANCE;

        //now we have data in variables
        //now show them in our html

        document.getElementById("namep").innerHTML=namep;
        document.getElementById("emailp").innerHTML=emailp;
        document.getElementById("numberp").innerHTML=numberp;
        document.getElementById("montantp").innerHTML=montantp;
    })
}




