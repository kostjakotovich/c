StorageUser = window.localStorage;

let user_data = [];

const login = document.getElementById('buttonLOGIN');

const reg = document.getElementById('buttonREG');

window.addEventListener('load', () => {
    user_data = JSON.parse(localStorage.getItem("user_data") || "[]");
    console.log(user_data)
    render();
});

document.getElementById('buttonREG').addEventListener('click', () => {

    login.style.display = 'none';
    reg.style.display = 'none';

    let vards = document.getElementById("login_div").innerHTML = ` 
    <p><input id="username" class="input" type="text"  maxlength="30" placeholder="Vārds Uzvārds" required 
    style="border: 2px solid black;
    border-radius: 4px;
    background-color: white;
    font: inherit;
    padding: 0.1em 0.3em;"></p>
    <p><input id="password" class="input" type="password" maxlength="30" placeholder="Parole" required style="border: 2px solid black;
    border-radius: 4px;
    background-color: white;
    font: inherit;
    padding: 0.1em 0.3em;"></p>
    <p><input id="passwordCorrect" class="input" type="password" maxlength="30" placeholder="Apstipriniet paroli" required style="border: 2px solid black;
    border-radius: 4px;
    background-color: white;
    font: inherit;
    padding: 0.1em 0.3em;"></p>
    <p><button class="button" id="Registracija" onclick="registracija()" style="font-size: 40px;margin-top: 0%;height: 73px;width: 500px;">Reģistrācija</button></p>
    <p><a href="index.html"><button class="atpakaļ" style="background-color: initial;
    background-image: linear-gradient(#8614f8 0, #760be0 100%);
    border-radius: 5px;
    border-style: none;
    box-shadow: rgba(245, 244, 247, .25) 0 1px 1px inset;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Inter, sans-serif;
    font-size: 36px;
    font-weight: 500;
    height: 70px;
    line-height: 60px;
    margin-left: -4px;
    outline: 0;
    text-align: center;
    transition: all .3s cubic-bezier(.05, .03, .35, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: bottom;
    width: 500px;">Atpakaļ</button></a></p>`;

})

document.getElementById('buttonLOGIN').addEventListener('click', () => {

    login.style.display = 'none';
    reg.style.display = 'none';

    let vards = document.getElementById("login_div").innerHTML = `      
    <p><input id="username" class="input" type="text"  maxlength="30" placeholder="Vārds Uzvārds" required style="border: 2px solid black;
    border-radius: 4px;
    background-color: white;
    font: inherit;
    padding: 0.1em 0.3em;"></p>
    <p><input id="password" class="input" type="password" maxlength="30" placeholder="Parole" required style="border: 2px solid black;
    border-radius: 4px;
    background-color: white;
    font: inherit;
    padding: 0.1em 0.3em;"></p>
    <p><button class="button" id="Login" onclick="Login()" style="font-size: 40px;margin-top: 0%;height: 73px;width: 500px;">Login</button></p>
    <p><a href="index.html"><button class="atpakaļ" style="background-color: initial;
    background-image: linear-gradient(#8614f8 0, #760be0 100%);
    border-radius: 5px;
    border-style: none;
    box-shadow: rgba(245, 244, 247, .25) 0 1px 1px inset;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Inter, sans-serif;
    font-size: 36px;
    font-weight: 500;
    height: 70px;
    line-height: 60px;
    margin-left: -4px;
    outline: 0;
    text-align: center;
    transition: all .3s cubic-bezier(.05, .03, .35, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: bottom;
    width: 500px;">Atpakaļ</button></a></p>`;

})


// Funkcija priekš Login, pārbauda paroli un vārdu
function Login(){

    for(let i = 0; i < user_data.length; i++) {
        login_name = document.getElementById('username').value;

        login_pass = document.getElementById('password').value;

        console.log(login_name)
        console.log(login_pass)

        if(login_name === ""){
            alert("Jūs neievadijāt Jūsu vārdu!")
            return;
        }

        if(login_name === user_data[i].username && login_pass == user_data[i].password){

            window.location = "startpage.html";
            let current_user_name = localStorage.setItem("Current User Name", login_name)
        }

        // if(login_name === "admin" && login_pass == "admin"){

        //    window.location = "/admin_main";
        // }


    }

    username.value = "";
    password.value = "";

}

// Funkcija priekš reģistrācijas, ievada paroli, vārdu un uzvārdu
function registracija(){
    let data = {username: username.value, password: password.value};

    if(password.value !== passwordCorrect.value){
        alert("Jūs neesat verificējis paroli. Paroles nesakrīt!")
    }

    if(username.value === ""){
        alert("Jūs neievadijāt Jūsu vārdu!")
    }

    if(password.value === passwordCorrect.value && password.value != "" && username.value !== ""){
        user_data.push(data);

        render();

        window.location = "index.html";
    }

    username.value = "";
    password.value = "";
    passwordCorrect.value = "";



}

function render() {

    localStorage.setItem("user_data", JSON.stringify(user_data))
}