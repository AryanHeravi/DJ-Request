import Stripe from 'stripe';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
if (req.method !== 'POST') {
return res.status(405).json({ error: 'Method not allowed' });
}


try {
const { amount } = req.body;


const intent = await stripe.paymentIntents.create({
amount,
currency: 'cad',
automatic_payment_methods: { enabled: true },
});


res.status(200).json({ clientSecret: intent.client_secret });
} catch (err) {
res.status(500).json({ error: err.message });
}
}