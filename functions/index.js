/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 *
 */
// eslint-disable-line no-unused-vars

// import { onRequest } from "firebase-functions/v2/https";
// import logger from "firebase-functions/logger";

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });
import express from "express";
import functions from "firebase-functions";
import cors from "cors";

// For Stripe, since it uses a constructor function,
// we'll need to handle it slightly differently
const stripe = (await import("stripe")).default(
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
export const api = functions.https.onRequest(app);

// exp of endpoint
// http://127.0.0.1:5001/clone-a1514/us-central1/api
