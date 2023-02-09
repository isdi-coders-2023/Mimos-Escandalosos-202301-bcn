import { rest } from "msw";

const apiUrl = process.env.REACT_APP_URL_API;
const apiKey = process.env.REACT_APP_URL_API_KEY!;

export const handlers = [
  rest.get(`${apiUrl}${apiKey}`, (req, res, ctx) => {
    const queryParams = req.url.searchParams.getAll(apiKey);
    return res(ctx.status(200), ctx.json(queryParams));
  }),
];
