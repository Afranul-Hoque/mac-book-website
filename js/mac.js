// choose memory and added cost

document.getElementById('memory1-button').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-price');
    const memoryNewPrice = parseInt(memoryPrice.innerText) + 0;
    memoryPrice.innerText = memoryNewPrice;

    const totalPriceIncrease = document.getElementById('total-price');
    const newTotalPrice = parseInt(totalPriceIncrease.innerText) + parseInt(memoryNewPrice);
    totalPriceIncrease.innerText = newTotalPrice;

});

document.getElementById('memory2-button').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-price');
    const memoryNewPrice = parseInt(memoryPrice.innerText) + 180;
    if (memoryNewPrice <= 180) {
        memoryPrice.innerText = memoryNewPrice;

        const totalPriceIncrease = document.getElementById('total-price');
        const newTotalPrice = parseInt(totalPriceIncrease.innerText) + parseInt(memoryNewPrice);
        totalPriceIncrease.innerText = newTotalPrice;
    }

});



