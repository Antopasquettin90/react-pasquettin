import React from 'react';

const Imagenes = () => {
  return (
    <div>
      <div className="tracking-in-contract">
        <h2 className="titulos text-center tamaños-titulos-grandes">Imágenes</h2>
      </div>
      <div className="separar container-fluid text-center">
        <div className="row align-items-start text-white tamaños-letras-chicas">
          <div className="col mt-4">
            <img src="imagenes/quijote1_fotos.jpg" height="250px" width="" className="img-fluid tilt-in-fwd-tr" alt="Imagen 1" />
          </div>
          <div className="col-6 mt-4">
            <img src="imagenes/quijote2_fotor.jpg" height="250px" width="" className="img-fluid tilt-in-fwd-tr" alt="Imagen 2" />
          </div>
          <div className="col-6 mt-4">
            <img src="imagenes/quijote3_fotor.jpg" height="250px" width="" className="img-fluid tilt-in-fwd-tr" alt="Imagen 3" />
          </div>
          <div className="col-6 mt-4">
            <img src="imagenes/quijote4_fotor.jpg" height="250px" width="" className="img-fluid tilt-in-fwd-tr" alt="Imagen 4" />
          </div>
          <div className="col-6 mt-4">
            <img src="imagenes/quijote5_fotor.jpg" height="250px" width="" className="img-fluid tilt-in-fwd-tr" alt="Imagen 5" />
          </div>
          <div className="col-6 mt-4">
            <img src="imagenes/quijote6_fotor.jpg" height="250px" width="" className="img-fluid tilt-in-fwd-tr" alt="Imagen 6" />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col mt-4">
              <p className="vibrate-5 tamaños-letras-chicas text-white text-center">
                Buscate en nuestros álbumes de fotos
              </p>
              <a href="https://www.facebook.com/quijotedisco/photos/?ref=page_internal&tab=album" className="fa-brands fa-facebook text-decoration text-white vibrate-5"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imagenes;
