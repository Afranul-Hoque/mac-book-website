// choose memory and added cost

document.getElementById('memory1-button').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-price');
    const memoryNewPrice = 0;
    memoryPrice.innerText = memoryNewPrice;

    const totalPriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(memoryNewPrice);
    totalPriceIncrease.innerText = newTotalPrice;
    const pomoTotal = document.getElementById('pomo-Total');
    pomoTotal.innerText = newTotalPrice;

});

document.getElementById('memory2-button').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-price');
    const memoryNewPrice = 180;
    memoryPrice.innerText = memoryNewPrice;

    const totalPriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(memoryNewPrice);
    totalPriceIncrease.innerText = newTotalPrice;

    const pomoTotal = document.getElementById('pomo-Total');
    pomoTotal.innerText = newTotalPrice;

});


// choose Storage and added cost

document.getElementById('storage1-button').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    const storageNewPrice = 0;
    storagePrice.innerText = storageNewPrice;

    const storagePriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(storageNewPrice);
    storagePriceIncrease.innerText = newTotalPrice;
    const pomoTotal = document.getElementById('pomo-Total');
    pomoTotal.innerText = newTotalPrice;

});


document.getElementById('storage2-button').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    const storageNewPrice = 100;
    storagePrice.innerText = storageNewPrice;

    const storagePriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(storageNewPrice);
    storagePriceIncrease.innerText = newTotalPrice;
    const pomoTotal = document.getElementById('pomo-Total');
    pomoTotal.innerText = newTotalPrice;

});

document.getElementById('storage3-button').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    const storageNewPrice = 180;
    storagePrice.innerText = storageNewPrice;

    const storagePriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(storageNewPrice);
    storagePriceIncrease.innerText = newTotalPrice;
    const pomoTotal = document.getElementById('pomo-Total');
    pomoTotal.innerText = newTotalPrice;

});


// choose  delivery option and added cost

document.getElementById('delivery1-button').addEventListener('click', function () {
    const deliveryPrice = document.getElementById('delivery-price');
    const newDeliveryPrice = 0;
    deliveryPrice.innerText = newDeliveryPrice;

    const deliveryPriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(newDeliveryPrice);
    deliveryPriceIncrease.innerText = newTotalPrice;

    const pomoTotal = document.getElementById('pomo-Total');
    pomoTotal.innerText = newTotalPrice;
});


document.getElementById('delivery2-button').addEventListener('click', function () {
    const deliveryPrice = document.getElementById('delivery-price');
    const newDeliveryPrice = 20;
    deliveryPrice.innerText = newDeliveryPrice;

    const deliveryPriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(newDeliveryPrice);
    deliveryPriceIncrease.innerText = newTotalPrice;

    const pomoTotal = document.getElementById('pomo-Total');
    pomoTotal.innerText = newTotalPrice;

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