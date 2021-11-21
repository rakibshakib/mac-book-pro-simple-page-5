const finalPrice = document.getElementById('final-total-price');
// get items price
function itemsPrice(item, price) {
    const itemPrice = document.getElementById(item + '-price');
    const companyMemoryPrice = 0 + price;
    itemPrice.innerText = companyMemoryPrice;
    totalPrice();
}
// total price calculation
function totalPrice() {
    const regularPrice = document.getElementById('regular-price').innerText;
    const memoryPrice = document.getElementById('memory-price').innerText;
    const storagePrice = document.getElementById('storage-price').innerText;
    const deliveryPrice = document.getElementById('delivery-price').innerText;
    const itemTotalPrice = parseInt(regularPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = itemTotalPrice;
    finalPrice.innerText = itemTotalPrice;
    return itemTotalPrice;
}
// coupon calculation
function discount() {
    const promoInput = document.getElementById('promo-input');
    const itemTotalPrice = totalPrice();
    let discountPrice;
    if (promoInput.value == 'stevekaku') {
        discountPrice = itemTotalPrice * (20 / 100);
        promoInput.value = '';
    } else {
        alert('sorry! Your coupon is wrong');
        discountPrice = 0;
        promoInput.value = '';
    }
    const afterDiscountTotalPrice = itemTotalPrice - discountPrice;
    finalPrice.innerText = parseInt(afterDiscountTotalPrice);
}
// here are all button event 
document.getElementById('normal-memory').addEventListener('click', function () {
    itemsPrice('memory', 0)
})
document.getElementById('extra-memory').addEventListener('click', function () {
    itemsPrice('memory', 180)
})
document.getElementById('normal-ssd').addEventListener('click', function () {
    itemsPrice('storage', 0);
})
document.getElementById('fifth-gb-ssd').addEventListener('click', function () {
    itemsPrice('storage', 100);
})
document.getElementById('one-tera-ssd').addEventListener('click', function () {
    itemsPrice('storage', 180);
})
document.getElementById('normal-delivery').addEventListener('click', function () {
    itemsPrice('delivery', 0);
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    itemsPrice('delivery', 20);
})
document.getElementById('promo-btn').addEventListener('click', function () {
    discount();
})