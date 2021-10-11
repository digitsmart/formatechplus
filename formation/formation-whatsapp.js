function submit() {

  nameV = document.getElementById('name').value;
  codeV = document.getElementById('code').value;
  emailV = document.getElementById('email').value;
  numberV = document.getElementById('number').value;
  refV = document.getElementById('ref').value;
if(nameV == ""){
 document.getElementById('msgName').innerHTML ="Enregistrer votre nom";
 document.getElementById('msgName').style.color = '#fff';
 document.getElementById('msgName').style.background ="red";
}else if(emailV == ""){
 document.getElementById('msgEmail').innerHTML ="Entrer votre email";
 document.getElementById('msgEmail').style.color = '#fff';
 document.getElementById('msgEmail').style.background ="red";
}else if(numberV == ""){
document.getElementById('msgNumber').innerHTML ="Entrer votre numéro";
document.getElementById('msgNumber').style.color = '#fff';
document.getElementById('msgNumber').style.background ="red";
}else if(codeV == ""){
document.getElementById('pays').innerHTML ="Selectionner code pays";
document.getElementById('pays').style.color = '#fff';
document.getElementById('pay').style.background ="red";
}else if(refV == ""){
document.getElementById('msgRef').innerHTML ="Si personne vous a referé, entrer ftech plus";
document.getElementById('msgRef').style.color = '#fff';
document.getElementById('msgRef').style.background ="red";
}else{
 firebase.database().ref('Cours whatsapp 25 octobre/' + nameV).set({
     ANAME: nameV,
     Email: emailV,
     NUMBER: (codeV) + numberV,
     REFERENCE: refV,
 });
 document.getElementById('infosForm').style.display ='block';
 document.getElementById('formulaire').style.display ='none';
 document.getElementById('name').value = '';
 document.getElementById('email').value = '';
 document.getElementById('number').value = '';
 document.getElementById('ref').value = '';
 
}
}





//------ boutton de pattage de mon formulaire

 
