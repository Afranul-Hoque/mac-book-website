// using function for choosing product and cost

function getProductsPrice(product, price) {
    const productPrice = document.getElementById(product + '-price');
    if (price == 0) {
        productPrice.innerText = price;
    }
    if (price == 20) {
        productPrice.innerText = price;
    }
    else if (price == 100) {
        productPrice.innerText = price;
    }
    else if (price == 180) {
        productPrice.innerText = price;

    }
    // totalPrice call

    TotalPrice()

};

function TotalPrice() {
    const totalMemory = document.getElementById('memory-price');
    const totalMemoryPrice = parseInt(totalMemory.innerText);

    const totalStorage = document.getElementById('storage-price');
    const totalStoragePrice = parseInt(totalStorage.innerText);

    const totaldelivery = document.getElementById('delivery-price');
    const totaldeliveryPrice = parseInt(totaldelivery.innerText);


    const Macprice = 1299 + totalMemoryPrice + totalStoragePrice + totaldeliveryPrice;

    const MacTotal = document.getElementById('total-price');
    MacTotal.innerText = Macprice;

    const pomoTotal = document.getElementById('pomo-Total');
    pomoTotal.innerText = Macprice;


}

// choose Memory and added cost

document.getElementById('memory1-button').addEventListener('click', function () {

    getProductsPrice('memory', 0);

});

document.getElementById('memory2-button').addEventListener('click', function () {

    getProductsPrice('memory', 180);

});


// choose Storage and added cost

document.getElementById('storage1-button').addEventListener('click', function () {
    getProductsPrice('storage', 0);

});

document.getElementById('storage2-button').addEventListener('click', function () {
    getProductsPrice('storage', 100);

});

document.getElementById('storage3-button').addEventListener('click', function () {
    getProductsPrice('storage', 180);

});


// choose  delivery option and added cost

document.getElementById('delivery1-button').addEventListener('click', function () {
    getProductsPrice('delivery', 0);

});


document.getElementById('delivery2-button').addEventListener('click', function () {
    getProductsPrice('delivery', 20);

});

// pomocode using for discount part

document.getElementById('pomoApply').addEventListener('click', function () {

    const pomoCode = document.getElementById('pomoInput');
    if (pomoCode.value == 'stevekaku') {
        const discountTotal = document.getElementById('pomo-Total');
        const TotalCost = parseInt(discountTotal.innerText);
        const discounttk = TotalCost * 20 / 100;
        const pomoCodeTotal = TotalCost - discounttk;
        discountTotal.innerText = pomoCodeTotal;
    }
});