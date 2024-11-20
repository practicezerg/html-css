const images = [
    'files/pic/slide_0.svg',
    'files/pic/slide_1.svg',
    'files/pic/slide_2.svg',
    'files/pic/slide_3.svg',
];

let currentIndex = 0;

const currentImage = document.getElementById('image');
const leftArrow = document.getElementById('image_left');
const rightArrow = document.getElementById('image_right');

function updateImage() {
    // Обновляем изображение
    currentImage.src = images[currentIndex];
    currentImage.style.opacity = 0; // Скрываем текущее изображение перед обновлением

    setTimeout(() => {
        currentImage.style.opacity = 1; // Показываем новое изображение
    }, 100); // Задержка для плавного перехода

    // Управляем видимостью стрелок
    if (currentIndex === 0) {
        leftArrow.style.visibility = 'hidden'; // Скрываем стрелку "влево"
    } else {
        leftArrow.style.visibility = 'visible'; // Показываем стрелку "влево"
    }

    if (currentIndex === images.length - 1) {
        rightArrow.style.visibility = 'hidden'; // Скрываем стрелку "вправо"
    } else {
        rightArrow.style.visibility = 'visible'; // Показываем стрелку "вправо"
    }
}

// Обработчики событий
rightArrow.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++; // Увеличиваем индекс
        updateImage();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Уменьшаем индекс
        updateImage();
    }
});

// Инициализация
updateImage(); // Устанавливаем первое изображение
