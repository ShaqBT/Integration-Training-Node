import express from "express";
import { clientTokenGeneration } from "../controllers/clientToken.js";
import { transactionSale } from "../controllers/transactions.js";
import { index } from "../controllers/index.js";

const router = express.Router();

router.get("/", index)

router.get("/home", (req, res) => res.render("home"))

router.get("/drop-in", clientTokenGeneration);

router.get("/hosted-fields", clientTokenGeneration);

router.get("/three-d-secure", clientTokenGeneration);

router.post("/transaction-sale", transactionSale);

export default router;
