const Koa = require("koa");
const Router = require("koa-router");
const { createProjectAction } = require("./lib/core/action");
const initProject = require("./lib/core/initProject");
const { publishNewVersion } = require("./lib/core/action");

require("dotenv").config();

const app = new Koa();
var router = new Router();

router.get("/deploy", async (ctx, next) => {
  console.log('========', ctx.request.body);
  const tag = ctx.request.body.tag;
  await createProjectAction(tag);
  ctx.body = "GET Publish Success!";
});

router.post("/deploy", async (ctx, next) => {
  console.log('========', ctx.request.body);
  const tag = ctx.request.body.tag;
  await createProjectAction(tag);
  ctx.body = "POST Publish Success!";
});

router.get("/publish", async (ctx, next) => {
  await publishNewVersion();
  ctx.body = "GET Success!";
});

router.post("/publish", async (ctx, next) => {
  await publishNewVersion();
  ctx.body = "POST Success!";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.APP_PORT, async () => {
  await initProject();
  console.log(
    `Service started successfully: http://localhost:${process.env.APP_PORT}`
  );
});
