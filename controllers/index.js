import gateway from "../config/gateway.js";
import fs from "fs";
import { clientTokenGeneration } from "./clientToken.js";
import { updateData } from "../utils/functions.js"

export const index = async (req, res) => {
  const data = fs.readFileSync('./data/data.json');
  const parsedData = JSON.parse(data)
  res.render("index", {parsedData});
};

export const credentials = async (req, res) => {
  try {
    const response = await gateway.clientToken.generate();
    var feedback = { status: "SUCCESS", data: gateway.config }
  } catch (exception) {
    console.log(exception)
    var feedback = { status: "FAILURE", data: exception }
  }
  res.render("credentials", { feedback });
};

export const clientTokenServer = async (req, res) => {
  try {
    const result = await clientTokenGeneration()
    const clientToken = result.clientToken
    var feedback = { status: "SUCCESS", token: clientToken, decoded: atob(clientToken) }
  } catch (exception) {
    var feedback = { status: "FAILURE", data: exception }
  }
  res.render("client-token", { feedback });
};