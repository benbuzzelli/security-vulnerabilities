
// Get needed elements
const txtEmail = document.getElementById('signUp_field');
const txtName = document.getElementById('signUp_field');
const txtPassword = document.getElementById('signUp_field');
const btnSignUp = document.getElementById('signUp'); 
const btnLogin = document.getElementById('signIn');

btnLogin.addEventListener('click', e => {
	// Get the email and password from the user
	const email = txtEmail.value; 
	const pass = txtPassword.value; 
	const name = txtName.value; 
	const auth = firebase.auth(); 
	// Sign In 
	const promise = auth.signInWithEmailAndPassword(email,password); 
	// Put error message if it doesn't properly log
	promise.catch(e => console.log(e.message)); 
}); 

btnSignUp.addEventListener('click', e=> {
	// Get email and pass
	const email = txtEmail.value; 
	const pass = txtPassword.value; 
	const auth = firebase.auth(); 
	// Sign in 
	const promise = auth.createUserWithEmailandPassword(email, pass); 
	promise.catch(e => console.log(e.message)); 
})

// Checks the states for the emails and passwords in realtime 
firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser) {
		console.log(firebaseUser); 
	} else {
		console.log('not logged in'); 
	}
})