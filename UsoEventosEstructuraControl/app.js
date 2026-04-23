const carrito = [];

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = precio;
  }
}

function agregarProducto(carrito, producto, cantidad = 1) {
  const idx = carrito.findIndex(item => item.producto.nombre === producto.nombre);
  
  if (idx !== -1) {
    carrito[idx].cantidad += cantidad;
  } else {
    carrito.push({ producto, cantidad });
  }
  
  mostrarCarrito(carrito);
}

function mostrarCarrito(carrito) {
  const cont = document.getElementById('carrito');
  if (!cont) return;

  cont.innerHTML = '';

  if (carrito.length === 0) {
    cont.innerHTML = '<p class="subtitle">NO HAY OBJETOS EN EL INVENTARIO</p>';
    return;
  }

  const ul = document.createElement('ul');
  let total = 0;

  carrito.forEach(item => {
    const li = document.createElement('li');
    const subtotal = item.producto.precio * item.cantidad;
    
    // Formato estilo lista de Pip-Boy
    li.innerHTML = `
      <span class="tarea-nombre">${item.producto.nombre} x${item.cantidad}</span>
      <span>${subtotal.toFixed(2)} CAPS</span>
    `;
    
    ul.appendChild(li);
    total += subtotal;
  });

  cont.appendChild(ul);

  const resumen = document.createElement('div');
  resumen.className = 'stats';
  resumen.innerHTML = `
    <p>------------------------------------</p>
    <p>TOTAL NETO: ${total.toFixed(2)} CHAPAS (CAPS)</p>
    <p>ESTADO DE CARGA: ESTABLE</p>
  `;
  cont.appendChild(resumen);
}

// Event Listener del Formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const cantidad = parseInt(document.getElementById('cantidad').value);
  
  agregarProducto(carrito, new Producto(nombre, precio), cantidad);
  
  // Limpia el input 
  this.reset();
  document.getElementById('nombre').focus();
});