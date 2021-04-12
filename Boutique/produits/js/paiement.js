 // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            var firebaseConfig = {
                apiKey: "AIzaSyDVjzbTqXNzNsteN9FtUnLzG7J9G1h-Pkg",
                authDomain: "signup-de54d.firebaseapp.com",
                databaseURL: "https://signup-de54d.firebaseio.com",
                projectId: "signup-de54d",
                storageBucket: "signup-de54d.appspot.com",
                messagingSenderId: "313335894880",
                appId: "1:313335894880:web:367bf0a26531cbd0f1c405",
                measurementId: "G-TX374HDPKS"


            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);

            var insert = document.getElementById('payer');
            insert.addEventListener("click",function(){
                var number = document.getElementById('number').value;
                var montant = document.getElementById('montant').value;
                var prix = document.getElementById('prix').value;
                var msg = document.getElementById('msg');
                var form = document.getElementById("form");
                var recu = document.getElementById("recu");
                var i = 0;
                if(number == ""){
                    document.getElementById('msg').innerHTML="Veuillez entrer code d'accès";
                }
                if(montant < prix){
                    document.getElementById('msg').innerHTML="Le prix de ce produit est"  +  prix  +  "FTP";
                }else{
                    firebase.database().ref(number).update({
                    NUMBER: number,
                    BALANCE: montant - prix,
                });
                if (i == 0) {
                    i = 1;
                    var elem = document.getElementById("myBar");
                    var width = 1;
                    var id = setInterval(frame, 10);
                    function frame() {
                      if (width >= 100) {
                        clearInterval(id);
                        document.getElementById('montant').value = '';
                        document.getElementById('number').value = '';
                        document.getElementById('recu').style.display ="block";
                        document.getElementById('form').style.display ="none";
                        i = 0;
                      } else {
                        width++;
                        elem.style.width = width + "%";
                      }
                    }
                  }
               
                }


            })

            //............................ready data....................
            var numberV, montantV, prix;

            function Ready(){
                numberV = document.getElementById('number').value;
                montantV = document.getElementById('montant').value;
            }
            //...........................select data.........................
            document.getElementById('select').onclick = function(){
                if(numberV ==""){
                    document.getElementById('msg').innerHTML="Veuillez entrer votre numero";
                }else{
                    
                    Ready();
                        firebase.database().ref(numberV).on('value',function(snapshot){;
                        document.getElementById('montant').value= snapshot.val().BALANCE;
                        document.getElementById("select").disabled = true;
                        document.getElementById("insert").disabled = false;
                    });
                }
            }





        var mail, nom, pphone, date, code;
    function enregistrer() {
    phone = document.getElementById('phone').value;
    mail = document.getElementById('mail').value;
    nom = document.getElementById('nom').value;
    code = document.getElementById('code').value;
    date = document.getElementById('date').value;
    var datesmg =document.getElementById('datesmg');
    var nomsmg =document.getElementById('nomsmg');
    var mailsmg =document.getElementById('mailsmg');
    var codesmg =document.getElementById('codesmg');
    var phonesmg =document.getElementById('phonesmg');
    var div = document.getElementById('formation');
    var div1 = document.getElementById('form');
    var content = document.getElementById('content');
    if(date == ""){
        document.getElementById("datesmg").style.color = "red";
    }
    if(nom == ""){
        document.getElementById("nomsmg").style.color = "red";
    }
    if(mail == ""){
        document.getElementById("mailsmg").style.color = "red";
    }
    if(code == ""){
        document.getElementById("codesmg").style.color = "red";
    }
    if(phone == ""){
        document.getElementById("phonesmg").style.color = "red";
    }else{
        firebase.database().ref('0Infospaiment/' +phone).set({
            Adate: date,
            BNAME: nom,
            CCODE: code,
            DPHONE: phone,
            CMAIL: mail,
        });
        document.getElementById('montant').value = '';
        document.getElementById('number').value = '';
        document.getElementById('recu').style.display ="none";
        document.getElementById('content').style.display ="none";
        document.getElementById('form').style.display ="block";
        
}
}
