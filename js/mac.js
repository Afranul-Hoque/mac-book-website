// choose memory and added cost

document.getElementById('memory1-button').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-price');
    const memoryNewPrice = 0;
    memoryPrice.innerText = memoryNewPrice;

    const totalPriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(memoryNewPrice);
    totalPriceIncrease.innerText = newTotalPrice;

});

document.getElementById('memory2-button').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-price');
    const memoryNewPrice = 180;
    memoryPrice.innerText = memoryNewPrice;

    const totalPriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(memoryNewPrice);
    totalPriceIncrease.innerText = newTotalPrice;


});


// choose Storage and added cost

document.getElementById('storage1-button').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    const storageNewPrice = 0;
    storagePrice.innerText = storageNewPrice;

    const storagePriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(storageNewPrice);
    storagePriceIncrease.innerText = newTotalPrice;

});


document.getElementById('storage2-button').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    const storageNewPrice = 100;
    storagePrice.innerText = storageNewPrice;

    const storagePriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(storageNewPrice);
    storagePriceIncrease.innerText = newTotalPrice;

});

document.getElementById('storage3-button').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    const storageNewPrice = 180;
    storagePrice.innerText = storageNewPrice;

    const storagePriceIncrease = document.getElementById('total-price');
    const newTotalPrice = 1299 + parseInt(storageNewPrice);
    storagePriceIncrease.innerText = newTotalPrice;

});

