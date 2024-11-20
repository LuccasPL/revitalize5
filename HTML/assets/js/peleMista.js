$(document).ready(function() {
    let currentPage = 1;
    let recordsPerPage = 10;

    function fetchProducts(query = '', page = 1, limit = 10) {
        let url = `${apiUrlSearch}`;
        if (query) {
            url += `${query}&page=${page}&limit=${limit}`;
        } else {
            url += `?page=${page}&limit=${limit}`;
        }


        $.get(url, function(data) { //jQuery metodo o $get
            console.warn(data);
            $('#productList').empty();
            data.produtos.forEach(product => {
                let productDetails = '';
                for (const key in product) {
                    if (product.hasOwnProperty(key)) {
                        if(key != '_id'){
                            productDetails += `<strong>${key}:</strong> ${product[key]}<br>`;
                        }
                    }
                }
                $('#productList').append(`<li>${productDetails}</li> <hr>`);//mostra cada um dos produtos com toda a informação 
            });
            
          
            
            // Update pagination controls
            $('#currentPage').text(data.currentPage);
            $('#prevPage').prop('disabled', data.currentPage === 1);
            $('#nextPage').prop('disabled', data.currentPage === data.totalPages);
        });
    }

    function getSearchQuery() {
        const query = '?combination=1';

        return query;
    }

    function updatePagination() {
        $('#currentPage').text(currentPage);
    }

    $('#searchButton').on('click', function() {
        currentPage = 1;
        const query = getSearchQuery();
        fetchProducts(query, currentPage, recordsPerPage);
    });

    $('#recordsPerPage').on('change', function() {
        recordsPerPage = parseInt($(this).val());
        currentPage = 1;
        const query = getSearchQuery();
        fetchProducts(query, currentPage, recordsPerPage);
    });

    $('#prevPage').on('click', function() {
        if (currentPage > 1) {
            currentPage--;
            const query = getSearchQuery();
            fetchProducts(query, currentPage, recordsPerPage);
            updatePagination();
        }
    });

    $('#nextPage').on('click', function() {
        currentPage++;
        const query = getSearchQuery();
        fetchProducts(query, currentPage, recordsPerPage);
        updatePagination();
    });

    //fetch inicial
    fetchProducts(getSearchQuery(), currentPage, recordsPerPage);
});
