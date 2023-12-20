const user = {
    email : 'cuentafili.pind@gmail.com',
    password : 'botero'
}

function getin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email)
    console.log(password)
    if (email == user.email && password == user.password) {
        window.location.href = 'page.html'
    } else {
        location.reload();
    }

}

function getout() {

    window.location.href = 'index.html'
}

const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});