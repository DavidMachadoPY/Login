/* const user = {
    name : 'david',
    email : 'cuentafili.pind@gmail.com',
    password : 'botero'
} */

let users =  [
    {
        name : 'Salome',
        email : 'd@e.f',
        password: '123',
        gender: 'femenino',
        img:['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg','img/img6.jpg','img/img7.jpg','img/img8.jpg']
    },
    {
        name : 'Salomon',
        email : 'a@b.c',
        password: '123',
        gender: 'masculino',
        img:['img/img9.jpg','img/img10.jpg','img/img11.jpg','img/img12.jpg','img/img13.jpg','img/img14.jpg']
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

            if (email.value == user.email  && password.value == user.password ) {
                sessionStorage.setItem('nombre', user.name)
                sessionStorage.setItem('genero', user.gender)
                /* localStorage.setItem('imgF', JSON.stringify(users[0].img))
                localStorage.setItem('imgM', JSON.stringify(users[1].img)) */
                location.href = 'home.html';
            } else {
                console.log("NO SON IGUALES");
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
