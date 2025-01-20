function calculateTotalAmount(purchases) {
    let totalAmount = 0;
    purchases.forEach(purchaseAmount => {
      totalAmount += purchaseAmount;
    });
    return totalAmount;
  }
  
  let topPurchasersAmounts = [10000, 20000, 30000];
  console.log(calculateTotalAmount(topPurchasersAmounts));
  
