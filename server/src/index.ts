import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";
import rootRouter from "./routes";

/* Route imports */

/* Configurations */

dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */

app.use("/api", rootRouter);

/* Create Prisma Client Instance*/
export const prismaClient = new PrismaClient({
  log: ["query"],
});

const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
