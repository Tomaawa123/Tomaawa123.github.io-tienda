const stockProductos = [{
        id: 1,
        nombre: "Acordeon HOHNER CONCERTO III",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 7307543,
        img: "img/acordeon.jpg",
    },
    {
        id: 2,
        nombre: "Arpa",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 465990,
        img: "img/arpa.jpg",
    },
    {
        id: 3,
        nombre: "Bajo",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 179990,
        img: "img/bajo.jpg",
    },
    {
        id: 4,
        nombre: "Bateria",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 599990,
        img: "img/bateria.jpeg",
    },
    {
        id: 5,
        nombre: "Bateria electrica",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 253990,
        img: "img/bateriaelectrica.jpg",
    },
    {
        id: 6,
        nombre: "Teclado EK-50",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 379680,
        img: "img/ek50.jpg",
    },
    {
        id: 7,
        nombre: "Guitarra clasica",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 37990,
        img: "img/guitarraclasica.jpg",
    },
    {
        id: 8,
        nombre: "Guitarra electrica",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 209990,
        img: "img/guitarraelectrica.jpg",
    },
    {
        id: 9,
        nombre: "Guitarra electrica 4 mangos",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 469990,
        img: "img/guitarraelectrica4.jpg",
    },
    {
        id: 10,
        nombre: "Guitarra electro acustica",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 49990,
        img: "img/guitarraelectroacustica.jpg",
    },
    {
        id: 11,
        nombre: "Handpan",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 227808,
        img: "img/handpan.jpg",
    },
    {
        id: 12,
        nombre: "Kalimba",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 14990,
        img: "img/kalimba.jpg",
    },
    {
        id: 13,
        nombre: "Mezcladora de audio",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 103501,
        img: "img/mezcladoraudio.jpg",
    },
    {
        id: 14,
        nombre: "Microfono condensador",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 88990,
        img: "img/microfono.jpg",
    },
    {
        id: 15,
        nombre: "Acordeon HOHNER CONCERTO II",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 1599990,
        img: "img/acordeon.jpg",
    },
    {
        id: 16,
        nombre: "Parlante Onyx",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 159990,
        img: "img/onyx.jpg",
    },
    {
        id: 17,
        nombre: "Teclado PA1000",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo productoTeclado KORG PA1000",
        precio: 1729452,
        img: "img/pa1000.jpg",
    },
    {
        id: 18,
        nombre: "Parlante",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 29990,
        img: "img/parlante.png",
    },
    {
        id: 19,
        nombre: "Piano",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 15229900,
        img: "img/piano.png",
    },
    {
        id: 20,
        nombre: "Guitarra Pikasso",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 509990,
        img: "img/pikaso.jpg",
    },
    {
        id: 21,
        nombre: "Trompeta",
        cantidad: 1,
        desc: "Trompeta Yamaha <p>Presiona las veces que quieras llevar el mismo producto</p>",
        precio: 325000,
        img: "img/trompeta.jpg",
    },
    {
        id: 22,
        nombre: "Trompeta 4 pistones",
        cantidad: 1,
        desc: "Trompeta Piccolo <p>Presiona Agregar las veces que quieras llevar el mismo producto</p>",
        precio: 4080533,
        img: "img/trompeta4.jpg",
    },
    {
        id: 23,
        nombre: "Violin",
        cantidad: 1,
        desc: "Presiona las veces que quieras llevar el mismo producto",
        precio: 49990,
        img: "img/violin.png",
    },
];

let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    mostrarCarrito();
    document.querySelector("#activarFuncion").click(procesarPedido);
});
if (formulario) {
    formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
        carrito.length = [];
        mostrarCarrito();
    });
}

if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
        if (carrito.length === 0) {
            Swal.fire({
                title: "¡Tu carrito está vacio!",
                text: "Compra algo para continuar con la compra",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        } else {
            location.href = "compra.html";
        }
    });
}


stockProductos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedor) {
        contenedor.innerHTML += `
    <div class="card mt-3 item">
    <div id="content">
    <a onmousedown="playAudio()" href="#${id}" class="wiggle"><img  class="card-img-top mt-2 item-img" src="${img}" />Ver imagen</a>
    <div class="lightbox short-animate" id="${id}">
            <img class="long-animate" src="${img}" />
        </div>
        <div id="lightbox-controls" class="short-animate">
            <a onmousedown="playAudio3()" id="close-lightbox" class="long-animate" href="#!">Close Lightbox</a>
        </div>
        </div>
    <div class="card-body">
    <h3 class="card-title">${nombre}</h3>
    <h4 class="card-text">Precio: ${precio}</h4>
    <p class="card-text">Descripcion: ${desc}</p>
    <p class="card-text">Cantidad: ${cantidad}</p>
    <button onmousedown="playAudio()" class="btn btn-primary agregar" onclick="agregarProducto(${id})">Agregar<i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
  </div>
</div>


  `;




    }
});



const agregarProducto = (id) => {
    const existe = carrito.some(prod => prod.id === id)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === id)
        carrito.push(item)
    }
    mostrarCarrito()

};

const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    if (modalBody) {
        modalBody.innerHTML = "";
        carrito.forEach((prod) => {
            const { id, nombre, precio, desc, img, cantidad } = prod;
            console.log(modalBody);
            modalBody.innerHTML += `
    <div class="modal-contenedor">
      <div>
      <img class="img-fluid img-carrito" src="${img}"/>
      </div>
      <div>
      <p>Producto: ${nombre}</p>
    <p>Precio: ${precio}</p>
    <p>Cantidad :${cantidad}></p>
    <button class="btn btn-danger" onmousedown="playAudio()"  onclick="eliminarProducto(${id})">Eliminar producto<i class="fa-sharp fa-solid fa-trash"></i><i class="fa-sharp fa-solid fa-circle-xmark" style="color: black;"></i></button>
      </div>
    </div>
    

    `;
        });
    }

    if (carrito.length === 0) {
        console.log("Nada");
        modalBody.innerHTML = `
  <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
  `;
    } else {
        console.log("Algo");
    }
    carritoContenedor.textContent = carrito.length;

    if (precioTotal) {
        precioTotal.innerText = carrito.reduce(
            (acc, prod) => acc + prod.cantidad * prod.precio,
            0
        );
    }

    guardarStorage();
};

function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    mostrarCarrito();
}

function procesarPedido() {
    carrito.forEach((prod) => {
        const listaCompra = document.querySelector("#lista-compra tbody");
        const { id, nombre, precio, img, cantidad } = prod;
        if (listaCompra) {
            const row = document.createElement("tr");
            row.innerHTML += `
            <tr>
            <td>
            <img class="img-fluid img-carrito" src="${img}" height="95" width="95"/>
            </td>
            <td>|${nombre}|</td>
          <td>|$${precio}|</td>
          <td>|${cantidad}|</td>
          <td>|$${precio * cantidad}|</td>
          </tr>
          `;

            listaCompra.appendChild(row);

        }
    });
    totalProceso.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
    );
}

function enviarCompra(e) {
    e.preventDefault()
    const cliente = document.querySelector('#cliente').value
    const email = document.querySelector('#correo').value

    if (email === '' || cliente == '') {
        Swal.fire({
            title: "¡Debes completar tu email y nombre!",
            text: "Rellena el formulario",
            icon: "error",
            confirmButtonText: "Aceptar",
        })
    } else {
        const btn = document.getElementById('button');

        document.getElementById('procesar-pago')
            .addEventListener('submit', function(event) {
                event.preventDefault();

                btn.value = 'Enviando...';

                const serviceID = 'default_service';
                const templateID = 'template_8laaiqt';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        btn.value = 'Finalizar compra';
                        alert('Correo enviado!');
                    }, (err) => {
                        btn.value = 'Finalizar compra';
                        alert(JSON.stringify(err));
                    });
            })



        const spinner = document.querySelector('#spinner')
        spinner.classList.add('d-flex')
        spinner.classList.remove('d-none')

        setTimeout(() => {
            spinner.classList.remove('d-flex')
            spinner.classList.add('d-none')
            formulario.reset()

            const alertExito = document.createElement('p')
            alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
            alertExito.textContent = 'Compra realizada correctamente'
            formulario.appendChild(alertExito)

            setTimeout(() => {
                alertExito.remove()
            }, 3000)


        }, 3000)
    }
    localStorage.clear()
}
/* $("#open").click(function() {
    $("#a").css("display", "block");
    $("#b").css("display", "block");
});


$(".cancel").click(function() {
    $("#a").fadeOut();
    $("#b").fadeOut();
}); */

const mensaje = Document.getElementById('textarea')
mensaje.addEventListener('change', escribir)

function escribir() {


    const { id, nombre, precio, img, cantidad } = prod;
    const div = document.createElement("div");
    div.innerHTML = `<div class="compra">
<h1>Compra realizada Correctamente</h1>
<p>
<p>${img}</p>
<p>${nombre}</p>
<p>$${precio}</p>
<p>Cantidad:${cantidad}</p>
<p>${precio * cantidad}</p>
</p></div> `
}

console.log("compra")