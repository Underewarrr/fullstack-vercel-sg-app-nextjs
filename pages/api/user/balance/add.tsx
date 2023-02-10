import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../../interfaces";
import userService from "../../../../services/user";

// SDK do Mercado Pago
import mercadopago from "mercadopago";
// Adicione as credenciais
mercadopago.configure({
access_token: 'TEST-738152149779382-020923-094431d2d8e5b8d6a29e10a7b1361740-290098653'
});


export default async function userHandler(
req: NextApiRequest,
res: NextApiResponse<User>
) {
switch (req.method) {
case "POST":
return await addBalance(req, res);
default:
return res.status(400);
}
}



const addBalance = async (req: NextApiRequest, res: NextApiResponse) => {



const preference = {
items: [
{
title: req.body.description,
unit_price: Number(req.body.price),
quantity: Number(req.body.quantity),
}
],
back_urls: {
"success": "http://localhost:8080/feedback",
"failure": "http://localhost:8080/feedback",
"pending": "http://localhost:8080/feedback"
},
auto_return: "approved",
};
const { type, message, code } = await userService.userAddBalance(
preference
);

try {
if (type === "ADD_BALANCE") {
return res.status(code).json({ message });
}
return res.status(code).json({ message: 'teste' });
} catch (error) {
return res.status(code).json({ message: error });
}
};

