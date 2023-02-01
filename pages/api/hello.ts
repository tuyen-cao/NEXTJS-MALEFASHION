
import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';
type Data = {
  name: string
}

const testAPI = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.headers.cookie ?? 'aaa')

  res.status(200).json({ name: 'John Doe' })
  // ...
};
export default testAPI