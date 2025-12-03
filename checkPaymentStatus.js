// checkPaymentStatus.js
const axios = require("axios");

const checkPaymentStatus = async (token) => {
  try {
    const response = await axios.get(
      `https://www.pay.moneyfusion.net/paiementNotif/${token}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = checkPaymentStatus;
