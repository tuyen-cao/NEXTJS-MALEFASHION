
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
    setCookie(res, 'token', '', {
        sameSite: 'lax',
        maxAge: -1,
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV !== "development"
    })

    return res.status(200).json({ message: `You are successfully logged out` })
};
export default handler 
