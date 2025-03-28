const textElement = document.getElementById('text');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', function() {
    textElement.innerText = "Привет, DOM!";
});

