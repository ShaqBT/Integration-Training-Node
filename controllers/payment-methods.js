import gateway from "../config/gateway.js";

//? https://developer.paypal.com/braintree/docs/reference/response/payment-method/node

export const usBankAccount = (req, res) => {
    const paymentMethodNonce = req.body.nonce 
    gateway.customer.create({}).then(customer => {
      gateway.paymentMethod.create(
        {
          customerId: customer.customer.id,
          paymentMethodNonce: paymentMethodNonce,
          options: {
            us_bank_account_verification_method: "network_check" 
          }
        },
        (err, result) => {
          if (err) res.status(500).json(err);
          if (result.success) res.status(201).json(result);
          else res.status(400).json(result);
        }
      );
    })
  };