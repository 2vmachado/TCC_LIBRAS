// Lógica para fazer o carrossel funcionar
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

// Avança para a próxima imagem
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Inicialização
showImage(currentIndex);
setInterval(nextImage, 5000); // Troca de imagem a cada 5 segundos
