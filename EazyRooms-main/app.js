
  var firebaseConfig = {
    apiKey: "AIzaSyAoW_W0nhrRf2y7iBc7SyRTaVUdRdc4Kn0",

  authDomain: "contactform-182aa.firebaseapp.com",

  databaseURL: "https://contactform-182aa-default-rtdb.firebaseio.com",

  projectId: "contactform-182aa",

  storageBucket: "contactform-182aa.appspot.com",

  messagingSenderId: "363459655499",

  appId: "1:363459655499:web:60d3019f89368347051ace",

  measurementId: "G-PC0LM6YMXE"

  };
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()


  //Signup Function
  let signUpButton = document.getElementById('signup')
  signUpButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")
    
    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error code", errorCode)
      console.log("error Message", errorMessage)
    });
  })








  let signInButton = document.getElementById('signin')
  signInButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth.signInWithEmailAndPassword(email.value, password.value) 
    .then((userCredential) => {
      // location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
      window.location = "index2.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert("error code", errorCode)
      alert( errorMessage)
    });
   })



//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function(user) {
  if (user) {

    var email = user.email
  
    var users = document.getElementById("user")
    var text = document.createTextNode(email);

    users.appendChild(text);

    console.log(users)
    //is signed in
  } else {
    //no user signed in
  }
})