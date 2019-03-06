function checkforblank(){
	if (document.getElementById('email').value ==''){
		alert('enter email');document.getElementById('email').style.borderColor = "red" ;return false;
	}
}
function thankyou(){
	alert("Thanks for signing up! Check your email for future deals.");
}
