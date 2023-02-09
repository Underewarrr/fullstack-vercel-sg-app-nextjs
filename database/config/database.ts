import "dotenv/config";
import { Options } from "sequelize";
const mysql = require("mysql2");

const config: Options = {
  username: process.env.DB_USER || "",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "",
  host: process.env.DB_HOST || "www.db4free.net",
  // port: Number(process.env.DB_PORT) || 3002,
  dialect: "mysql",
  dialectModule: mysql, // Needed to fix sequelize issues with WebPack
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

module.exports = config;
