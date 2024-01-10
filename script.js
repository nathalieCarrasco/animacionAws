let followMouse = false;

document.addEventListener('mousemove', function(event) {
  if (followMouse) {
    const rocket = document.getElementById('rocket');
    const destello = document.createElement('div');
    
    destello.className = 'destello';
    destello.style.left = event.clientX + 'px';
    destello.style.top = event.clientY + 'px';
    
    document.body.appendChild(destello);
    
    setTimeout(() => {
      destello.remove();
    }, 300);
    
    rocket.style.left = event.clientX - 20 + 'px';
    rocket.style.bottom = (window.innerHeight - event.clientY) + 'px';
  }
});

function launchRocket() {
  followMouse = true;
  let rocket = document.getElementById('rocket');
  rocket.style.bottom = '100%';
  
  document.body.style.backgroundColor = 'orange';
  
  // Mostrar el texto
  document.querySelector('h1').style.display = 'block';
  
  const elementos = document.querySelectorAll('.object');
  elementos.forEach((elemento) => {
    elemento.classList.add('show');
    
    // Posiciones y transiciones aleatorias para efecto espacial
    elemento.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    elemento.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    
    if (elemento.id === 'planeta') {
      elemento.style.animation = 'movePlanet 3s infinite alternate';
    } else if (elemento.id === 'estrella') {
      elemento.style.animation = 'expandStar 3s infinite alternate';
    }
  });
  
  document.querySelector('button').style.display = 'none'; // Oculta el botón
  document.querySelector('h1').innerText = 'Bienvenido a los despliegues en la nube'; // Cambia el texto
  document.querySelector('h1').style.fontSize = '48px'; // Ajusta el tamaño de fuente
}

// Animaciones CSS
document.styleSheets[0].insertRule(`
  @keyframes movePlanet {
    from { left: 0; }
    to { left: calc(100% - 50px); }
  }
`, 0);

document.styleSheets[0].insertRule(`
  @keyframes expandStar {
    from { transform: scale(1); }
    to { transform: scale(1.5); }
  }
`, 0);