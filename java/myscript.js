function verifyage(){
	var user_age= document.getElementById("age").checked;
	if (user_age ==false){
		alert('Sorry! You need to be at least 18 years old to sign up.');
		return false;
	}	
}

function thankyou(){
	alert("Thanks for signing up! Check your email for future deals.");
}

