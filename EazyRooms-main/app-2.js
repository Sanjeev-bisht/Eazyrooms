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

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

 console.log(auth)



let signOutButton = document.getElementById("signout")
signOutButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()
  console.log("clicked")
  
  auth.signOut()
  alert("Signed Out")
  window.location = "index.html";
})