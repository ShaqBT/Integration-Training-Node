import express from "express";
import { clientTokenGeneration } from "../controllers/clientToken.js";
import { transactionSale } from "../controllers/transactions.js";
import { clientTokenServer, credentials, index } from "../controllers/index.js";

const router = express.Router();

router.get("/", index)

router.get("/credentials", credentials)

router.get("/client-token", clientTokenServer)

router.get("/drop-in", clientTokenGeneration);

router.post("/transaction-sale", transactionSale);

export default router;
