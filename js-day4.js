function purchaseBook(bookTitle, bookPrice, discountPercentage, taxPercentage, stock, purchaseAmount) {
    const currency = "IDR";

    if (purchaseAmount > stock) {
        console.log(`Not enough stock available for ${bookTitle}.`);
        return;
    }

    let discountAmount = (discountPercentage / 100) * bookPrice;
    let priceAfterDiscount = bookPrice - discountAmount;
    let taxAmount = (taxPercentage / 100) * priceAfterDiscount;
    let finalPrice = priceAfterDiscount + taxAmount;
    let totalPrice = finalPrice * purchaseAmount;

    for (let i = 0; i < purchaseAmount; i++) {
        stock--;
        if (stock === 0) {
            console.log("Book is out of stock!");
            break;
        }
    }

    console.log(`Book Title: ${bookTitle}`);
    console.log(`Original Price: ${currency} ${bookPrice}`);
    console.log(`Discount (${discountPercentage}%): ${currency} ${discountAmount}`);
    console.log(`Price After Discount: ${currency} ${priceAfterDiscount}`);
    console.log(`Tax (${taxPercentage}%): ${currency} ${taxAmount}`);
    console.log(`Final Price per Book: ${currency} ${finalPrice}`);
    console.log(`Total Price for ${purchaseAmount} books: ${currency} ${totalPrice}`);
    console.log(`Remaining Stock: ${stock}`);
    console.log(stock > 0 ? "Books are still available for purchase." : "No more stock available.");
}

purchaseBook("JavaScript Mastery", 500000, 10, 5, 5, 3);