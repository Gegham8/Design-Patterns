const Payment = require('./payment');
const Chase = require('./Chase');
const Citibank = require('./Citibank');


const payment = new Payment();
payment.pay(new Chase(200, "0023131313"));
