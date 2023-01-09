
import { NextApiRequest, NextApiResponse } from 'next';
type Data = {
  name: string
}

const testAPI = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
  // ...
};
export default testAPI