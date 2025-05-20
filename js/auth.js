function loginUsuario() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.email === email && u.password === password);
  
    if (usuario) {
      localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
      alert('¡Login exitoso!');
      window.location.href = "../index.html"; // Te lleva a la página principal
      return false;
    } else {
      alert('Correo o contraseña incorrectos');
      return false;
    }
  }
  function registrarUsuario() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!nombre || !email || !password) {
      alert("Por favor, rellena todos los campos");
      return false;
    }
  
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    const existe = usuarios.find(u => u.email === email);
    if (existe) {
      alert("Este correo ya está registrado");
      return false;
    }
  
    const nuevoUsuario = { nombre, email, password, favoritos: [] };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
    alert("¡Registro exitoso! Ahora puedes iniciar sesión");
    window.location.href = "login.html"; // Te lleva al login
  
    return false;
  }
  