submitForms = function(){
    var video = document.getElementById("video").value;
    var pdfFile = document.getElementById("pdfFile").value;
    var quizUrl = document.getElementById("Quiz URl").value;
    if(video == undefined ){
      alert("Please fill out all the required fields.");
    }
    else if (pdfFile == "" ) {
      alert("Please fill out all the required fields")
    }
    else if (quizUrl == "") {
      alert("Please fill out all the required fields")
    }
    else if (video !== undefined && pdfFile !== "" && quizUrl !== "") { //upload all at a time
      alert("Upload Done");
      document.getElementById("form1").submit();
      document.getElementById("form2").submit();
      window.location.href = "CourseControl.html";
}
  }
  