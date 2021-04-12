	// Initialize Firebase
    var config = {
        apiKey: "AIzaSyDVjzbTqXNzNsteN9FtUnLzG7J9G1h-Pkg",
                authDomain: "signup-de54d.firebaseapp.com",
                databaseURL: "https://signup-de54d.firebaseio.com",
                projectId: "signup-de54d",
                storageBucket: "signup-de54d.appspot.com",
                messagingSenderId: "313335894880",
                appId: "1:313335894880:web:367bf0a26531cbd0f1c405",
                measurementId: "G-TX374HDPKS"
    };
    firebase.initializeApp(config);
    // Function to get form value
    var code, nom, email, phone;

    var infos = document.getElementById('infos');
function infos() {
    nom = document.getElementById('name').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    code = document.getElementById('code').value;
    var content= document.getElementById('content');
    var form = document.getElementById('form');
    var smgnom =document.getElementById('smgnom');
    var smgmail =document.getElementById('smgmail');
    var smgnphone =document.getElementById('smgnphone');
    var smgcode =document.getElementById('smgcode');
    if(non == ""){
        document.getElementById('msgnom').innerHTML="Votre nom";
    }
    if(email == ""){
        alert('votre email');
        document.getElementById('msgmail').innerHTML="Votre email";
    }
    if(code == ""){
        alert('votre code');
        document.getElementById('msgcode').innerHTML="Votre code pays";
    }
    if(phone == ""){
        alert('votre numéro');
        document.getElementById('msgnphone').innerHTML="Votre numéro";
    }else{
        firebase.database().ref('Infospaiment/' +nom).set({
            NAME: nom,
            Mail: email,
            CODE: code,
            NUMBER: phone,
        });
        document.getElementById('content').style.display ="none";
        document.getElementById('form').style.display ="block";
    }
}