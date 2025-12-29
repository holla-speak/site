// Данные товаров
const products = [
    {
        id: 1,
        name: "Борщ с говядиной",
        category: "soups",
        price: 320,
        description: "Настоящий украинский борщ с нежной говядиной, свеклой и капустой. Подается со сметаной и свежей зеленью.",
        image: "https://images.unsplash.com/photo-1573108037324-0c7d5d43-227e-4373-81a4-90d24629c4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "25 мин",
        calories: "210 ккал",
        popular: true
    },
    {
        id: 2,
        name: "Курица с картофелем",
        category: "main",
        price: 380,
        description: "Нежная куриная грудка с запеченным картофелем и овощами под ароматными травами.",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "30 мин",
        calories: "350 ккал",
        popular: true
    },
    {
        id: 3,
        name: "Греческий салат",
        category: "salads",
        price: 280,
        description: "Классический греческий салат со свежими овощами, сыром фета и оливковым маслом.",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "15 мин",
        calories: "180 ккал",
        popular: true
    },
    {
        id: 4,
        name: "Тирамису",
        category: "desserts",
        price: 260,
        description: "Итальянский десерт с нежным сыром маскарпоне, кофейной пропиткой и какао.",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "20 мин",
        calories: "420 ккал",
        popular: true
    },
    {
        id: 5,
        name: "Солянка мясная",
        category: "soups",
        price: 340,
        description: "Наваристый суп с несколькими видами мяса, солеными огурцами и маслинами.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "30 мин",
        calories: "250 ккал",
        popular: false
    },
    {
        id: 6,
        name: "Лосось с овощами",
        category: "main",
        price: 520,
        description: "Филе лосося на гриле с сезонными овощами и лимонным соусом.",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "35 мин",
        calories: "320 ккал",
        popular: false
    },
    {
        id: 7,
        name: "Цезарь с курицей",
        category: "salads",
        price: 320,
        description: "Классический салат Цезарь с курицей гриль, сыром пармезан и соусом.",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "20 мин",
        calories: "290 ккал",
        popular: false
    },
    {
        id: 8,
        name: "Чизкейк Нью-Йорк",
        category: "desserts",
        price: 290,
        description: "Нежный чизкейк с песочной основой и ягодным соусом.",
        image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "25 мин",
        calories: "380 ккал",
        popular: false
    },
    {
        id: 9,
        name: "Морс клюквенный",
        category: "drinks",
        price: 120,
        description: "Освежающий клюквенный морс без добавления сахара.",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4d6f7f85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "5 мин",
        calories: "80 ккал",
        popular: false
    },
    {
        id: 10,
        name: "Компот из сухофруктов",
        category: "drinks",
        price: 90,
        description: "Традиционный компот из сухофруктов, сваренный по домашнему рецепту.",
        image: "https://images.unsplash.com/photo-1578164253800-8d8cdf27e8d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        time: "10 мин",
        calories: "110 ккал",
        popular: false
    }
];

// Функции для работы с товарами
function getCategoryName(category) {
    const categories = {
        'soups': 'Супы',
        'main': 'Основные блюда',
        'salads': 'Салаты',
        'desserts': 'Десерты',
        'drinks': 'Напитки'
    };
    return categories[category] || category;
}

function getProductById(id) {
    return products.find(product => product.id === id);
}

function getPopularProducts() {
    return products.filter(product => product.popular);
}

function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
}

// Загрузка популярных товаров на главной
function loadPopularProducts() {
    const container = document.getElementById('popularProducts');
    if (!container) return;
    
    const popularProducts = getPopularProducts();
    let html = '';
    
    popularProducts.forEach(product => {
        const categoryName = getCategoryName(product.category);
        
        html += `
            <div class="bg-white rounded-xl shadow-md overflow-hidden food-card">
                <div class="h-48 overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-bold text-lg text-gray-800">${product.name}</h3>
                        <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">${categoryName}</span>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">${product.description.substring(0, 80)}...</p>
                    <div class="flex justify-between items-center">
                        <span class="text-xl font-bold text-gray-800">${product.price} ₽</span>
                        <button class="view-product-btn bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition duration-200"
                                data-id="${product.id}">
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Добавляем обработчики для кнопок "Подробнее"
    container.querySelectorAll('.view-product-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            openProductModal(productId);
        });
    });
}

// Загрузка всех товаров в каталог
function loadCatalogProducts() {
    const container = document.getElementById('catalogProducts');
    if (!container) return;
    
    let html = '';
    
    products.forEach(product => {
        const categoryName = getCategoryName(product.category);
        
        html += `
            <div class="bg-white rounded-xl shadow-md overflow-hidden food-card catalog-product" data-category="${product.category}">
                <div class="h-48 overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-bold text-lg text-gray-800">${product.name}</h3>
                        <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">${categoryName}</span>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">${product.description.substring(0, 80)}...</p>
                    <div class="flex justify-between items-center">
                        <span class="text-xl font-bold text-gray-800">${product.price} ₽</span>
                        <div class="flex space-x-2">
                            <button class="view-product-btn bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm hover:bg-gray-300 transition duration-200"
                                    data-id="${product.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="add-to-cart-btn bg-red-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-600 transition duration-200"
                                    data-id="${product.id}">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Добавляем обработчики для кнопок
    container.querySelectorAll('.view-product-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            openProductModal(productId);
        });
    });
    
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId, 1);
            showNotification('Товар добавлен в корзину!', 'success');
            animateCartButton();
        });
    });
}

// Настройка фильтров категорий
function setupCategoryFilters() {
    const filters = document.querySelectorAll('.category-btn');
    if (!filters.length) return;
    
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Обновляем активный фильтр
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Фильтруем товары
            filterCatalogProducts(category);
        });
    });
}

// Фильтрация товаров в каталоге
function filterCatalogProducts(category) {
    const productElements = document.querySelectorAll('.catalog-product');
    
    productElements.forEach(element => {
        if (category === 'all' || element.getAttribute('data-category') === category) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}