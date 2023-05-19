// Creating a class to get values from array
class GettingValues {
    constructor(arr = []){
        this.arr = arr;
    }
    // method to get the true values only 
    TrueValue () {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] =="") {
                continue;
            }
            else{
                return this.arr[i];
            }
        }
    }
}
let trueValue;
let element = document.getElementById("courseForm")
element.addEventListener("submit",(event) =>{
    // prevents default action of the form
    event.preventDefault();
    // stores the values of the form
    const selectedMath = document.getElementById("Math").value;
    const selectedBiology = document.getElementById("Biology").value;
    const selectedPhysics = document.getElementById("Physics").value;
    const selectedComputer = document.getElementById("Computer").value;
    const selectedScience = document.getElementById("Science").value;

    let arr = [selectedMath,
        selectedBiology,
        selectedPhysics,
        selectedComputer,
        selectedScience];
    // creating an Object from class get value
    const getValue = new GettingValues(arr);
    trueValue = getValue.TrueValue();

    // creating an object from class URLSearchParams
    const urlParams = new URLSearchParams();

    // using the set value to give a key to our value
    urlParams.set('trueValue', trueValue);

    // using the toSring in url paramters to take the string only without the key
    // using "?" to seperate the html file from the string we are sending
    window.location.href = "CourseEdit.html?" + urlParams.toString();
});
