import express from "express";
import { clientTokenForDropIn } from "../controllers/CLIENT_TOKEN.js";
import { transactionSale } from "../controllers/TRANSACTION.js";
import { clientTokenServer, credentials, index, transaction, transactionReady } from "../controllers/index.js";

const router = express.Router();

router.get("/", index)

router.get("/credentials", credentials)

router.get("/client-token", clientTokenServer)

router.get("/drop-in", clientTokenForDropIn);

router.post("/", transaction);

router.get("/txn-ready/:nonce", transactionReady);

router.post("/transaction-sale", transactionSale);

export default router;
