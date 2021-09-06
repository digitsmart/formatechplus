

// Database reference 
var numberV, montantV, prix;

function Ready(){
numberV = document.getElementById('number').value;
montantV = document.getElementById('montant').value;
var formInput = document.getElementById('formInput');
var nextForm = document.getElementById('nextForm');
}
//...........................select data.........................
document.getElementById('select').onclick = function(){
if(numberV ==""){
document.getElementById('msg').innerHTML="Veuillez entrer votre pin";
}else{

Ready();
firebase.database().ref(numberV).on('value',function(snapshot){;
document.getElementById('montant').value= snapshot.val().BALANCE;
document.getElementById('nextForm').style.display = 'block';
document.getElementById('formInput').style.display = 'none';
document.getElementById("select").disabled = true;
document.getElementById("insert").disabled = false;

});
}
}

document.getElementById('payer').addEventListener('click', function(){
numberV = document.getElementById('number').value;
montantV = document.getElementById('montant').value;
var prix = document.getElementById('prix').value;
var price = 450;
var i = 0;
if(montantV > price){
  firebase.database().ref(numberV).update({
  NUMBER: numberV,
  BALANCE: montantV - price,
})
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
    document.getElementById('myForm').style.display = 'none';
    if(video.paused){
      video.play()
      e.target.textContent = '❚ ❚'
    } else {
      video.pause()
      e.target.textContent = '►'
    }
    //window.location.assign("https://drive.google.com/uc?export=download&id=1t1wsN3z_BG_WkaImKn-Kz1XXf7I_vqze");
    i = 0;
    } else {
    width++;
    elem.style.width = width + "%";
    }
    }
    }
} else{
  document.getElementById('msg').innerHTML = "Vous n'avez pas assez de Rm"; 

}

});