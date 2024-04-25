const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const Connection = require("./db/connectDB");
const router = require("./routes/route");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// create payment
app.post("/create-payment-intent", async (req, res) => {
	console.log(req.body);
  const { premiumPrice } = req.body;
  const amount = premiumPrice * 100;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// middleware
app.use(cors());
app.use(express.json());

// env variables
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// database connection
Connection(USERNAME, PASSWORD);

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Welcome to Autostars Serverzzz");
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${PORT}`);
});
