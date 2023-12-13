window.addEventListener('load', function() {
  // Comprueba si la página se ha refrescado
  if (sessionStorage.getItem('refreshed')) {
    // Si la página se ha refrescado, oculta el loader inmediatamente
    document.querySelector('.loader').style.display = 'none';
    document.body.classList.add('page-loaded');
  } else {
    // Si la página no se ha refrescado, muestra el loader
    var loader = document.querySelector('.loader');
    loader.style.display = 'block';
    setTimeout(function() {
      loader.style.transition = 'opacity 1s ease-out';
      loader.style.opacity = '0';
      setTimeout(function() {
        loader.style.display = 'none';
      }, 1000); // Debe coincidir con el tiempo de transición en el CSS
      document.body.classList.add('page-loaded');
    }, 2000); // Tiempo mínimo de carga en milisegundos

    // Marca la página como refrescada
    sessionStorage.setItem('refreshed', 'true');
  }
});

var buttonsAndLinks = document.querySelectorAll('button, a');
buttonsAndLinks.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    document.body.classList.add('cursor-large');
  });
  element.addEventListener('mouseout', function() {
    document.body.classList.remove('cursor-large');
  });
});

document.addEventListener('mouseleave', function() {
  document.body.classList.add('cursor-hidden');
});

document.addEventListener('mouseenter', function() {
  document.body.classList.remove('cursor-hidden');
});

document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('cursor-hidden');
});

document.addEventListener('mouseenter', function() {
  document.body.classList.remove('cursor-hidden');
});

const words = ["DEVELOPER", "CREATOR", "DESIGNER"];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      document.querySelector('.typing').textContent += word.shift();
    } else {
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping, 200); // Reduced from 500 to 200
  };
  loopTyping();
};

document.addEventListener('mousemove', function(e) {
  document.body.style.setProperty('--cursor-x', e.clientX + 'px');
  document.body.style.setProperty('--cursor-y', e.clientY + 'px');
});

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.querySelector('.typing').textContent = word.join("");
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 100); // Reduced from 200 to 100
  };
  loopDeleting();
};

typingEffect();

