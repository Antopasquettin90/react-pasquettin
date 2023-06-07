import React, { useState } from 'react'

const FormularioCompra = (props) => {

const {total, compras} = props;

const [checkout, setCheckout ] = useState ({
    buyer:{

    email:'',
    nombre:'',
    apellido:'',
    direccion:'',
    telefono:'',
},

total,
items:compras

})

  return (
    <div>
        <form action=""></form>
        <input type="text" name='email'/>
        <input type="text" name='nombre'/>
        <input type="text" name='apellido'/>
        <input type="text" name='direccion'/>
        <input type="text" name='telefono'/>
        <button type='submit'>Comprar</button>
    </div>
  )
}

export default FormularioCompra