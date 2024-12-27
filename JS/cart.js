// Завантажуємо дані з локального сховища
window.onload = function() {
    const carName = localStorage.getItem('selectedCarName');
    const carImage = localStorage.getItem('selectedCarImage');
    const carPrice = localStorage.getItem('selectedCarPrice');

    if (carName && carImage && carPrice) {
        // Відображаємо вибраний автомобіль
        document.getElementById('car-name').textContent = carName;
        document.getElementById('car-image').src = carImage;
        document.getElementById('car-price').textContent = `Ціна: $${carPrice}`;
    } else {
        // Якщо немає вибраного автомобіля, повідомляємо користувача
        document.getElementById('cart-item').innerHTML = "<p>Вибір не зроблено.</p>";
    }
};

// Функція для повернення до каталогу
function goBack() {
    window.location.href = 'catalog.html';
}

// Функція для замовлення автомобіля та запуску відео
function orderCar() {
    // Показуємо відео
    document.getElementById('video-container').style.display = 'block';
    // Автоматично відтворюємо відео
    document.getElementById('car-video').play();
}