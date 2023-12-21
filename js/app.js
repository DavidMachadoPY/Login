/* const user = {
    name : 'david',
    email : 'cuentafili.pind@gmail.com',
    password : 'botero'
} */

let users =  [
    {
        name : 'david',
        email : 'd@e.f',
        password : 'botero'
    },
    {
        name : 'Salomon',
        email : 'a@b.c',
        password : 'botero'
    }
]


function getin() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    email.classList.remove('is-valid', 'is-invalid');
    password.classList.remove('is-valid', 'is-invalid');
    
    if (email.value !== '' && password.value !== '' ) {
        email.classList.add('is-valid');
        password.classList.add('is-valid');

        users.forEach((user) => { 
            console.log(user.email)
            console.log(email.value)

            if (user.email == email.value && user.password == password.value ) {
                sessionStorage.setItem('nombre', user.name)
                let nombre = sessionStorage.getItem('nombre')
                 location.href = 'home.html' 
            } else {
                email.classList.remove('is-valid', 'is-invalid');
                password.classList.remove('is-valid', 'is-invalid');
                document.getElementById('msj').innerText = 'CREDENCIALES INCORRECTOS'
                document.getElementById('email').value = ''
                document.getElementById('password').value = ''
            }
        })
        
    } else if (email.value === '' && password.value !== '') {
        email.classList.add('is-invalid');
        password.classList.add('is-valid');
    } else if (password.value === '' && email.value !== '') {
        password.classList.add('is-invalid');
        email.classList.add('is-valid');
    } else {
        email.classList.add('is-invalid');
        password.classList.add('is-invalid');
    }

    



}
