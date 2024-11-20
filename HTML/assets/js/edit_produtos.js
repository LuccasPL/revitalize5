
    // Fetch and display all products
    async function fetchProducts() {
        const response = await fetch(apiUrl);
        const products = await response.json();
        const tableBody = $('#products-table tbody');
        tableBody.empty();
        products.forEach(product => {
            tableBody.append(`
                <tr>
                    <td>${product._id}</td>
                    <td>${product.Label}</td>
                    <td>${product.Brand}</td>
                    <td>${product.Name}</td>
                    <td>${product.Price}</td>
                    <td>${product.Rank}</td>
                    <td>${product.Ingredients.join(', ')}</td>
                    <td>${product.Combination}</td>
                    <td>${product.Dry}</td>
                    <td>${product.Normal}</td>
                    <td>${product.Oily}</td>
                    <td>${product.Sensitive}</td>
                    <td>
                        <button onclick="editProduct('${product._id}')">Edit</button>
                        <button onclick="deleteProduct('${product._id}')">Delete</button>
                    </td>
                </tr>
            `);
        });
    }

    // Create or update a product
    $('#product-form').on('submit', async function(event) {
        event.preventDefault();
        const id = $('#product-id').val();
        const data = {
            Label: $('#label').val(),
            Brand: $('#brand').val(),
            Name: $('#name').val(),
            Price: Number($('#price').val()),
            Rank: parseFloat($('#rank').val()).toFixed(1),
            Ingredients: $('#ingredients').val().split(',').map(item => item.trim()),
            Combination: Number($('#combination').val()),
            Dry: Number($('#dry').val()),
            Normal: Number($('#normal').val()),
            Oily: Number($('#oily').val()),
            Sensitive: Number($('#sensitive').val())
        };

        const requestOptions = {
            method: id ? 'PUT' : 'POST', // isto é uma maneira de escrever 1 if mas numa unica linha. 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        const url = id ? `${apiUrl}/${id}` : apiUrl;
        await fetch(url, requestOptions);
        $('#product-form')[0].reset();
        fetchProducts();
    });

    // Edit a product
    async function editProduct(id) {
        const response = await fetch(`${apiUrl}/${id}`);
        const product = await response.json();
        $('#product-id').val(product._id);
        $('#label').val(product.Label);
        $('#brand').val(product.Brand);
        $('#name').val(product.Name);
        $('#price').val(product.Price);
        $('#rank').val(product.Rank);
        $('#ingredients').val(product.Ingredients.join(', '));
        $('#combination').val(product.Combination);
        $('#dry').val(product.Dry);
        $('#normal').val(product.Normal);
        $('#oily').val(product.Oily);
        $('#sensitive').val(product.Sensitive);
    }

    // Delete a product
    async function deleteProduct(id) {
        await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
        fetchProducts();
    }

    // Initial fetch of products
    fetchProducts();