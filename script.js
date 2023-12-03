document.addEventListener("DOMContentLoaded", function () {
    let variantNumber = 1; // Replace with your variant number

    function changeColors(element) {
        let backgroundColor = getRandomColor();
        let textColor = getRandomColor();

        element.style.backgroundColor = backgroundColor;
        element.style.color = textColor;
    }

    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function handleClick(event) {
        let elements = document.querySelectorAll("div");

        elements.forEach((element, index) => {
            element.removeEventListener("click", handleClick);

            if ((index % 10) + 1 === variantNumber) {
                element.addEventListener("click", function () {
                    changeColors(this);
                    handleClick();
                });
            } else {
                element.addEventListener("click", function () {
                    changeColors(this);
                    handleClick();
                });
            }
        });

        // Check if the clicked element has an ID
        if (event.target.id) {
            document.getElementById(event.target.id).addEventListener("click", function () {
                changeColors(this);
                handleClick();
            });
        } else {
            // If the clicked element doesn't have an ID, use querySelector()
            document.querySelector("div").addEventListener("click", function () {
                changeColors(this);
                handleClick();
            });
        }

        changeColors(event.target);
        handleClick();
    }

    document.getElementById("element1").addEventListener("click", handleClick);
    document.getElementById("element2").addEventListener("click", handleClick);
});

// Отримання посилання на зображення та створення змінної для зберігання розміру зображення
var image = document.querySelector('myImage');
var imageSize = 100;
let currentScale = 1;

// Функція для додавання кнопок та їх функціональності
function addButtons() {
    // Створення кнопок
    var addButton = document.createElement('button');
    addButton.textContent = 'Додати';

    var increaseButton = document.createElement('button');
    increaseButton.textContent = 'Збільшити';

    var decreaseButton = document.createElement('button');
    decreaseButton.textContent = 'Зменшити';

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';

    // Додавання обробників подій для кожної кнопки
    addButton.addEventListener('click', addImage);
    increaseButton.addEventListener('click', increaseSize);
    decreaseButton.addEventListener('click', decreaseSize);
    deleteButton.addEventListener('click', deleteImage);
}

// Функція для додавання нового зображення
function addImage() {
    var newImage = document.createElement('img');
    newImage.src = 'Lviv.jpg';
    newImage.alt = '';
    document.body.appendChild(newImage);
}
// Функція для збільшення розміру зображення
function zoomElement() {
  var images = document.querySelectorAll("img");
  if (images.length > 0) {
    var lastImage = images[images.length - 1];

    lastImage.style.width = lastImage.width * 2 + "px";
    lastImage.style.height = lastImage.height * 2 + "px";
  } else {
    alert("Немає зображень для збільшення");
  }
}

// Функція для зменшення розміру зображення
function minimizeElement() {
  var images = document.querySelectorAll("img");
  if (images.length > 0) {
    var lastImage = images[images.length - 1];
    lastImage.style.width = lastImage.width / 2 + "px";
    lastImage.style.height = lastImage.height / 2 + "px";
  } else {
    alert("Немає зображень для зменшення");
  }
}

// Функція для видалення зображення
function deleteImage() {
    var images = document.querySelectorAll('img');
    if (images.length > 1) {
        document.body.removeChild(images[images.length - 1]);
    }
}

// Виклик функції для додавання кнопок та їх функціональності
addButtons();