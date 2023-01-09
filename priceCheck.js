function priceCheck(
    products,
    productPrices,
    productSold,
    soldPrice,
) {
    let errorCount = 0;
    // map of products, key = product title, value = product price
    const productsMap = {};
    for (let i = 0; i < products.length; i++) {
        productsMap[products[i]] = productPrices[i];
    }
    for (let i = 0; i < productSold.length; i++) {
        if (productsMap[productSold[i]] !== soldPrice[i]) {
            errorCount += 1;
        }
    }
    return errorCount;
}

console.log(priceCheck(
	products=['rice', 'sugar', 'wheat', 'cheese'],
	productPrices=[16.89, 56.92, 20.89, 345.99],
	productSold=['rice', 'cheese'],
	soldPrice=[18.99, 400.89]
));