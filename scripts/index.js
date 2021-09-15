// boutton popup de mon blog
function openAbout() {
  document.getElementById("about").style.display = "block";
}

function closeAbout() {
  document.getElementById("about").style.display = "none";
}


function openAbonnez() {
  document.getElementById("form").style.display = "block";
}

function closeForm() {
  document.getElementById("form").style.display = "none";
}


function openInfos() {
  document.getElementById("info").style.display = "block";
}

function closeInfos() {
  document.getElementById("info").style.display = "none";
}

// slide image home de mon blog
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}

// menu de mon site responsive
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//partager boutton reseau social
(function(){

  var popupCenter = function(url, title, width, height){
      var popupWidth = width || 640;
      var popupHeight = height || 320;
      var windowLeft = window.screenLeft || window.screenX;
      var windowTop = window.screenTop || window.screenY;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth;
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
      var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
      var popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
      popup.focus();
      return true;
  };

  document.querySelector('.share_twitter').addEventListener('click', function(e){
      e.preventDefault();
      var url = this.getAttribute('data-url');
      var shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) +
          "&via=ftechplus" +
          "&url=" + encodeURIComponent(url);
      popupCenter(shareUrl, "Partager sur Twitter");
  });

  document.querySelector('.share_facebook').addEventListener('click', function(e){
      e.preventDefault();
      var url = this.getAttribute('data-url');
      var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
      popupCenter(shareUrl, "Partager sur facebook");
  });

  document.querySelector('.share_gplus').addEventListener('click', function(e){
      e.preventDefault();
      var url = this.getAttribute('data-url');
      var shareUrl = "https://plus.google.com/share?url=" + encodeURIComponent(url);
      popupCenter(shareUrl, "Partager sur Google+");
  });

  document.querySelector('.share_linkedin').addEventListener('click', function(e){
      e.preventDefault();
      var url = this.getAttribute('data-url');
      var shareUrl = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url);
      popupCenter(shareUrl, "Partager sur Linkedin");
  });

})();

//formulaire d'abonnement
//formulaire d'inscription
 // Your web app's Firebase configuration

 var codeV, nameV, emailV, numberV, adressV, infosV;

 function enregistrer() {
      nameV = document.getElementById('name').value;
      codeV = document.getElementById('code').value;
      emailV = document.getElementById('email').value;
      numberV = document.getElementById('number').value;
      adressV = document.getElementById('adress').value;
      infosV = document.getElementById('infos').value;
   if(nameV == ""){
     document.getElementById('message').innerHTML ="Votre nom";
     document.getElementById('message').style.color = '#fff';
     document.getElementById('message').style.background ="red";
   }else if (numberV == ""){
     document.getElementById('message').innerHTML ="Votre numero";
   }else if(codeV == ""){
     document.getElementById('message').innerHTML ="Votre code pays";
   }else if(adressV == ""){
    document.getElementById('message').innerHTML ="Votre adresse";
  }else{
     firebase.database().ref('Mes Abonnés/' + nameV).set({
         ANAME:  nameV,
         Email: emailV,
         NUMBER: (codeV) + numberV,
         ADRESSE: adressV,
         INFOS: infosV,
     });
     document.getElementById('message').innerHTML ="Vous etes maimtenant abonnée";
     document.getElementById('message').style.color = '#fff';
     document.getElementById('message').style.background ="blue";
     document.getElementById('name').value = '';
     document.getElementById('email').value = '';
     document.getElementById('number').value = '';
     document.getElementById('adress').value = '';
   }
  }
