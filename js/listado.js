localStorage.clear();
let productos = [];

fetch('inventario.json')
  .then((res) => res.json())
  .then((data) => {
    productos = data;
    muestraProductos(productos);
  })

  

const listadoDeProductos = document.getElementById('contenidoProductos')

const muestraProductos = (listado) => {
  listadoDeProductos.innerHTML = '';

  listado.forEach((productos) => {

    const div = document.createElement('div')
    div.className = "productosLista"
    div.classList.add('productos')
    div.innerHTML = `
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${productos.imagen1}" alt="${productos.imagen1}">
                          </div>
                          <div class="carousel-item">
                           <img src="${productos.imagen2}" alt="${productos.imagen2}">
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <p class="tituloCategoria">CATEGORIA: ${productos.categoria}</p>
                        <h6 class="tituloNombre">${productos.nombre}</h6>
                        <p class="tituloCategoria">${productos.descripcion}</p>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item coloredboot">Superficie: ${productos.superficie}</li>
                            <li class="list-group-item coloredboot">Tipo de operación: ${productos.tipooperacion}</li>
                            <li class="list-group-item coloredboot">Precio: USD ${productos.precio}</li>
                          </ul>
                        <div class="card-body">
                         <div class="dropdown">
                           <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Mas info </a>
                         <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                             <a class="dropdown-item colorboot" href="mailto:rodrigo11@live.com.ar">Enviar E-Mail</a>
                             <a class="dropdown-item colorboot" href="${productos.linkagenprop}" target="_blank">Mas sobre la propiedad.</a>
                        </div>
                      </div>
                      </div>
                    </div> `

    listadoDeProductos.appendChild(div)
  })

}


const buscador = document.getElementById('busqueda')
const buscar = (search) => {
  return productos.filter((prod) => prod.categoria.toLowerCase().includes(search))
}
buscador.addEventListener('input', () => {
  const search = buscador.value.trim().toLowerCase()

  if (search === "todos") {
    muestraProductos(productos)
  }
  else if (buscar(search).length === 0) {
    Swal.fire({
      title: `No existen propiedades en la busqueda seleccionada`,
      imageUrl: "../images/imagenes/evinlogo.png",
      text: "Por favor seleccione otras propiedades.",
      imageHeight: 200,
    })
  }
  else {
    muestraProductos(buscar(search))
  }
})