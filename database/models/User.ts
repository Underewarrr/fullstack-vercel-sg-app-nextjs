import { BOOLEAN } from "sequelize";
import { Sequelize, Model, INTEGER, STRING } from "sequelize";
import * as config from "../config/database";

const sequelize = new Sequelize(config);

class Users extends Model {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string;
  balance!: number;
  hasPremium!: boolean;
}

Users.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING(30),
      allowNull: false,
    },
    role: {
      type: STRING(30),
      allowNull: false,
    },
    email: {
      type: STRING(100),
      allowNull: false,
    },
    password: {
      type: STRING(100),
      allowNull: false,
    },
    balance: {
      type: INTEGER,
      allowNull: false,
    },
    hasPremium: {
      type: BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "users",
    timestamps: false,
  }
);

export default Users;
