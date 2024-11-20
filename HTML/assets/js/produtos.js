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

        console.warn(`url: ${url}`);

        $.get(url, function(data) { //jQuery metodo o $get
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
        var inputs = $('#searchInputs :input');
        parms = {};
        inputs.each(
            (_, input) => {
                var value = $(input).val();
                var id = $(input).attr('id');
                if(value !== undefined) {
                    parms[id.substring("search".length).toLowerCase()] = value;
                }
            }   
            );

        var query = '';
        for(var key in parms) {
            if(parms[key] !== '') {
                query += query !== '' ? `&${key}=${parms[key]}` : `${key}=${parms[key]}`;
            };
        }
        if (query !== '') {
         return `?${encodeURI(query)}`;
        }
        return '';
    }

    function updatePagination() {
        $('#currentPage').text(currentPage);
    }

    $('#searchButton').on('click', function() {
        currentPage = 1;
        var query = getSearchQuery();
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
