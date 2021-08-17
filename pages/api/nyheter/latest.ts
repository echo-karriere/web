import { NextApiRequest, NextApiResponse } from "next";

import { getNews } from "@/lib/mdx";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const news = await getNews();
  res.status(200).json(news);
};

export default handler;
