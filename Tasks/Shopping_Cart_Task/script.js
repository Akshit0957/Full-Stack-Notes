 const products = [
        { id: 1, name: "Mobile", price: 800 },
        { id: 2, name: "Laptop", price: 1500 },
        { id: 3, name: "Headphones", price: 200 },
        { id: 4, name: "Smart Watch", price: 1200 }
    ];

    let cart = [];

    function renderProducts(productArray) {
        const productList = document.getElementById("productList");
        productList.innerHTML = "";

        productArray.forEach(product => {
            const isExpensive = product.price > 1000 ? "expensive" : "";

            productList.innerHTML += `
                <div class="card ${isExpensive}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
        });
    }

    function addToCart(id) {
        const product = products.find(p => p.id === id);
        const existing = cart.find(item => item.id === id);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        renderCart();
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        renderCart();
    }

    function updateQuantity(id, change) {
        const item = cart.find(p => p.id === id);

        if (item) {
            item.quantity += change;

            if (item.quantity <= 0) {
                removeFromCart(id);
            }
        }

        renderCart();
    }

    function calculateTotal() {
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach(item => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
        });

        return { totalItems, totalPrice };
    }

    function renderCart() {
        const cartItems = document.getElementById("cartItems");
        cartItems.innerHTML = "";

        cart.forEach(item => {
            cartItems.innerHTML += `
                <div class="cart-item">
                    <span>${item.name} - $${item.price} x ${item.quantity} 
                    = $${item.price * item.quantity}</span>
                    <div>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <button onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
        });

        const totals = calculateTotal();
        document.getElementById("cartTotal").innerHTML =
            `Total Items: ${totals.totalItems} | Total Price: $${totals.totalPrice}`;
    }

    function searchProducts() {
        const searchValue = document.getElementById("searchBar").value.toLowerCase();

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchValue)
        );

        renderProducts(filtered);
    }

    renderProducts(products);
