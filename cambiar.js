let imagenActual = 1;

function cambiarImagen(direccion) {
  imagenActual += direccion;
  
  // Obtener el número total de imágenes en el contenedor
  const totalImagenes = document.querySelectorAll('.contenedor img').length;
  
  // Asegurarse de que el índice de la imagen esté dentro del rango válido
  if (imagenActual > totalImagenes) {
    imagenActual = 1;
  } else if (imagenActual < 1) {
    imagenActual = totalImagenes;
  }
  
  // Ocultar todas las imágenes
  const imagenes = document.querySelectorAll('.contenedor img');
  imagenes.forEach((img) => {
    img.style.opacity = 0;
  });
  
  // Mostrar la imagen actual
  const imagenMostrar = document.getElementById(`imagen${imagenActual}`);
  imagenMostrar.style.opacity = 1;
}
