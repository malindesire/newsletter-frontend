const menu = document.getElementById("menu");
const content = document.getElementById("content");
const footer = document.getElementById("footer");


// ----------------- Log-in Page ------------------------
let logIn = `<h1 id='heading'>Nyhetsbrevet</h1><p>Logga in! <input id='userNameInput' type='text' placeholder='E-mail'><input id='passwordInput' type='password' placeholder='Lösenord'><button id='logInBtn'>Logga in</button></p>`;

let welcomeMsg = `<h2>Hej!</h2><p>Välkommen att logga in</p>`;

let regNewUser = `<fieldset><legend>Får du inte nyhetsbrevet? Men skapa ett konto då!</legend><input id='newUser' type='text' placeholder='E-mail'><input id='newPassword' type='text' placeholder='Lösenord'><input id='firstName' type='text' placeholder='Förnamn'><input id='lastName' type='text' placeholder='Efternamn'><br><input type='checkbox' id='subscribes' name='subscribes' value=true><label for='subscribes'> Jag vill gärna ha nyhetsbrevet!</label><br><button id='addUserBtn'>Skapa ett konto</button></fieldset>`;


// ----------------- if-statment to show the correct page ------------------------
if (localStorage.getItem("storageUser") == null) {
    logInPage();
} else {
    logOutPage();
}

// ----------------- Functions ------------------------
// ----------------- Displays logInPage ------------------------
function logInPage() {
    document.getElementById("menu").innerHTML = logIn;
    document.getElementById("content").innerHTML = welcomeMsg;
    content.insertAdjacentHTML("beforeend", regNewUser);

    logInBtn.addEventListener("click", function(){ 

        fetch("http://localhost:3000/api/user")
            .then(res => res.json())
            .then(data => console.log(data))



    });

    addUserBtn.addEventListener("click", function() {

        fetch("http://localhost:3000/api/user", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))

    });
};