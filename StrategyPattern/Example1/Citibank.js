const Bank = require("./Bank");
class CitiBank extends Bank {
    processPayment() {
        console.log(`Your payment of ${this.amount} for ${
            this.account
        } has been processed by CitiBank`);
    };
    processRefund() {
        console.log(`Your refund of ${this.amount} for ${
            this.account
        } has been processed by CitiBank`);
    }
}

module.exports = CitiBank;