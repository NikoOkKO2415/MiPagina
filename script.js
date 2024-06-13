document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('loginForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var usuario = document.getElementById('usuario').value;
    localStorage.setItem('usuario', usuario);
    window.location.href = 'index.html';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var usuario = localStorage.getItem('usuario');
  if (usuario) {
    document.getElementById('usuarioMostrado').textContent = usuario;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var nombreUsuario = localStorage.getItem('usuario');
  if (nombreUsuario) {
    document.getElementById('nombreUsuario').textContent = nombreUsuario;
  }
});

const likeButtons = document.querySelectorAll('.like-btn');

function handleLikeClick(event) {
  const cardBody = event.target.closest('.card-body');
  const likeCountElement = cardBody.querySelector('.like-count');
  let likeCount = parseInt(likeCountElement.textContent) || 0;
  likeCount++;
  likeCountElement.textContent = likeCount;
}

likeButtons.forEach(button => {
  button.addEventListener('click', handleLikeClick);
});

document.addEventListener("DOMContentLoaded", function() {
  var acceptButtons = document.querySelectorAll('.btn.btn-success');
  acceptButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      this.closest('.friend-request').remove();
    });
  });

  var rejectButtons = document.querySelectorAll('.btn.btn-danger');
  rejectButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      this.closest('.friend-request').remove();
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var darkModeBtn = document.getElementById('modoOscuroBtn');
  darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
});

document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', function () {
  const modoOscuroBtn = document.getElementById('modoOscuroBtn');
  modoOscuroBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Cambiar clases de botones de aceptar y rechazar
    const btnAceptar = document.querySelectorAll('.btn-aceptar');
    const btnRechazar = document.querySelectorAll('.btn-rechazar');

    btnAceptar.forEach(btn => {
      btn.classList.toggle('dark-mode');
    });

    btnRechazar.forEach(btn => {
      btn.classList.toggle('dark-mode');
    });
  });
});

