import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../interfaces";
import userService from "../../../services/user";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  switch (req.method) {
    case "POST":
      return await userGetInfo(req, res);
    default:
      return res.status(400);
  }
}

const userGetInfo = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email } = req.body;
  
    const { data, type, message, code } = await userService.userGetInfo(
      email
    );
  
    try {
      if (type === "FIND_ERROR") {
        return res.status(code).json({ message });
      }
      return res.status(code).json({ message: data });
    } catch (error) {
      return res.status(code).json({ message: error });
    }
  };