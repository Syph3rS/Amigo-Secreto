// app.js
const amigos = [];

function renderLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';
  amigos.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    ul.appendChild(li);
  });
  // cada vez que cambia la lista, limpio el resultado
  document.getElementById('resultado').innerHTML = '';
}

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = (input.value || '').trim();

  if (!nombre) {
    alert('Por favor, ingrese un nombre válido.');
    return;
  }
  // evitar duplicados (opcional, pero útil)
  const existe = amigos.some(n => n.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    alert('Ese nombre ya está en la lista.');
    return;
  }

  amigos.push(nombre);
  input.value = '';
  input.focus();
  renderLista();
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Agrega al menos 2 nombres para sortear.');
    return;
  }
  const idx = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[idx];

  const res = document.getElementById('resultado');
  res.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `🎁 Tu amigo secreto es: ${elegido}`;
  res.appendChild(li);
}

// Calidad de vida: Enter para añadir
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('amigo');
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });
});
