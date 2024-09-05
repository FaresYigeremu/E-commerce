/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Pus4KBUPgMzEiCzHk80zqR3QVoAJMupeNkDYu1ztIvi9vZTW5lmQ04wJ33f6cYD8aTEJNUpqHTl5D8Kf3VUtRsU00bsmrNajf"
);
// - API
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!! for this amound >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits
    currency: "usd",
  });
  //ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// exp of endpoint
// http://127.0.0.1:5001/clone-a1514/us-central1/api
