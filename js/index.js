$(() => {
  setTimeout(() => {
    $('#modalWelcome').modal('show')
  }, 2000)
}
);


$('#modalBienvenida').prepend(` <div class="modal fade" id="modalWelcome" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content modalIndex">
    <div class="modal-header">
      <br>
      <br>

    </div>
    <div class="modal-body">
      <h5>BIENVENIDOS</h5> Gracias por visitarnos.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>
</div>

`);

$('#muestraCarousel').append(`<div id="demo" class="carousel slide carouselEstilado" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active" data-interval="3000">
    <img src="./images/imagenes/1amb/1772512468.jpg" alt="">
  </div>
  <div class="carousel-item" data-interval="3000">
    <img src="./images/imagenes/1amb/dpto1amb.jpg" alt="">
  </div>
  <div class="carousel-item" data-interval="3000">
    <img src="./images/imagenes/1amb/dpto1amb_1.jpg" alt="">
  </div>
  <div class="carousel-item" data-interval="3000">
    <img src="./images/imagenes/1amb/1.jpg" alt="">
  </div>
  <div class="carousel-item" data-interval="3000">
    <img src="./images/imagenes/1amb/2.jpg" alt="">
  </div>
</div>
<a class="carousel-control-prev" href="#demo" data-slide="prev"></a>
<a class="carousel-control-next" href="#demo" data-slide="next"></a>

</div>

`)
