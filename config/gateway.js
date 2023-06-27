import braintree from "braintree";
import dotenv from "dotenv";

dotenv.config();

// <--- SET UP GATEWAY CONFIGURATION BELOW --->
const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: '67mmk5hdbw6rt32',
  publicKey: 'knt7xgn3hxb6fygj',
  privateKey: 'a9fbf664baf2ecaf07fc759f69d7f666'
});
// <--- / END --->

export default gateway;
