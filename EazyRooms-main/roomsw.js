setTimeout(()=>{
    document.getElementById("navbar").classList.add('fadeIn');
},0);

var subjectObject = {
    "K": {
      "First FLoor": ["B-133", "B-142", "A-102", "A-120"],
      "Second Floor": ["B-228", "B-229", "A-231", "A-201"],
      "Third Floor": ["B-318", "B-329", "A-301", "A-311"]
    },
    "O": {
      "First FLoor": ["P-133", "P-142", "Q-102", "Q-120"],
      "Second Floor": ["P-228", "P-229", "Q-231", "Q-201"],
    },
    "M": {
      "First FLoor": ["C-133", "C-142", "D-102", "D-120"],
      "Second Floor": ["C-228", "C-229", "D-231", "D-201"],
      "Third Floor": ["C-318", "C-329", "D-301", "D-311"]
  }
}
  window.onload = function() {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  } 

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
  
  
  