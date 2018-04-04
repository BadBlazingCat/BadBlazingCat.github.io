
const btnSignIn = document.getElementById("btnSignIn");
const btnSignUp = document.getElementById("btnSignUp");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("User_div").style.display = "initial";
    document.getElementById("newUser_div").style.display = "none";

  } else {
    // No user is signed in.
    document.getElementById("newUser_div").style.display = "initial";
    document.getElementById("User_div").style.display = "initial";

  }
  app.user = user;
//Used to verify if user is signed in
  export function Continue(){
    if (app.user != null){
      console.log("true");
      return true;
    }
  }
});

 //Add SignIn event
function SignIn() {
  const userEmail = document.getElementById("txtEmail").value;
  const userPassword = document.getElementById("txtPassword").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);

  });
};

function SignUp() {
  const userEmail = document.getElementById("txtEmail").value;
  const userPassword = document.getElementById("txtPassword").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error: " + errorMessage);
  break;
});
//Create Refrenceces
const dbRefUser = firbase.database().ref().child("Users").child(userEmail);
//Sync object changes
dbRefInventory.on("value", snap => console.log(snap.val()));
}
