import gateway from "../config/gateway.js";

//? https://developers.braintreepayments.com/reference/response/transaction/node

export const generateClientToken = (req, res) => {
  const url = req.route.path.substring(1);
  gateway.clientToken
    .generate({})
    .then((response) => {
      const clientToken = response.clientToken;
      res.render(url, { clientToken });
    });
};

export const Sale = (req, res) => {
  let amount = 150
  if (req.body.amount) amount = req.body.amount
  const paymentMethodNonce = req.body.nonce 
  gateway.transaction.sale(
    {
      amount: amount,
      paymentMethodNonce: paymentMethodNonce,
      options: {
        submitForSettlement: true
      }
    },
    (err, result) => {
      if (err) res.status(500).json(err);
      if (result.success) res.status(201).json(result);
      else res.status(400).json(result);
    }
  );
};

export const transactionSaleToken = (req, res) => {
  gateway.transaction.sale(
    {
      amount: 150,
      paymentMethodToken: "token",
      options: {
        submitForSettlement: true
      }
    },
    (err, result) => {
      if (err) res.status(500).json(err);
      if (result.success) res.status(201).json(result);
      else res.status(400).json(result);
    }
  );
};

export const transactionAdjustAuthorization = (req, res) => {
  gateway.transaction.adjustAuthorization(
    "transactionId",
    {
      amount: 150,
    },
    (err, result) => {
      if (err) res.status(400).json(err);
      if (result.success) res.status(201).json(result);
      else res.status(400).json(result);
    }
  );
};

export const transactionSubmitForSettlement = (req, res) => {
  gateway.transaction.submitForSettlement("transactionId", 35, (err, result) => {
    if (err) res.status(400).json(err);
    if (result.success) res.status(201).json(result);
    else res.status(400).json(result);
  });
};

export const transactionSubmitForPartialSettlement = (req, res) => {
  gateway.transaction.submitForPartialSettlement("transactionId", 150, (err, result) => {
    if (err) res.status(400).json(err);
    if (result.success) res.status(201).json(result);
    else res.status(400).json(result);
  });
};

export const transactionVoid = (req, res) => {
  gateway.transaction.void("transactionId", (err, result) => {
    if (err) res.status(400).json(err);
    if (result.success) res.status(201).json(result);
    else res.status(400).json(result);
  });
};

export const transactionRefund = (req, res) => {
  gateway.transaction.refund("transactionId", (err, result) => {
    if (err) res.status(400).json(err);
    if (result.success) res.status(201).json(result);
    else res.status(400).json(result);
  });
};

export const transactionClone = (req, res) => {
  gateway.transaction.cloneTransaction(
    "transactionId",
    {
      amount: 150,
      options: {
        submitForSettlement: true,
      },
    },
    (err, result) => {
      if (err) res.status(400).json(err);
      if (result.success) res.status(201).json(result);
      else res.status(400).json(result);
    }
  );
};

export const transactionFind = (req, res) => {
  gateway.transaction.find("transactionId", (err, transaction) => {
    if (err) res.status(404).json(err);
    else res.status(200).json(transaction);
  });
};

export const transactionSearch = (req, res) => {
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  req.session.transactionData = [];

  const transactionStream = gateway.transaction.search((search) => {
    search.createdAt().between(oneMonthAgo, today);
  });

  transactionStream.on("data", (transaction) => {
    req.session.transactionData.push(transaction);
  });

  transactionStream.on("end", () => {
    res.status(200).json(req.session.transactionData);
  });
};

export const transactionSettling = (req, res) => {
  gateway.testing.settle("transactionId", (err, result) => {
    if (err) res.status(400).json(err);
    if (result.success) res.status(201).json(result);
    else res.status(400).json(result);
  });
};

export const transactionSettlementDeclined = (req, res) => {
  gateway.testing.settlementDecline("transactionId", (err, result) => {
    if (err) res.status(400).json(err);
    if (result.success) res.status(201).json(result);
    else res.status(400).json(result);
  });
};
