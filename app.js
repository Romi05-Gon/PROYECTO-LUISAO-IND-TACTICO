
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn-login');
  const emailInput = document.querySelector('input[type="email"]');
  const passInput = document.querySelector('input[type="password"]');

  btn.addEventListener('click', async () => {
    const nombre_usuario = emailInput.value.trim();
    const contraseña = passInput.value.trim();


    if (!nombre_usuario || !contraseña) {
      alert('Completa todos los campos.');
      return;
    }

    
    if (nombre_usuario === "admin" && contraseña === "12345") {
      window.location.href = 'index.html';
      return; // importante: evitar que siga al fetch
    }

  
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ nombre_usuario, contraseña })
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        localStorage.setItem('usuario', JSON.stringify(data.user));
        window.location.href = 'index.html';
      } else {
        alert(data.error || 'Credenciales incorrectas');
      }
    } catch (e) {
      alert('Error servidor');
      console.error(e);
    }
  });
}); 

