const Koa = require("koa");
const Router = require("koa-router");
const { createProjectAction } = require("./lib/core/action");
const initProject = require("./lib/core/initProject");
const { publishNewVersion } = require("./lib/core/action");
const bodyParser = require('koa-bodyparser');

require("dotenv").config();

const app = new Koa();
var router = new Router();

app.use(bodyParser());

router.get("/deploy", async (ctx, next) => {
  await createProjectAction();
  ctx.body = "GET Publish Success!";
});

router.post("/deploy", async (ctx, next) => {
  await createProjectAction();
  ctx.body = "POST Publish Success!";
});

router.get("/publish", async (ctx, next) => {
  
  const tag = ctx?.request?.tag;
  await publishNewVersion(tag);
  ctx.body = "GET Success!";
});

router.post("/publish", async (ctx, next) => {
  const tag = ctx?.request.body?.tag;
  await publishNewVersion(tag);
  ctx.body = ctx?.request.body;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.APP_PORT, async () => {
  await initProject();
  console.log(
    `Service started successfully: http://localhost:${process.env.APP_PORT}`
  );
});
