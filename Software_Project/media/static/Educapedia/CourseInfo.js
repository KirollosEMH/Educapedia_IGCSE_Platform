
// This file is used to display the course information on the course page.
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    const image = urlParams.get("image");
    const description = urlParams.get("description");

    console.log(name);
    console.log(image);
    console.log(description);

    // Getting the course name, image and description from the course page.
    const courseName = document.getElementById("courseName");
    const courseImage = document.getElementById("courseImage");
    const courseDescription = document.getElementById("courseDescription");

    // Displaying the course information on the course page.
    if (courseName) {
    courseName.textContent = name;
    }

    // Displaying the course image on the course page.
    if (courseImage) {
    courseImage.setAttribute("src", image);
    }

    // Displaying the course description on the course page.
    if (courseDescription) {
    courseDescription.textContent = description;
    }
});
  