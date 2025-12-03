const express = require("express");
const cors = require("cors");
const makePayment = require("./pay");
const checkPaymentStatus = require("./checkPaymentStatus");

const app = express();
app.use(express.json());
app.use(cors());

// Endpoint de paiement
app.post("/pay", async (req, res) => {
  try {
    const response = await makePayment(req.body);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint de vérification
app.get("/status/:token", async (req, res) => {
  try {
    const result = await checkPaymentStatus(req.params.token);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Port Render
app.listen(process.env.PORT || 3000, () => {
  console.log("API en ligne");
});
