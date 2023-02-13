import { rest } from "msw";

const apiUrl = process.env.REACT_APP_URL_API;
const apiKey = process.env.REACT_APP_URL_API_KEY!;

export const handlers = [
  rest.get(`${apiUrl}${apiKey}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(""));
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}${apiKey}`, (req, rest, ctx) => {
    return rest(ctx.status(404));
  }),
];
