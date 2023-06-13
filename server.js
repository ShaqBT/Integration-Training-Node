import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import routes from "./routes/routes.js";

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticRoot = path.join(__dirname, "./public");

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticRoot));

app.use(routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
