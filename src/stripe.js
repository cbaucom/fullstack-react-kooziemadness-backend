module.exports = require("stripe")(process.env.STRIPE_SECRET);

// The above is a simplified version of the following
// const stripe = require('stripe');
// const config = stripe(process.env.STRIPE_SECRET);
// module.exports = config;
