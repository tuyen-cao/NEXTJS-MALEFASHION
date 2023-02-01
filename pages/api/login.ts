
import { REQUEST_METHOD } from '@/constants/methodRequest.constant';
import { login } from '@/services/user-service';
import { setCookie } from '@/utilities/cookies';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string
}


const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  req.headers.cookie = ""
  if (req.method !== REQUEST_METHOD.POST)
    return res.status(404).json({ message: `${req.method} not supported` })

  try {
    const response = await login(req.body)
    if (response?.data) {
      setCookie(res, 'token', response?.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development" 
      })
      // Return the `set-cookie` header so we can display it in the browser and show that it works!
      //res.end(res.getHeader('Set-Cookie'))
      return res.status(200).json({ message: `You are successfully logged in` })
    }
    return res.status(500).json({ message: 'You are failed logged in' })

  } catch (error) {
    return res.status(500).json({ message: "Error!!!" })
  }

};
export default handler 