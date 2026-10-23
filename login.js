function compareLogin(event){
    event.preventDefault();
    const USERNAME = "Lance";
    const PASSWORD = "0000";
    const userName = document.getElementById("username").value;
    const passWord = document.getElementById("passWord").value;
    const errMessage = document.getElementById("errorMessage").value;

    if(userName === USERNAME && passWord === passWord){
        alert ("TAMA");
        window.location.href = "mess.html";
    }else{
        alert("MALI");
        errMessage.innerHTML = "Invalid username or password";
    }
}

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", compareLogin);