const CARD_MINIMUM = 2;

class Customer {
    order() {}

    paysWithCreditCard() {}
}

class Associate {
    processPayment(price) {
        return price > CARD_MINIMUM;
    }
}

module.exports = {
    Customer,
    Associate,
};
