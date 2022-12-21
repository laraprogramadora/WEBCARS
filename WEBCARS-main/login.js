function login()
{
    const login = "Lucas";
    const password = "1234";
   
    let loginDig = document.getElementById("username").value;
    let senhaDig = document.getElementById("password").value;

    if(loginDig == login && senhaDig == password){ 
        window.location.href = "index.html";
        let continuarLogado = document.getElementById("remember-me");

        if(continuarLogado){
            document.cookie = "logado=1";

        }

    } else{
        alert("Login inexistente");
    }
} 

function registrar() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let reptpassword = document.getElementById("rept-password").value;

    if(password != reptpassword){
        alert("Você deve digitar senhas iguais!");
    }

}