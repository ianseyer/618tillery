stripe = require('stripe')(process.env.STRIPE_KEY)
color = require('color')

//PALETTE = [color1, color2, color3]
module.exports = function(Member) {
  //Generate a stripe account for the new member
  Member.observe('before save', function(ctx, next){

  })
};
