// This is the user class that is used to create a user object.
class User { 
    constructor(id, name, username, email, password, phone, parentPhone, school) {
      this.id = id;
      this.name = name;
      this.username = username;
      this.email = email;
      this.password = password;
      this.phone = phone;
      this.parentPhone = parentPhone;
      this.school = school;
    }
}

// This file is used to display the user information on the user page.
const users = [
  new User(1, "John Smith", "jsmith", "jsmith@email.com", "password123", "555-1234", "555-5678", "ABC High School"),
  new User(2, "Jane Doe", "jdoe", "jdoe@email.com", "password456", "555-4321", "555-8765", "XYZ High School"),
  new User(3, "Bob Johnson", "bjohnson", "bjohnson@email.com", "password789", "555-5678", "555-4321", "LMN High School"),
  new User(4, "Sarah Davis", "sdavis", "sdavis@email.com", "passwordabc", "555-8765", "555-1234", "EFG High School"),
  new User(5, "David Lee", "dlee", "dlee@email.com", "passworddef", "555-9876", "555-3456", "UVW High School"),
  new User(6, "Emily Chen", "echen", "echen@email.com", "passwordegf", "555-2345", "555-7890", "HIJ High School"),
  new User(7, "Michael Brown", "mbrown", "mbrown@email.com", "passwordhij", "555-3456", "555-2345", "OPQ High School"),
  new User(8, "Karen Johnson", "kjohnson", "kjohnson@email.com", "passwordklm", "555-6789", "555-9012", "RST High School"),
  new User(9, "Kevin Kim", "kkim", "kkim@email.com", "passwordnop", "555-9012", "555-6789", "FGH High School"),
  new User(10, "Jessica Wong", "jwong", "jwong@email.com", "passwordqrs", "555-3456", "555-6789", "TUV High School")
];

// This is a list of courses that are available to the user.
const COURSES = [ 
    { name: "Pure 1", isOpen: false },
    { name: "Pure 2", isOpen: false },
    { name: "Pure 3", isOpen: false }
];

// This is a list of courses that the user is enrolled in.
const urlParams = new URLSearchParams(window.location.search);

// This is a function that is used to get the user information from the user page.
const id = parseInt(urlParams.get("id"));
const user = users.find(user => user.id === id);
const div = document.getElementById("info");
const NAME = document.createElement("h2")
NAME.textContent = "Name: " + user.name;
NAME.style.color = "white";div.appendChild(NAME);

const BR = document.createElement("br"); 

const ID = document.createElement("h2")
ID.textContent = "ID: " + user.id;
ID.style.color = "white";
div.appendChild(ID);

const EMAIL = document.createElement("h2")
EMAIL.textContent = "Email: " + user.email;
EMAIL.style.color = "white";
div.appendChild(EMAIL);

const USERNAME = document.createElement("h2")
USERNAME.textContent = "Username: " + user.username;
USERNAME.style.color = "white";
div.appendChild(USERNAME);


const PASSWORD = document.createElement("h2")
PASSWORD.textContent = "Password: " + user.password;
PASSWORD.style.color = "white";
div.appendChild(PASSWORD);

  
const COURSE_CONTAINER = document.createElement("div");
COURSE_CONTAINER.classList.add("course-container");
  
const COURSES_HEADING = document.createElement("h2");
COURSES_HEADING.textContent = "Courses";
COURSES_HEADING.style.color = "white";
COURSE_CONTAINER.appendChild(COURSES_HEADING);

// This is a function that is used to display the courses that the user is enrolled in.
COURSES.forEach((course) => {
    const COURSE_DIV = document.createElement("div");
    COURSE_DIV.classList.add("course");
    COURSE_CONTAINER.appendChild(COURSE_DIV);
  
    const COURSE_NAME = document.createElement("h3");
    COURSE_NAME.textContent = course.name;
    COURSE_NAME.style.color = "white";
    COURSE_DIV.appendChild(COURSE_NAME);
  
    const COURSE_TOGGLE_BUTTON = document.createElement("button");
    COURSE_TOGGLE_BUTTON.classList = "btn btn-primary"
    COURSE_TOGGLE_BUTTON.textContent = course.isOpen ? "Close Access" : "Open Access";
    COURSE_TOGGLE_BUTTON.addEventListener("click", () => {
      course.isOpen = !course.isOpen;
      COURSE_TOGGLE_BUTTON.textContent = course.isOpen ? "Close Access" : "Open Access";
    });
    COURSE_DIV.appendChild(COURSE_TOGGLE_BUTTON);
});
  
div.appendChild(COURSE_CONTAINER);

div.appendChild(BR)
// This is a button that is used to suspend the user account.
const SUSPEND_BTN = document.createElement("button");
SUSPEND_BTN.textContent = "Suspend Account";
SUSPEND_BTN.classList ="btn btn-primary";
SUSPEND_BTN.addEventListener("click", toggleSuspend);
div.appendChild(SUSPEND_BTN);
function toggleSuspend() {
  if (user.isSuspended) {
    user.isSuspended = false;
    SUSPEND_BTN.textContent = "Suspend Account";
  } else {
    user.isSuspended = true;
    SUSPEND_BTN.textContent = "Reopen Account";
  }
}
