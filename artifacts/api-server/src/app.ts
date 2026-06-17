import express, { type Express } from "express";
import cors from "cors";
import pinoHttpLib from "pino-http";
import type { IncomingMessage, ServerResponse } from "node:http";
import router from "./routes";
import { logger } from "./lib/logger";

// pino-http@10 uses `export =` which is incompatible with moduleResolution:"bundler"
// cast to any to call it while retaining IntelliSense on the rest of the file
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pinoHttp = pinoHttpLib as unknown as (opts: any) => any;

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: IncomingMessage & { id?: unknown }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ServerResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
