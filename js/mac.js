// choose memory and added cost

function getmemoryPrice(product, price) {
    const memoryPrice = document.getElementById(product + '-price');
    if (price == 0) {
        memoryPrice.innerText = price;
    }
    else if (price == 180) {
        memoryPrice.innerText = price;

    }
    const totalPriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(memoryPrice.innerText);
    totalPriceIncrease.innerText = newTotalPrice;
    // const pomoTotal = document.getElementById('pomo-Total');
    // pomoTotal.innerText = newTotalPrice;
    TotalPrice()

};


// function for storage choose and cost

function getStoragePrice(product, price) {
    const storagePrice = document.getElementById(product + '-price');
    if (price == 0) {
        storagePrice.innerText = price;
    }
    else if (price == 100) {
        storagePrice.innerText = price;
    }
    else if (price == 180) {
        storagePrice.innerText = price;
    }
    const storagePriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(storagePrice.innerText);
    storagePriceIncrease.innerText = newTotalPrice;
    // const pomoTotal = document.getElementById('pomo-Total');
    // pomoTotal.innerText = newTotalPrice;
    TotalPrice()
};

// function choose  delivery option and added cost


function getDeliveryPrice(product, price) {
    const deliveryPrice = document.getElementById(product + '-price');

    if (price == 0) {
        deliveryPrice.innerText = price;
    }
    else if (price == 20) {
        deliveryPrice.innerText = price;
    }

    const deliveryPriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(deliveryPrice.innerText);
    deliveryPriceIncrease.innerText = newTotalPrice;

    // const pomoTotal = document.getElementById('pomo-Total');
    // pomoTotal.innerText = newTotalPrice;
    TotalPrice()
};

// function getValue(){
//     const totalMemory = document.getElementById('memory-price');
//     const totalMemoryPrice = parseInt(totalMemory.value);

// }

function TotalPrice() {
    const totalMemory = document.getElementById('memory-price');
    const totalMemoryPrice = parseInt(totalMemory.innerText);

    const totalStorage = document.getElementById('storage-price');
    const totalStoragePrice = parseInt(totalStorage.innerText);

    const totaldelivery = document.getElementById('delivery-price');
    const totaldeliveryPrice = parseInt(totaldelivery.innerText);


    const lastMacprice = document.getElementById('fixed-price');

    Macprice = 1299 + totalMemoryPrice + totalStoragePrice + totaldeliveryPrice;

    const MacTotal = document.getElementById('total-price');
    MacTotal.innerText = Macprice;

    const pomoTotal = document.getElementById('pomo-Total');
    pomoTotal.innerText = Macprice;




}





document.getElementById('memory1-button').addEventListener('click', function () {
    // const memoryPrice = document.getElementById('memory-price');
    // const memoryNewPrice = 0;
    // memoryPrice.innerText = memoryNewPrice;
    getmemoryPrice('memory', 0);

    // const totalPriceIncrease = document.getElementById('total-price');
    // const newTotalPrice = 1299 + parseInt(memoryNewPrice);
    // totalPriceIncrease.innerText = newTotalPrice;
    // const pomoTotal = document.getElementById('pomo-Total');
    // pomoTotal.innerText = newTotalPrice;



});

document.getElementById('memory2-button').addEventListener('click', function () {
    // const memoryPrice = document.getElementById('memory-price');
    // const memoryNewPrice = 180;
    // memoryPrice.innerText = memoryNewPrice;
    getmemoryPrice('memory', 180);

    // const totalPriceIncrease = document.getElementById('total-price');
    // const newTotalPrice = 1299 + parseInt(memoryNewPrice);
    // totalPriceIncrease.innerText = newTotalPrice;

    // const pomoTotal = document.getElementById('pomo-Total');
    // pomoTotal.innerText = newTotalPrice;

});


// choose Storage and added cost

document.getElementById('storage1-button').addEventListener('click', function () {
    // const storagePrice = document.getElementById('storage-price');
    // const storageNewPrice = 0;
    // storagePrice.innerText = storageNewPrice;
    getStoragePrice('storage', 0);


    // const storagePriceIncrease = document.getElementById('total-price');
    // const newTotalPrice = 1299 + parseInt(storageNewPrice);
    // storagePriceIncrease.innerText = newTotalPrice;
    // const pomoTotal = document.getElementById('pomo-Total');
    // pomoTotal.innerText = newTotalPrice;

});


document.getElementById('storage2-button').addEventListener('click', function () {
    getStoragePrice('storage', 100);


    // const storagePriceIncrease = document.getElementById('total-price');
    // const newTotalPrice = 1299 + parseInt(storageNewPrice);
    // storagePriceIncrease.innerText = newTotalPrice;
    // const pomoTotal = document.getElementById('pomo-Total');
    // pomoTotal.innerText = newTotalPrice;

});

document.getElementById('storage3-button').addEventListener('click', function () {
    getStoragePrice('storage', 180);


    // const storagePriceIncrease = document.getElementById('total-price');
    // const newTotalPrice = 1299 + parseInt(storageNewPrice);
    // storagePriceIncrease.innerText = newTotalPrice;
    // const pomoTotal = document.getElementById('pomo-Total');
    // pomoTotal.innerText = newTotalPrice;

});


// choose  delivery option and added cost

document.getElementById('delivery1-button').addEventListener('click', function () {
    // const deliveryPrice = document.getElementById('delivery-price');
    // const newDeliveryPrice = 0;
    // deliveryPrice.innerText = newDeliveryPrice;
    getDeliveryPrice('delivery', 0);

    // const deliveryPriceIncrease = document.getElementById('total-price');
    // const newTotalPrice = 1299 + parseInt(newDeliveryPrice);
    // deliveryPriceIncrease.innerText = newTotalPrice;

    // const pomoTotal = document.getElementById('pomo-Total');
    // pomoTotal.innerText = newTotalPrice;
});


document.getElementById('delivery2-button').addEventListener('click', function () {
    // const deliveryPrice = document.getElementById('delivery-price');
    // const newDeliveryPrice = 20;
    // deliveryPrice.innerText = newDeliveryPrice;
    getDeliveryPrice('delivery', 20);

    // const deliveryPriceIncrease = document.getElementById('total-price');
    // const newTotalPrice = 1299 + parseInt(newDeliveryPrice);
    // deliveryPriceIncrease.innerText = newTotalPrice;

    // const pomoTotal = document.getElementById('pomo-Total');
    // pomoTotal.innerText = newTotalPrice;

});




// bonus part

document.getElementById('pomoApply').addEventListener('click', function () {

    const pomoCode = document.getElementById('pomoInput');
    if (pomoCode.value == 'stevekaku') {
        const discountTotal = document.getElementById('pomo-Total');
        const TotalCost = parseInt(discountTotal.innerText);
        const discounttk = TotalCost * 20 / 100;
        const pomoCodeTotal = TotalCost - discounttk;
        discountTotal.innerText = pomoCodeTotal;
    }
    else {
        console.log('kopal  kharap');
    }
});