// creating an object & passing window.location.search to search for the desired key
const urlParams = new URLSearchParams(window.location.search);

// using get method to find value of the desired key
const trueValue = urlParams.get('trueValue');

// Creating a responsive headear according to the selected course
document.getElementById("CourseEditH1").innerHTML = trueValue;