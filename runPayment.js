// runPayment.js
const makePayment = require("./pay");
const paymentData = require("./paymentData");
const checkPaymentStatus = require("./checkPaymentStatus");

(async () => {
  try {
    console.log("Envoi du paiement...");
    const response = await makePayment(paymentData);

    console.log("Réponse API :", response);

    // Récupérer le token renvoyé par MoneyFusion
    const token = response?.token;

    if (!token) {
      console.log("Aucun token reçu.");
      return;
    }

    console.log("Vérification du statut...");
    const status = await checkPaymentStatus(token);

    console.log("Statut du paiement :", status);

  } catch (error) {
    console.error("Erreur :", error.message || error);
  }
})();
