const textElement = document.getElementById('text');
const changeColorButton = document.getElementById('changeColorButton');

let isBlue = false; // Флаг, показывающий, синий ли сейчас цвет

changeColorButton.addEventListener('click', function() {
    if (isBlue) {
        textElement.style.color = 'black';
        isBlue = false; // Изменяем флаг
    } else {
        textElement.style.color = 'blue';
        isBlue = true; // Изменяем флаг
    }
});