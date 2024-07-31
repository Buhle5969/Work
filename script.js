document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    let products = JSON.parse(localStorage.getItem('products')) || [];

    function displayProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${product.name} - ${product.quantity} 
                <button onclick="removeProduct(${index})">Remove</button>`;
            productList.appendChild(li);
        });
    }

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const productName = document.getElementById('productName').value;
        const productQuantity = document.getElementById('productQuantity').value;

        const product = {
            name: productName,
            quantity: parseInt(productQuantity)
        };

        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
        productForm.reset();
    });

    window.removeProduct = function(index) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
    };

    displayProducts();
});