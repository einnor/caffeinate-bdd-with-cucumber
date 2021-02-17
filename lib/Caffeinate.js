class Customer {
    order() {}

    paysWithCreditCard() {}
}

class Associate {
    processPayment() {
        return true;
    }
}

module.exports = {
    Customer,
    Associate,
};
