import express from "express";
import { index } from "../Controllers/index.js";

const routerIndex = express.Router();

routerIndex.get('/', index);

export { routerIndex }