const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });




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

          var insert = document.getElementById('insert');
          insert.addEventListener("click",function(){
              var msg = document.getElementById('msg');
              if(number == ""){
                  document.getElementById('msg').innerHTML="Veuillez entrer code d'accès";
              }
              if(montant < prix){
                  document.getElementById('msg').innerHTML="Le prix de ce produit est"  +  prix  +  "FTP";
              }else{
                  firebase.database().ref(number).update({
                  NUMBER: number,
                  BALANCE: montant - prix,
              })

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
                  });
              }
          }
