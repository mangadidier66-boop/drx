
// pay.js
const axios = require("axios");

const apiUrl = "https://www.pay.moneyfusion.net/bk_market/300c1b571fa48efe/pay/"; // URL venant de ton dashboard MoneyFusion

const makePayment = async (paymentData) => {
  try {
    const response = await axios.post(apiUrl, paymentData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    // Correction : lancer l'erreur => throw error
    throw error;
  }
};

module.exports = makePayment;
