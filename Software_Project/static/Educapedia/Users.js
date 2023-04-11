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

const table = document.getElementById("user-table");

users.forEach(user => {
  const row = document.createElement("tr");
  const idCell = document.createElement("td");
  idCell.textContent = user.id;
  row.appendChild(idCell);

  const nameCell = document.createElement("td");
  nameCell.textContent = user.name;
  row.appendChild(nameCell);

  const usernameCell = document.createElement("td");
  usernameCell.textContent = user.username;
  row.appendChild(usernameCell);

  const passwordCell = document.createElement("td");
  passwordCell.textContent = user.password;
  row.appendChild(passwordCell);

  const emailCell = document.createElement("td");
  emailCell.textContent = user.email;
  row.appendChild(emailCell);

  const phoneCell = document.createElement("td");
  phoneCell.textContent = user.phone;
  row.appendChild(phoneCell);

  const parentPhoneCell = document.createElement("td");
  parentPhoneCell.textContent = user.parentPhone;
  row.appendChild(parentPhoneCell);

  const schoolCell = document.createElement("td");
  schoolCell.textContent = user.school;
  row.appendChild(schoolCell);

  const buttonCell = document.createElement("td");
  const button = document.createElement("button");
  button.textContent = "Manage";
  button.style.backgroundColor = "green";
  button.style.color = "white";
  button.style.borderRadius = "7px";
  button.addEventListener("click", () => {
    const rowId = row.getAttribute("id");
    window.location.href = `UserControlInfo.html?id=${user.id}`;
  });  
  buttonCell.appendChild(button);
  row.appendChild(buttonCell);

  table.appendChild(row);
});
