
import { REQUEST_METHOD } from '@/constants/methodRequest.constant';
import { login } from '@/services/user-service';
import { setCookie } from '@/utilities/cookies';
import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';

type Data = {
  message: string
}


const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  req.headers.cookie = ""
  if (req.method !== REQUEST_METHOD.POST)
    return res.status(404).json({ message: `${req.method} not supported` })

  try {
    const response = await login(req.body)

    setCookie(res, 'token', response?.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development"
    })

    return res.status(200).json({ message: `You are successfully logged in` })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

};
export default handler 
