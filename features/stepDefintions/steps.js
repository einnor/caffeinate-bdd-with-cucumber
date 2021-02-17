const { Given, When, Then, Before } = require('@cucumber/cucumber');
const assert = require('assert').strict;

const { Customer, Associate } = require('../../lib/Caffeinate');

Before(function () {
    this.maria = new Customer();
    this.li = new Associate();
});

Given('Maria orders ${int} of coffee from Li', function (int) {
    this.price = int;
    this.maria.order();
});

When('Maria pays with a credit card', function () {
    this.maria.paysWithCreditCard();
});

Then('Li should process the payment', function () {
    assert.equal(this.li.processPayment(this.price), true);
});

Then('Li should not process the payment', function () {
    assert.equal(this.li.processPayment(this.price), false);
});