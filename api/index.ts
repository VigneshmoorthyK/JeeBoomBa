const express = require('express');
const Stripe = require('stripe');

const stripe = new Stripe('sk_test_51NybFRSEckTmmCIwpw2ndzyfRG6GOiQN8lBftr4pv4ejmpn4ar70upaBsYa2QAmz0hWHyXcHgpleP4zYbtPhJhLa00t3AnZMka', {
  apiVersion: '2023-10-16',
  typescript: true,
});
const app = express();
app.use(express.json());

app.post('/create-payment-intent', async (req : any, res : any) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 3000,
    currency: 'inr',
    description:"description"
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(3000, () => console.log('Server up'));