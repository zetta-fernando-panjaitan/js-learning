function purchaseBook(bookTitle, bookPrice, discountPercentage, taxPercentage) {
    const currency = "IDR";

    let discountAmount = (discountPercentage / 100) * bookPrice;
    let priceAfterDiscount = bookPrice - discountAmount;
    let taxAmount = (taxPercentage / 100) * priceAfterDiscount;
    let finalPrice = priceAfterDiscount + taxAmount;

    console.log(`Book Title: ${bookTitle}`);
    console.log(`Original Price: ${currency} ${bookPrice}`);
    console.log(`Discount (${discountPercentage}%): ${currency} ${discountAmount}`);
    console.log(`Price After Discount: ${currency} ${priceAfterDiscount}`);
    console.log(`Tax (${taxPercentage}%): ${currency} ${taxAmount}`);
    console.log(`Final Price: ${currency} ${finalPrice}`);
}

purchaseBook("JavaScript Mastery", 500000, 10, 5);