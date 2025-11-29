// Produtos Database
const acessorios = [
    {
        id: 1,
        name: "Colar Lumière",
        category: "Colar",
        description: "Colar delicado em ouro com pingente de cristal",
        price: 189.90,
        image: "imagens/colar-lumiere.jpg"
    },
    {
        id: 2,
        name: "Brincos Étoile",
        category: "Brincos",
        description: "Brincos em formato de estrela com detalhes brilhantes",
        price: 149.90,
        image: "imagens/brincos-etoile.jpg"
    },
    {
        id: 3,
        name: "Pulseira Aurore",
        category: "Pulseira",
        description: "Pulseira ajustável com pingentes dourados",
        price: 129.90,
        image: "imagens/pulseira-aurore.jpg"
    },
    {
        id: 4,
        name: "Bracelete Soleil",
        category: "Bracelete",
        description: "Bracelete rígido com detalhes em relevo",
        price: 169.90,
        image: "imagens/bracelete-soleil.jpg"
    },
    {
        id: 5,
        name: "Tornozeleira Lune",
        category: "Tornozeleira",
        description: "Tornozeleira delicada com charm de lua",
        price: 99.90,
        image: "imagens/tornozeleira-lune.jpg"
    },
    {
        id: 6,
        name: "Conjunto Céleste",
        category: "Conjunto",
        description: "Conjunto de colar e brincos harmoniosos",
        price: 299.90,
        image: "imagens/conjunto-celeste.jpg"
    }
];

const velas = [
    {
        id: 7,
        name: "Jardim Secreto",
        category: "Vela Aromática",
        description: "Vela Aromatizada com Base de Concreto - Design moderno e exclusivo com aroma suave que encanta",
        fullDescription: "Transforme qualquer ambiente com a delicadeza e o charme das nossas velas artesanais. Produzidas com acabamento moderno e elegante, elas unem design exclusivo e fragrância envolvente, criando uma experiência única de bem-estar e sofisticação.\n\nDestaques do Produto:\n• Design moderno e exclusivo\n• Aroma suave que encanta\n• Ideal para decoração elegante\n• Perfeita como lembrancinha personalizada com adesivo do seu evento",
        price: 11.50,
        images: [
            "FOTOS SITE/CATALOGO - 1.1.png",
            "FOTOS SITE/CATALOGO - 1.2.png",
            "FOTOS SITE/CATALOGO - 1.3.png"
        ]
    },
    {
        id: 8,
        name: "Conforto",
        category: "Vela Aromática",
        description: "Vela 40ml - Vidro Hexagonal com Tampa de Madeira - Aroma suave e envolvente",
        fullDescription: "Descubra a harmonia entre aroma e design com a vela Lúmine, cuidadosamente elaborada em vidro hexagonal com acabamento refinado e toque artesanal. Seu perfume suave transforma qualquer ambiente em um refúgio de tranquilidade e aconchego.\n\nIdeal para momentos de relaxamento, meditação ou decoração.\n\nDestaques do produto:\n• Aroma suave e envolvente\n• Frasco de vidro com design elegante\n• Tamanho compacto (40 ml)",
        price: 15.90,
        images: [
            "FOTOS SITE/CATALOGO - 2.1.png",
            "FOTOS SITE/CATALOGO - 2.2.png"
        ]
    },
    {
        id: 9,
        name: "Enlace",
        category: "Vela Aromática",
        description: "Vela 40ml - Vidro Redondo com Tampa de Madeira - Design elegante e essência duradoura",
        fullDescription: "Vela aromatizada de 40 ml em frasco de vidro com tampa de cortiça, perfeita para perfumar e decorar qualquer ambiente. Compacta, charmosa e com essência duradoura, proporciona uma atmosfera acolhedora e relaxante.\n\nIdeal para uso diário, presentes, kits aromáticos ou lembrancinhas personalizadas para eventos.\n\nDestaques do produto:\n• Frasco de vidro com design elegante\n• Aroma suave e envolvente\n• Tamanho compacto (40 ml)",
        price: 15.90,
        images: [
            "FOTOS SITE/CATALOGO - 3.1.png",
            "FOTOS SITE/CATALOGO - 3.2.png"
        ]
    },
    {
        id: 10,
        name: "Inspira",
        category: "Vela Aromática",
        description: "Vela 70ml - Copo Redondo com Tampa de Madeira - Queima uniforme e aroma envolvente",
        fullDescription: "Vela aromatizada de 70 ml em copo de vidro com tampa de madeira, perfeita para perfumar e decorar qualquer ambiente. Com queima uniforme e aroma envolvente, oferece uma experiência acolhedora e elegante.\n\nIdeal para uso diário, presentes, kits aromáticos ou lembrancinhas personalizadas para eventos.\n\nDestaques do produto:\n• Frasco de vidro com design clean\n• Tampa de madeira com acabamento natural\n• Essência suave e duradoura\n• Tamanho compacto (70 ml)\n• Ótima opção para presentes e lembrancinhas",
        price: 24.90,
        images: [
            "FOTOS SITE/CATALOGO - 4.1.png",
            "FOTOS SITE/CATALOGO - 4.2.png"
        ]
    },
    {
        id: 11,
        name: "Encanto",
        category: "Vela Aromática",
        description: "Vela 70ml - Copo Quadrado com Tampa de Madeira - Design minimalista e sofisticado",
        fullDescription: "A vela aromatizada em copo de vidro quadrado com tampa de madeira é a escolha perfeita para quem busca sofisticação, aconchego e personalidade na decoração. Com design minimalista e aroma envolvente, ela transforma qualquer ambiente em um espaço acolhedor e cheio de estilo.\n\nDestaques do Produto:\n• Tamanho compacto (70 ml)\n• Copo de vidro quadrado com tampa de madeira natural\n• Essência suave e duradoura\n• Ideal para decoração de interiores ou lembrancinhas personalizadas",
        price: 24.90,
        images: [
            "FOTOS SITE/CATALOGO - 5.1.png",
            "FOTOS SITE/CATALOGO - 5.2.png"
        ]
    },
    {
        id: 12,
        name: "Equilíbrio",
        category: "Vela Aromática",
        description: "Vela 150ml - Vidro com Tampa de Madeira - Design moderno e aroma suave",
        fullDescription: "A vela aromatizada de 150 ml é a combinação perfeita entre sofisticação e bem-estar. Com design minimalista e toque artesanal, ela transforma qualquer ambiente em um espaço acolhedor e cheio de personalidade.\n\nIdeal para decorar, presentear ou oferecer como lembrancinha personalizada com o adesivo do seu evento.\n\nDestaques do Produto:\n• Capacidade: 150 ml\n• Copo de vidro transparente com acabamento moderno\n• Tampa de madeira natural: charme e proteção\n• Aroma suave e envolvente\n• Produto artesanal, feito com cuidado e atenção aos detalhes",
        price: 35.90,
        images: [
            "FOTOS SITE/CATALOGO - 6.1.png",
            "FOTOS SITE/CATALOGO - 6.2.png"
        ]
    },
    {
        id: 13,
        name: "Calmaria",
        category: "Vela Aromática",
        description: "Vela 265ml - Vidro com Tampa de Madeira - Elegância e bem-estar em um produto",
        fullDescription: "A vela aromatizada de 265 ml é perfeita para quem busca elegância e bem-estar em um só produto. Com copo de vidro transparente e tampa de madeira natural, ela une design moderno e acabamento artesanal, criando uma peça decorativa que também perfuma o ambiente com suavidade.\n\nIdeal para compor espaços aconchegantes, presentear com charme.\n\nDestaques do Produto:\n• Capacidade: 265 ml\n• Copo de vidro com design sofisticado\n• Tampa de madeira natural: proteção e estilo\n• Aroma suave e envolvente\n• Produto artesanal, feito com cuidado e atenção aos detalhes\n• Perfeita para decoração ou para presentear uma pessoa especial",
        price: 64.90,
        images: [
            "FOTOS SITE/CATALOGO - 7.1.png"
        ]
    },
    {
        id: 14,
        name: "Calmaria de Camomila",
        category: "Escalda-Pés",
        description: "Tubo 20ml - Sais com flores secas de camomila - Relaxamento e tranquilidade",
        fullDescription: "Relaxe e cuide de si com o nosso escalda-pés de camomila, desenvolvido para proporcionar bem-estar e tranquilidade em poucos minutos. Com sais naturais e flores secas, ele transforma o momento de descanso em uma verdadeira experiência de spa.\n\nIdeal como mimo delicado, lembrancinha personalizada ou complemento para kits de autocuidado.\n\nDestaques do Produto:\n• Conteúdo: 20 ml de sais com flores secas de camomila\n• Aroma suave e calmante, ideal para relaxar os pés\n• Embalagem em tubo com tampa de rolha: charmosa e prática\n• Perfeito para lembrancinhas de eventos, kits de spa ou presentes afetivos",
        price: 9.90,
        images: [
            "FOTOS SITE/CATALOGO - 8.1.png"
        ]
    },
    {
        id: 15,
        name: "Calmaria Floral",
        category: "Escalda-Pés",
        description: "Tubo 20ml - Mistura de flores secas e ervas naturais - Efeito relaxante",
        fullDescription: "Proporcione um momento de cuidado e tranquilidade com nosso escalda-pés artesanal. Com uma mistura delicada de flores secas e ervas naturais, ele é ideal para aliviar o cansaço e renovar as energias. A embalagem em tubo de vidro com rolha traz charme e sofisticação, tornando-o perfeito para lembrancinhas personalizadas ou kits de autocuidado.\n\nDestaques do Produto:\n• Conteúdo: 20 ml de sais e flores secas selecionadas\n• Aroma suave e efeito relaxante\n• Embalagem em vidro com tampa de rolha\n• Ideal para lembrancinhas de eventos, kits spa ou presentes afetivos\n• Produto artesanal e exclusivo",
        price: 9.90,
        images: [
            "FOTOS SITE/CATALOGO - 9.1.png",
            "FOTOS SITE/CATALOGO - 9.2.png"
        ]
    },
    {
        id: 16,
        name: "Aconchego",
        category: "Vela Decorativa",
        description: "Vela em Gesso 5x5cm - Minimalismo com aroma e estilo - Acabamento fosco",
        fullDescription: "A vela em gesso quadrado 5x5 cm é a união perfeita entre design moderno e sensorialidade. Com acabamento fosco e toque artesanal, ela traz charme e sofisticação para qualquer ambiente.\n\nIdeal para compor decorações elegantes ou oferecer como lembrancinha personalizada com o adesivo do seu evento.\n\nDestaques do Produto:\n• Medidas: 5x5 cm\n• Base em gesso branco com acabamento minimalista\n• Aroma suave e envolvente\n• Produto artesanal e exclusivo\n• Ideal para decoração ou lembrancinhas personalizadas",
        price: 12.90,
        images: [
            "FOTOS SITE/CATALOGO - 10 .1.png",
            "FOTOS SITE/CATALOGO - 10 .2.png"
        ]
    },
    {
        id: 17,
        name: "Serenidade",
        category: "Vela Decorativa",
        description: "Vela em Gesso Hexagonal 5x5cm - Design geométrico e aroma delicado",
        fullDescription: "Com design geométrico e acabamento artesanal, a vela em gesso hexagonal 5x5 cm é perfeita para compor ambientes com charme e personalidade. Seu formato moderno e aroma suave criam uma atmosfera acolhedora, ideal para decoração ou lembrancinhas personalizadas com o adesivo do seu evento.\n\nDestaques do Produto:\n• Medidas: 5x5 cm\n• Base em gesso com formato hexagonal e acabamento fosco\n• Aroma delicado e envolvente\n• Produto artesanal e exclusivo\n• Ideal para decoração de interiores ou lembrancinhas personalizadas",
        price: 12.90,
        images: [
            "FOTOS SITE/CATALOGO - 11.1.png",
            "FOTOS SITE/CATALOGO - 11.2.png"
        ]
    }
];

// Cart State
let cart = [];

// DOM Elements
const header = document.getElementById('header');
const submenu = document.getElementById('submenu');
const headerScrolled = document.getElementById('headerScrolled');
const searchDropdown = document.getElementById('searchDropdown');
const searchToggle = document.getElementById('searchToggle');
const cartBtns = document.querySelectorAll('.cart-btn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const cartCounts = document.querySelectorAll('.cart-count');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const mobileMenuBtns = document.querySelectorAll('.mobile-menu-btn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const searchInputs = document.querySelectorAll('.search-input');
const searchBtns = document.querySelectorAll('.search-btn');

// Modal Elements
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const modalQuantity = document.getElementById('modalQuantity');
const decreaseQtyBtn = document.getElementById('decreaseQty');
const increaseQtyBtn = document.getElementById('increaseQty');
const addToCartModalBtn = document.getElementById('addToCartModal');

let currentProduct = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage(); // Carrega o carrinho salvo primeiro
    renderProducts();
    setupEventListeners();
    updateCart();
});

// Render Products
function renderProducts() {
    const acessoriosGrid = document.getElementById('acessoriosGrid');
    const momentosGrid = document.getElementById('momentosGrid');
    
    acessoriosGrid.innerHTML = acessorios.map(product => createProductCard(product, 'acessório')).join('');
    momentosGrid.innerHTML = velas.map(product => createProductCard(product, 'vela')).join('');
}

function createProductCard(product, type) {
    const whatsappMessage = type === 'acessório' 
        ? 'Olá,+quero+saber+mais+sobre+este+acessório!' 
        : 'Olá,+quero+saber+mais+sobre+esta+vela!';
    
    const mainImage = product.images ? product.images[0] : product.image;
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-wrapper" onclick="openProductModal(${product.id})">
                <img src="${mainImage}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22350%22%3E%3Crect fill=%22%23F5E6D3%22 width=%22300%22 height=%22350%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2218%22 fill=%22%23D4A574%22%3E${product.name}%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="openProductModal(${product.id})" title="Adicionar ao carrinho">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </button>
                        <a href="https://wa.me/5518997001660?text=${whatsappMessage}" class="btn-whatsapp" target="_blank" title="Falar no WhatsApp">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Cart Functions
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('lumineCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            console.log('Carrinho carregado:', cart);
        } catch (error) {
            console.error('Erro ao carregar carrinho:', error);
            cart = [];
        }
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem('lumineCart', JSON.stringify(cart));
        console.log('Carrinho salvo:', cart);
    } catch (error) {
        console.error('Erro ao salvar carrinho:', error);
    }
}

// Modal Functions
function openProductModal(productId) {
    const allProducts = [...acessorios, ...velas];
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
        currentProduct = product;
        modalImage.src = product.image;
        modalImage.alt = product.name;
        modalCategory.textContent = product.category;
        modalName.textContent = product.name;
        
        // Usa fullDescription se existir, senão usa description
        const descriptionText = product.fullDescription || product.description;
        modalDescription.innerHTML = descriptionText.replace(/\n/g, '<br>');
        
        modalPrice.textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
        modalQuantity.value = 1;
        
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    currentProduct = null;
}

function addToCart(productId, quantity = 1) {
    const allProducts = [...acessorios, ...velas];
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ ...product, quantity: quantity });
        }
        
        saveCartToStorage();
        updateCart();
        openCart();
        showNotification(`${quantity}x ${product.name} adicionado ao carrinho!`);
    }
}

function updateCartItemQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCartToStorage();
            updateCart();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCart();
    showNotification('Produto removido do carrinho');
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update all cart counts
    cartCounts.forEach(count => {
        count.textContent = totalItems;
    });
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22%3E%3Crect fill=%22%23F5E6D3%22 width=%2280%22 height=%2280%22/%3E%3C/svg%3E'">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                    <div class="cart-item-quantity">
                        <button class="cart-quantity-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="cart-quantity-display">${item.quantity}</span>
                        <button class="cart-quantity-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remover">×</button>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function checkout() {
    if (cart.length === 0) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const items = cart.map(item => `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`).join('%0A');
    const message = `Olá!+Gostaria+de+fazer+um+pedido:%0A%0A${items}%0A%0ATotal:+R$+${total.toFixed(2).replace('.', ',')}`;
    
    window.open(`https://wa.me/5518997001660?text=${message}`, '_blank');
    
    // Limpar carrinho após finalizar pedido
    cart = [];
    saveCartToStorage();
    updateCart();
    closeCart();
    showNotification('Pedido enviado! Aguarde nosso contato no WhatsApp.');
}

// Event Listeners
function setupEventListeners() {
    // Cart buttons
    cartBtns.forEach(btn => {
        btn.addEventListener('click', openCart);
    });
    
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', checkout);
    
    // Modal
    closeModalBtn.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
    
    // Quantity controls in modal
    decreaseQtyBtn.addEventListener('click', () => {
        const currentQty = parseInt(modalQuantity.value);
        if (currentQty > 1) {
            modalQuantity.value = currentQty - 1;
        }
    });
    
    increaseQtyBtn.addEventListener('click', () => {
        const currentQty = parseInt(modalQuantity.value);
        modalQuantity.value = currentQty + 1;
    });
    
    addToCartModalBtn.addEventListener('click', () => {
        if (currentProduct) {
            const quantity = parseInt(modalQuantity.value);
            addToCart(currentProduct.id, quantity);
            closeProductModal();
        }
    });
    
    // Mobile Menu
    mobileMenuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeMobileMenu.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link, .submenu-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Search Toggle (header scrolled)
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            searchDropdown.classList.toggle('show');
        });
    }
    
    // Search functionality
    searchBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => performSearch(searchInputs[index].value));
    });
    
    searchInputs.forEach((input) => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(input.value);
            }
        });
    });
    
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const interesse = document.getElementById('interesse').value;
        
        console.log('Newsletter Cadastro:', { nome, telefone, interesse });
        
        showNotification('Cadastro realizado com sucesso! Em breve você receberá nossas novidades.');
        newsletterForm.reset();
    });
    
    // Scroll Effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 200) {
            header.classList.add('hide');
            submenu.classList.add('hide');
            headerScrolled.classList.add('show');
        } else {
            header.classList.remove('hide');
            submenu.classList.remove('hide');
            headerScrolled.classList.remove('show');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Search Function
function performSearch(searchValue) {
    const searchTerm = searchValue.toLowerCase().trim();
    
    if (!searchTerm) {
        showNotification('Digite algo para buscar');
        return;
    }
    
    const allProducts = [...acessorios, ...velas];
    const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    if (results.length === 0) {
        showNotification('Nenhum produto encontrado');
        return;
    }
    
    // Scroll to products section
    const section = results[0].id <= 6 ? '#acessorios' : '#momentos';
    const target = document.querySelector(section);
    
    if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        showNotification(`${results.length} produto(s) encontrado(s)`);
        
        // Close search dropdown if open
        searchDropdown.classList.remove('show');
        
        // Clear search inputs
        searchInputs.forEach(input => input.value = '');
        
        // Highlight results
        setTimeout(() => {
            document.querySelectorAll('.product-card').forEach(card => {
                const productId = parseInt(card.getAttribute('data-id'));
                if (results.find(r => r.id === productId)) {
                    card.style.border = '3px solid var(--primary)';
                    setTimeout(() => {
                        card.style.border = '';
                    }, 2000);
                }
            });
        }, 500);
    }
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: #2C2416;
        color: white;
        padding: 20px 30px;
        border-radius: 50px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-size: 14px;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-card, .benefit-item').forEach(el => {
        observer.observe(el);
    });
});