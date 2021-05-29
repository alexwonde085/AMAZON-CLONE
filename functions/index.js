const functions = require("firebase-functions");
const express = require ("express");
const cors = require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe = require ("stripe")('sk_test_51IcJNVKG0RVx7ZMULBGeoLQRdFl1fqx4kYIuw3BV2kdpJRwfuf8u3HseWnGKtTlENw0vNiRTCLb57JS5VSBEysMJ00kiWedlLC');

//API

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routers
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("payment request recieved Boom !!! for this amount >>>>>>>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });
    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
//Listen Command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-6cdf3/us-central1/api