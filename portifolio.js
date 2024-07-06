function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'cursor';
    elemento.appendChild(cursorSpan); // Adiciona o cursor piscando
  
    textoArray.forEach((letra, i) => {
      setTimeout(() => {
        elemento.insertBefore(document.createTextNode(letra), cursorSpan);
        // Move o cursor para a próxima posição após a letra ser adicionada
        cursorSpan.textContent = textoArray[i + 1] ? '|' : ''; 
      }, 100 * i);
    });
  }
  
  const titulo = document.querySelector('h1');
  typeWriter(titulo);
//projetos
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.grid-item-projeto');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-text');
  const closeModal = document.querySelector('.close');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');

          items.forEach(item => {
              if (filter === 'all') {
                  item.style.display = 'block';
              } else if (item.classList.contains(filter)) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  items.forEach(item => {
      item.addEventListener('click', () => {
          const info = item.getAttribute('data-info');
          modalContent.textContent = info;
          modal.style.display = 'block';
      });
  });

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});
//certificados

  function openModal(pdfUrl) {
    var modal = document.getElementById('myModal');
    var pdfViewer = document.getElementById('pdfViewer');
    var downloadLink = document.getElementById('downloadLink');

    pdfViewer.src = pdfUrl;
    downloadLink.href = pdfUrl;

    modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

//comentario

const testimonials = [
  {
      name: 'Paulo Gomes',
      role: 'Dono da empresa',
      text: 'Executa suas funções com extrema eficiência e eficácia, é focada, praticamente não comete erros, é simpática com os clientes e muito comprometida com os resultados da empresa.'
  },
  {
      name: 'Lavinia Freitas',
      role: 'Companheira de equipe',
      text: 'Trabalhar com você tem sido incrível! Sua liderança no projeto "Interclasse SESI" foi inspiradora, e você sempre sabe como manter a equipe unida e motivada, mesmo diante de desafios de comunicação.'
  },
  {
      name: 'Nilton',
      role: 'Professor do SENAI',
      text: 'Sua sede por conhecimento é admirável. Você constantemente busca aprender novas tecnologias e superar desafios, demonstrando um compromisso impressionante com seu desenvolvimento.'
  }
];

let currentTestimonial = 0;

function updateTestimonial() {
  const testimonial = testimonials[currentTestimonial];
  document.getElementById('my-client-name').textContent = testimonial.name;
  document.getElementById('my-client-role').textContent = testimonial.role;
  document.getElementById('my-testimonial-text').textContent = testimonial.text;
  
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

setInterval(updateTestimonial, 5000); // Troca a cada 5 segundos

document.addEventListener('DOMContentLoaded', updateTestimonial);