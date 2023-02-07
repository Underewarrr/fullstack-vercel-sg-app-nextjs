import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '../../../interfaces'
import userService from '../../../services/user'

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const { query, method } = req
  const id = parseInt(query.id as string, 10)
  const name = query.name as string
 const { email, password } = req.body;
    const { type, message, code, token } = await userService.userLogin(email, password);

    switch (req.method) {
      case "POST":
        const login = async (req: NextApiRequest, res: NextApiResponse) => {
   
          try 
          {
            if (type === 'NOT_AUTH') 
            {
              return res.status(code).json({ message });
            }
            return res.status(code).json({ message: token });
          } 
          catch (error) 
          {
            return res.status(code).json({ message: error });
          }
        };
      case "DELETE":
        // return await (req, res);
      case "PUT":
       // return await (req, res);
      default:
        return res.status(400);
    }


/* 
  
  switch (method) {
    case 'GET':
      
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  } */
}
