document.addEventListener('DOMContentLoaded', () => {
    // Cargar pictogramas de ejemplo al iniciar (solo demostración)
    fetch('js/data.json')
      .then(response => response.json())
      .then(data => {
        console.log("Datos cargados:", data);
        // Aquí podrías usar los datos para crear pictogramas dinámicamente
      })
      .catch(error => console.error('Error cargando datos:', error));
  });
  function agregarAFavoritos(id) {
    const usuario = JSON.parse(localStorage.getItem('usuarioActivo'));
    if (!usuario.favoritos.includes(id)) {
      usuario.favoritos.push(id);
      localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
      alert('¡Añadido a favoritos!');
    } else {
      alert('¡Ya está en favoritos!');
    }
  }
  