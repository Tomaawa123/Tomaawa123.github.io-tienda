let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}


function pay() {
    location.href = "compra.html"
}

function payy() {
    window.alert(products.join(", \n"));
    location.href = "nocompra.html"
}


function sonidoAgregar() {
    document.getElementById('audio-agregar1').play()
}

// sonidoAgregar()

function sonidoQuitar() {
    document.getElementById('audio-quitar2').play()
}

function sonidoCambiar() {
    document.getElementById('audio-cambiar').play()
}

//////////////////////////////////
const botonIrCarrito = document.getElementById('boton-ir-carrito')
const botonVolverMenu = document.getElementById('boton-volver-menu')

const seccion1 = document.getElementById('seccion-1')
const seccion2 = document.getElementById('seccion-2')

botonIrCarrito.addEventListener('click', () => {
    sonidoCambiar()

    seccion1.style.display = 'none'
    seccion2.style.display = 'initial'
})

botonVolverMenu.addEventListener('click', () => {
    sonidoCambiar()

    seccion1.style.display = 'initial'
    seccion2.style.display = 'none'
})

const boton = document.getElementById('botonxd')
const audio = document.getElementById('audio-agregar1')

boton.addEventListener('click', sonar)

function sonar() {
    audio.play()
}

//////////////////////////
document.getElementById("audiobackground").volume = 0.5
    ////////////////////////////
var x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}
////////////////////////
function mostrar() {
    document.getElementById('premio').style.display = 'block';
    document.getElementById('triste').style.display = 'none';
}

function ocultar() {
    document.getElementById('premio').style.display = 'none';
    document.getElementById('triste').style.display = 'block';
}
//////////////////////////////
let button = document.querySelector(".reproductor")

button.addEventListener("click", () => {
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", "./sounds/agregar1.wav")
        etiquetaAudio.play()
    })
    /////////////////////
function mostrar() {
    div = document.getElementById('flotante');
    div.style.display = '';
}

function cerrar() {
    div = document.getElementById('flotante');
    div.style.display = 'none';
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "./sounds/agregar1.wav")
    etiquetaAudio.play()


}));