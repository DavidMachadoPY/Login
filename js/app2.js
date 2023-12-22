let nombre = sessionStorage.getItem('nombre')
console.log(nombre);
document.getElementById('name').innerText = nombre

if (nombre == 'Salome') {
    let divImg = document.getElementById('contentImg');
    let img = document.createElement('img')
    let imgF = localStorage.getItem('imgF')
    let imgM = localStorage.getItem('imgM')
    console.log(imgF[0])
    console.log(imgM[0])
   
    divImg.appendChild(img)
}

function getout() {
    window.location.href = 'index.html'
}

