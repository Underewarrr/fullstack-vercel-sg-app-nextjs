import usersModel from "../database/models/User";
import * as JWT from "jsonwebtoken";

import mercadopago from "mercadopago";
// Adicione as credenciais
mercadopago.configure({
  access_token: 'TEST-738152149779382-020923-094431d2d8e5b8d6a29e10a7b1361740-290098653'
});

const userLogin = async (email: string, password: string) => {
  const data = await usersModel.findOne({ where: { email } });
  if (!data) {
    return { code: 404, type: "NOT_AUTH", message: "Email não encontrado" };
  }

  function verifyPassword(reqPassword: string, dbPassword: string) {
    if (reqPassword === dbPassword) {
      return true;
    }
    return false;
  }

  const verify = verifyPassword(password, data.password);

  if (!verify) {
    return {
      code: 401,
      type: "NOT_AUTH",
      message: "Email ou senha incorretas",
    };
  }

  const createToken = (token: number) => {
    const tokenData = {
      id: data.id,
      username: data.username,
      email: data.email,
    };
    return JWT.sign(tokenData, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
      algorithm: "HS256",
    });
  };

  const token = createToken(data.id);

  return { code: 200, type: "AUTH", message: "Login success!", token };
};

const userRegister = async (
  username: string,
  email: string,
  password: string
) => {
  let data = await usersModel.findOne({ where: { email } });

  if (data) {
    return { code: 409, type: "REGISTER_ERROR", message: "Usuário existe!" };
  }

  const dataValues = await usersModel.create({
    username,
    email,
    // password: md5Password,
    password,
    role: "customer",
    hasPremium: false,
    balance: 0,
  });
  data = dataValues;

  return { type: "REGISTRED", data, code: 201, dataValues };
};

const userAddBalance = async (preference) => {
  const data = await mercadopago.preferences.create(preference)
  if (data) {
    return { code: 200, type: "ADD_BALANCE", message: "Payment Request"}
  }
}

export default { userLogin, userRegister, userAddBalance };
