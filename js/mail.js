function submit() {
	var field1 = $("#nameField").val();
	var field2 = $("#emailField").val();
	 
	if(field1 == ""){
		alert('Please Fill Your Name');
		document.getElementById("nameField").focus();
		return false;
	}
	if(field2 == ""){
		alert('Please Fill Your Email');
		document.getElementById("emailField").focus();
		return false;
	}
	
	$.ajax({
		url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXCq6_QEmFK_xfNV0s7Nh2_l8zho22JPF1rBvwGdIk71oZXA/formResponse",
		data: {"entry.1278148044": field1, "entry.365738450": field2},
		type: "POST",
		dataType: "xml",
		success: function(d)
		{
		},
		error: function(x, y, z)
			{
				$('#success-msg').show();
				$('#form').hide();				
			}
	});
	return false;
}