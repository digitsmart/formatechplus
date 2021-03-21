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

            document.getElementById('clean').onclick = function(){

                        document.getElementById("insert").style.display="none";
                        document.getElementById("clean").style.display="none";
                        document.getElementById("select").style.display="block";
                        document.getElementById('montant').value = "";
                        document.getElementById('number').value = "";
            }

            //............................ready data....................
            var numberV, montantV, prix, insert;

            function Ready(){
                numberV = document.getElementById('number').value;
                montantV = document.getElementById('montant').value;
                insertV = document.getElementById('insert');
                insertV = document.getElementById('select');
                insertV = document.getElementById('clean');
            }
            //...........................select data.........................
            document.getElementById('select').onclick = function(){
                if(numberV ==""){
                    document.getElementById('msg').innerHTML="Veuillez entrer votre numero";
                    
                }else{
                    
                    Ready();
                        firebase.database().ref(numberV).on('value',function(snapshot){;
                        document.getElementById('montant').value= snapshot.val().BALANCE;
                        document.getElementById("insert").style.display="block";
                        document.getElementById("clean").style.display="block";
                        document.getElementById("select").style.display="none";
                    });
                }
            }
