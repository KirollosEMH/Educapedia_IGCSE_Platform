let element = document.getElementById("courseForm")
element.addEventListener("submit",(event) =>{
    // prevents default action of the form
    event.preventDefault();
    
    // stores the values of the form
    const selectedMath = document.getElementById("Math").value;
    console.log(selectedMath);
    const selectedBiology = document.getElementById("Biology").value;
    const selectedPhysics = document.getElementById("Physics").value;
    const selectedComputer = document.getElementById("Computer").value;
    const selectedScience = document.getElementById("Science").value;
    
    let arr = [selectedMath,
        selectedBiology,
        selectedPhysics,
        selectedComputer,
        selectedScience];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] =="") {
            continue;
        }
        else{
            document.getElementById("CourseEditH1").innerHTML = `${arr[i]}`;
            break;
        }
    }
    
    window.location.href = "CourseEdit.html";
});
