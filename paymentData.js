const paymentData = {
  totalPrice: 200,
  article: [
    {
      sac: 100,
      chaussure: 100,
    },
  ],
  personal_Info: [
    {
      userId: 1,
      orderId: 123,
    },
  ],
  numeroSend: " 01010101 ",
  nomclient: " John Doe ",
  return_url: " https://your-domain.com/callback ",
  webhook_url: "https://drx-5j0z.onrender.com/webhook", // Le webhook doit accepter les requêtes POST pour recevoir les données.
};
