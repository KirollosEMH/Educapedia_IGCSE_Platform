
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    const image = urlParams.get("image");
    const description = urlParams.get("description");

    console.log(name);
    console.log(image);
    console.log(description);

    const courseName = document.getElementById("courseName");
    const courseImage = document.getElementById("courseImage");
    const courseDescription = document.getElementById("courseDescription");

    if (courseName) {
    courseName.textContent = name;
    }

    if (courseImage) {
    courseImage.setAttribute("src", image);
    }

    if (courseDescription) {
    courseDescription.textContent = description;
    }
});
  