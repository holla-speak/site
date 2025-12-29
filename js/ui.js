// DOM элементы модального окна
let productModal, closeModalBtn, modalProductName, modalProductImage, 
    modalProductDescription, modalProductCategory, modalProductTime, 
    modalProductCalories, modalProductPrice, modalProductQuantity,
    modalDecreaseBtn, modalIncreaseBtn, modalAddToCartBtn;

// Инициализация модального окна
function initModal() {
    productModal = document.getElementById('productModal');
    closeModalBtn = document.getElementById('closeModalBtn');
    modalProductName = document.getElementById('modalProductName');
    modalProductImage = document.getElementById('modalProductImage');
    modalProductDescription = document.getElementById('modalProductDescription');
    modalProductCategory = document.getElementById('modalProductCategory');
    modalProductTime = document.getElementById('modalProductTime');
    modalProductCalories = document.getElementById('modalProductCalories');
    modalProductPrice = document.getElementById('modalProductPrice');
    modalProductQuantity = document.getElementById('modalProductQuantity');
    modalDecreaseBtn = document.getElementById('modalDecreaseBtn');
    modalIncreaseBtn = document.getElementById('modalIncreaseBtn');
    modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProductModal);
    }
    
    if (productModal) {
        productModal.addEventListener('click', function(e) {
            if (e.target === this) closeProductModal();
        });
    }
    
    if (modalDecreaseBtn) {
        modalDecreaseBtn.addEventListener('click', function() {
            if (modalQuantity > 1) {
                modalQuantity--;
                modalProductQuantity.textContent = modalQuantity;
            }
        });
    }
    
    if (modalIncreaseBtn) {
        modalIncreaseBtn.addEventListener('click', function() {
            modalQuantity++;
            modalProductQuantity.textContent = modalQuantity;
        });
    }
    
    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener('click', addToCartFromModal);
    }
}

// Открыть модальное окно товара
function openProductModal(productId) {
    currentProduct = getProductById(productId);
    
    if (!currentProduct) return;
    
    modalQuantity = 1;
    
    // Заполняем данные
    modalProductName.textContent = currentProduct.name;
    modalProductImage.src = currentProduct.image;
    modalProductImage.alt = currentProduct.name;
    modalProductDescription.textContent = currentProduct.description;
    modalProductCategory.textContent = getCategoryName(currentProduct.category);
    modalProductTime.textContent = currentProduct.time;
    modalProductCalories.textContent = currentProduct.calories;
    modalProductPrice.textContent = currentProduct.price + ' ₽';
    modalProductQuantity.textContent = modalQuantity;
    
    // Показываем модальное окно
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрыть модальное окно товара
function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Добавить товар в корзину из модального окна
function addToCartFromModal() {
    if (!currentProduct) return;
    
    addToCart(currentProduct.id, modalQuantity);
    showNotification('Товар добавлен в корзину!', 'success');
    animateCartButton();
    closeProductModal();
}

// Показать уведомление
function showNotification(message, type) {
    // Удаляем предыдущие уведомления
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Создаем новое уведомление
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Удаляем через 3 секунды
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Инициализация мобильного меню
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}