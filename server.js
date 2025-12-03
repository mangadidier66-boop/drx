const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

// Endpoint paiement
app.post("/pay", async (req, res) => {
    try {
        const response = await axios.post(
            "https://www.pay.moneyfusion.net/bk_market/300c1b571fa48efe/pay/",
            req.body,
            { headers: { "Content-Type": "application/json" } }
        );
        res.json(response.data);
    } catch (err) {
        res.json({ statut: false, message: err.message });
    }
});

// Webhook
app.post("/webhook", (req, res) => {
    console.log("📩 Webhook reçu :", req.body);
    res.sendStatus(200);
});

app.listen(3000, () => console.log("Serveur OK ✔"));

