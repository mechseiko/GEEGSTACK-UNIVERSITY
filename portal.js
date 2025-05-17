document.addEventListener("DOMContentLoaded", function() {
    // LOGIN PAGE
    const loginPage = document.getElementById("loginPage")
    const names = document.getElementById("names")
    const matric = document.getElementById("matrics")
    const password = document.getElementById("passwords")
    const email = document.getElementById("emails")
    const submitBtn = document.getElementById("submitBtn")


    // PORTAL PAGE
    const portalPage = document.getElementById("portalPage")
    const welcome = document.getElementById("welcome")
    const details = document.getElementById("details")
    const schoolDisplay = document.getElementById("schoolDisplay")
    const nameDisplay = document.getElementById("nameDisplay")
    const matricDisplay = document.getElementById("matricDisplay")
    const partDisplay = document.getElementById("partDisplay")
    const departmentDisplay = document.getElementById("departmentDisplay")
    const facultyDisplay = document.getElementById("facultyDisplay")
    const emailDisplay = document.getElementById("emailDisplay")


    portalPage.style.display = "none"
    submitBtn.onclick = function() {
        const nameValue = names.value
        const matricValue = matric.value
        const passwordValue = password.value
        const emailValue = email.value

        if(nameValue === "" || matricValue === "" || passwordValue === "" || emailValue === "") {
            alert("Please fill out all fields.")
            return;
        }
        loginPage.style.display = "none"
        portalPage.style.display = "inline"
        welcome.innerHTML = `Welcome, <i>${nameValue.split(" ")[0]}</i>`
        schoolDisplay.innerHTML = "GEEGSTACK UNIVERSITY"
        nameDisplay.innerHTML = `<u>Fullname</u>: <i>${nameValue}</i>`
        matricDisplay.innerHTML = `<u>Matric Number</u>: <i>${matricValue}</i>`
        partDisplay.innerHTML = "<u>Current Level</u>: <i>400 level</i>"
        departmentDisplay.innerHTML = "<u>Department</u>: <i>Department of Mechanical Engineering</i>"
        facultyDisplay.innerHTML = "<u>Faculty</u>: <i>Technology</i>"
        emailDisplay.innerHTML = `<u>Student Email</u>: <i>${emailValue}</i>`
    }
    document.getElementById("year").innerHTML = new Date().getFullYear();
})
