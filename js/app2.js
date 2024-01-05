let nombre = sessionStorage.getItem('nombre')
console.log(nombre);
document.getElementById('name').innerText = nombre


if (nombre == 'Salome') {

    let divImg = document.getElementById('contentImg');
    casa = users[0].img
    console.log(casa)
      casa.forEach(i => {
        let img = document.createElement('img')
        img.setAttribute('src', i)
        divImg.appendChild(img)     
    });
  
} else if (nombre == 'Salomon'){
    let divImg = document.getElementById('contentImg');
    casa = users[1].img
    console.log(casa)
      casa.forEach(i => {
        let img = document.createElement('img')
        img.setAttribute('src', i)
        divImg.appendChild(img)     
    });
}

function getout() {
    console.log('HOLAAA')
    window.location.href = './index.html'
}

