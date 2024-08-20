const firebaseConfig = {
    apiKey: "AIzaSyAoW_W0nhrRf2y7iBc7SyRTaVUdRdc4Kn0",

    authDomain: "contactform-182aa.firebaseapp.com",

    databaseURL: "https://contactform-182aa-default-rtdb.firebaseio.com",

    projectId: "contactform-182aa",

    storageBucket: "contactform-182aa.appspot.com",

    messagingSenderId: "363459655499",

    appId: "1:363459655499:web:60d3019f89368347051ace",

    measurementId: "G-PC0LM6YMXE"

  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var attendanceFormDB = firebase.database().ref("attendanceForm");
  
  document.getElementById("attendanceForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var phone = getElementVal("phone");
    var father = getElementVal("father");
    var fatherno = getElementVal("fatherno");
    var address = getElementVal("address");
    var pincode = getElementVal("pincode");
    var floor = getElementVal("floor");
  
    saveMessages(name, phone, father,fatherno,address,pincode,floor);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("attendanceForm").reset();
  }
  
  const saveMessages = (name, phone, father,fatherno,address,pincode,floor) => {
    var newattendanceForm = attendanceFormDB.push();
  
    newattendanceForm.set({
      name: name,
      phone: phone,
      father:father,
      fatherno: fatherno,
      address:address,
      pincode:pincode,
      floor:floor,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
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

