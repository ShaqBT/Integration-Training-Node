import gateway from "../config/gateway.js";

// https://developers.braintreepayments.com/reference/request/client-token/generate/node

export const clientTokenGeneration = async () => {
  // BRAINTREE GENERATE CLIENT TOKEN API REQUEST
  const clientToken = await gateway.clientToken.generate();
  // <--- / END --->
  return clientToken;
};