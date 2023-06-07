// FinalizarCompra.js
import React from 'react';

const FinalizarCompra = () => {
  // Lógica para enviar el correo electrónico con los datos de la compra

  return (
    <div>
      <h2>Confirmación Final de Compra</h2>
      {/* Mostrar aquí el resumen de los datos del cliente, detalles del pago y total a pagar */}
      <button onClick={() => alert('Gracias por realizar su compra')}>
        Confirmar
      </button>
    </div>
  );
};

export default FinalizarCompra;
