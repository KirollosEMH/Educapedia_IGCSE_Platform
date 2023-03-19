let btn1 = document.getElementById("edit_btn");
let num = 0;
let email = document.getElementById("Ex_Email");
let pass = document.getElementById("Ex_Password");
let Name = document.getElementById("Ex_Name");
let phone = document.getElementById("Ex_Number");
let p_phone = document.getElementById("Ex_Parent_Number");
let address = document.getElementById("Ex_Address");
let zip = document.getElementById("Zip Code");
let gender = document.getElementById("Gender");
let imgUpload = document.getElementById("file-ip-1");
let lblImg = document.getElementById("labelforImg");
lblImg.style.opacity = "0";
btn1.onclick = function () {
    num++;
    if (num % 2 != 0) {
        window.alert("You Can Change your Profile")
        btn1.innerHTML = "Save";
        remove(email);
        remove(pass);
        remove(Name);
        remove(phone);
        remove(p_phone);
        remove(address);
        remove(zip);
        gender.removeAttribute("disabled");
        imgUpload.removeAttribute("disabled");
        lblImg.style.opacity = "1";
    }
    else if (num %2 == 0) {
        btn1.innerHTML = "Update";
        setreadOnly(email);
        setreadOnly(pass);
        setreadOnly(Name);
        setreadOnly(phone);
        setreadOnly(p_phone);
        setreadOnly(address);
        setreadOnly(zip);
        gender.disabled = true;
        imgUpload.disabled = true;
        lblImg.style.opacity = "0";
        window.alert("Changes Saved");

    }
}
function remove(x) {
    x.removeAttribute("readonly");
}
function setreadOnly(x){
    x.readOnly = true;
}
