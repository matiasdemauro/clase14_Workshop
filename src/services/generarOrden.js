
//Esta funcion genera una orden de compra que es un detalle sobre las cantidades y el total de los productos seleccionados.
const ordenGenerada = (nombre, email, telefono , cart,total) => {
  return {
        buyer: {
            nombre: nombre,
            email: email,
            telefono: telefono
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString() 
    }
}

export default ordenGenerada;