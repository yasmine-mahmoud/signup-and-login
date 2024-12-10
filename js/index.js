var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var loginbtn = document.getElementById("loginbtn");
var alertName = document.getElementById("alertName");
var alertEmail = document.getElementById("alertEmail");
var alertPassword = document.getElementById("alertPassword");
var signUpArray = [];

var url =( location.pathname).split("/").slice(0,location.pathname.split("/").length-1).join("/");
//welcome
// var username = localStorage.getItem("Username");
// if(username){
// 	document.getElementById("username").innerHTML='Welcome '+ username;
// }

//logout
function logout(){
	localStorage.removeItem('name');
	 location.replace(url + "/index.html");
}

//sign up
//check inputs sign up
if (localStorage.getItem("users") == null) {
	signUpArray = [];
} 
else {
	signUpArray = JSON.parse(localStorage.getItem("users"));
}

function isEmailExist(){
	for(let i=0;i<signUpArray.length;i++){
  if(signUpArray[i].email.toLowerCase()==signupEmail.value.toLowerCase()){
		return false;
	}
	}
}

function signup(){

	
	if(isEmailExist()==false){
		document.getElementById("exist").innerHTML = '<span class="text-danger m-3">Email already exist</span>';
	}else{
			if (validName() == true && validEmail() == true && validPassword()==true) {
				var signUp = {
					name: signupName.value,
					email: signupEmail.value,
					password: signupPassword.value,
				};
				signUpArray.push(signUp);
				localStorage.setItem("users", JSON.stringify(signUpArray));
				document.getElementById("exist").innerHTML = '<span class="text-success  m-3">Success</span>';
			}
				location.replace(url +"/index.html");
		
}
}



//login
//check inputs login
// function signinisempty(){
// 	if (signinEmail.value == " " && signinPassword.value == " " ) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// }

function login(){
	for(let i=0;i<signUpArray.length;i++){
		if (
			signUpArray[i].email.toLowerCase() == signinEmail.value.toLowerCase() &&
			signUpArray[i].password.toLowerCase() == signinPassword.value.toLowerCase()
		) {
			localStorage.setItem("Username", signUpArray[i].name);
		}
	}
	 location.replace(url + "/main.html");
}
var username = localStorage.getItem("Username");
	document.getElementById("username").innerHTML = "Welcome " + username;

//validation 

function validName() {
	var NameRegex = /^[A-Za-z]{3,}[0-9]{0,}$/;

	if (NameRegex.test(signupName.value) == true) {
		// tmam
		alertName.classList.add("d-none");
		signupName.classList.add("is-valid");
		signupName.classList.remove("is-invalid");
		return true;
	} else {
		alertName.classList.remove("d-none");
		signupName.classList.add("is-invalid");
		signupName.classList.remove("is-valid");
		return false;
	}
}

function validEmail() {
	var EmailRegex = /^[a-zA-Z0-9._%\+-]+@[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,}$/;

	if (EmailRegex.test(signupEmail.value) == true) {
		// tmam
		alertEmail.classList.add("d-none");
		signupEmail.classList.add("is-valid");
		signupEmail.classList.remove("is-invalid");
		return true;
	} else {
		alertEmail.classList.remove("d-none");
		signupEmail.classList.add("is-invalid");
		signupEmail.classList.remove("is-valid");
		return false;
	}
}

function validPassword() {
	var PasswordRegex = /^[A-Za-z]{3,}[0-9]{0,}$/;

	if (PasswordRegex.test(signupPassword.value) == true) {
		// tmam
		alertPassword.classList.add("d-none");
		signupPassword.classList.add("is-valid");
		signupPassword.classList.remove("is-invalid");
		return true;
	} else {
		alertPassword.classList.remove("d-none");
		signupPassword.classList.add("is-invalid");
		signupPassword.classList.remove("is-valid");
		return false;
	}
}
