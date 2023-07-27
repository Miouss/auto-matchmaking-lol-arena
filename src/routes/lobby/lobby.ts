import { Router, Request, Response, NextFunction } from "express";

import { request } from "../../utils/request";

async function test(_: Request, res: Response, __: NextFunction) {
  const endpoint = "/lol-champ-select/v1/bannable-champion-ids";
  const response = await request(endpoint);

  return res.status(response.status).send(response.data);
}

const lobby = Router();

lobby.post("/", test);

export { lobby };
