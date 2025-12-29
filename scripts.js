// Переменные для хранения состояния корзины
let cartItems = [];

// Показать детальную информацию о товаре
function showProductDetails(button) {
    let parentDiv = button.parentNode;
    let imageSrc = parentDiv.querySelector("img").src;
    let title = parentDiv.querySelector("h3").innerText;
    let description = parentDiv.querySelector("p").innerText;
    let modal = document.getElementById("modalWindow");
    modal.style.display = "block";
    document.getElementById("productImage").src = imageSrc;
    document.getElementById("productTitle").innerHTML = title;
    document.getElementById("productDescription").innerHTML = description;
    document.getElementById("productPrice").innerHTML = `<strong>Цена:</strong> ${description.split(":")[1]}`;
}

// Закрыть модальное окно
function closeModal() {
    document.getElementById("modalWindow").style.display = "none";
}

// Добавить товар в корзину
function addToCart() {
    let title = document.getElementById("productTitle").innerText;
    let price = document.getElementById("productPrice").innerText.split(":")[1].trim();
    let quantity = 1;
    let newItem = { title, price, quantity };
    cartItems.push(newItem);
    updateCartDisplay();
    closeModal();
}

// Отобразить содержимое корзины
function updateCartDisplay() {
    let cartList = document.getElementById("cartList");
    cartList.innerHTML = "";
    for(let i = 0; i < cartItems.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${cartItems[i].title}, количество: ${cartItems[i].quantity}, цена: ${cartItems[i].price}`;
        cartList.appendChild(li);
    }
}

// Рассчитать итоговую сумму
function calculateTotal() {
    let totalSum = 0;
    for(let item of cartItems){
        totalSum += parseFloat(item.price) * item.quantity;
    }
    alert(`Общая сумма вашего заказа: ${totalSum.toFixed(2)} рублей`);
}

// Проверка формы заказа
function validateOrderForm() {
    if(!document.getElementById("orderName").value.trim()) {
        alert("Заполните ваше имя.");
        return false;
    }
}