"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.countTasks = functions.https.onRequest((req, res) => {
    var db = admin.database();
    var ref = db.ref("/tasks");
    ref.once("value", function (snapshot) {
        var count = snapshot.numChildren();
        res.status(200).json({ count: count });
    });
});
// const functions = require('firebase-functions')
// const admin = require('firebase-admin')
// admin.initializeApp();
// const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// const stripe = require('stripe')(firebaseConfig.stripe.testkey)
// exports.stripeCharge = functions.database
//                                 .ref('/payments/{userId}/{paymentId}')
//                                 .onWrite(event => {
//   const payment = event.after.val();
//   const userId = event.params.userId;
//   const paymentId = event.params.paymentId;
//   if (!payment || payment.charge) return;
//   return admin.database()
//   .ref(`/users/${userId}`)
//   .once('value')
//   .then(snapshot => {
//       return snapshot.val();
//    })
//    .then(customer => {
//     const amount = payment.amount;
//     const idempotency_key = paymentId;
//     const source = payment.token.id;
//     const currency = 'usd';
//     const charge = {amount, currency, source};
//     return stripe.charges.create(charge, { idempotency_key });
//   })
//   .then(charge => {
//     admin.database()
//          .ref(`/payments/${userId}/${paymentId}/charge`)
//          .set(charge)
//    })
// });
// // Set your secret key: remember to change this to your live secret key in production
// // See your keys here: https://dashboard.stripe.com/account/apikeys
// var stripe = require("stripe")("sk_test_jgCcjh0DUiDEP5rtlvk70kN3");
// // Token is created using Checkout or Elements!
// // Get the payment token ID submitted by the form:
// const token = request.body.stripeToken; // Using Express
// const charge = stripe.charges.create({
//   amount: 999,
//   currency: 'usd',
//   description: 'Example charge',
//   source: token,
// });
// const stripe = require('stripe')('sk_test_jgCcjh0DUiDEP5rtlvk70kN3');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const router = express.Router();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
// router.post('/processpay', function (request, response) {
//     const stripetoken = request.body.stripetoken;
//     const amountpayable = request.body.amount;
//     const charge = stripe.charge.create({
//         amount: amountpayable,
//         currency: 'usd',
//         description: 'Sample transaction',
//         source: stripetoken
//     }, function (err, charge) {
//         if (err)
//             console.log(err);
//         else
//             response.send({ success: true });
//     })
// })
// app.use(router);
// app.listen(3333, function () {
//     console.log('Server started');
// })
//# sourceMappingURL=index.js.map