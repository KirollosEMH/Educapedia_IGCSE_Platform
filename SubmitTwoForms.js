submitForms = function(){
    var video = document.getElementById("video").value;
    var pdfFile = document.getElementById("pdfFile").value;
    var quizUrl = document.getElementById("Quiz URl").value;
  
    if (video == "" || pdfFile == "" || quizUrl == "") {
      alert("Please fill out all the required fields.");
    } else {
      document.getElementById("form1").submit();
      document.getElementById("form2").submit();
      alert("Upload Done");
      window.location.href = "CourseControl.html";
    }
  }
  