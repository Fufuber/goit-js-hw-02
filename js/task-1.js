function makeTransaction(quantity, pricePerDroid, customerCredits) {
    if (typeof quantity !== "number" || typeof pricePerDroid !== "number" || typeof customerCredits !== "number") {
        alert("Lütfen sadece sayı girin!");
        return;
    }
    let totalAmount = quantity * pricePerDroid;

    if ((customerCredits >= totalAmount) && (quantity > 0)) {
        return `You ordered ${quantity} droids worth ${totalAmount} credits!`;}
    else {
        return "Insufficient funds!"
    }

    }
}