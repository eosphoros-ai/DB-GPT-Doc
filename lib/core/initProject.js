const { commandSpawn } = require("../utils/terminal");
const fs = require("fs");
const chalk = require("chalk");
const { logger } = require("../utils/terminal");
const {
  copySource,
  fetchSource,
  saveLog,
  cloneRepo,
} = require("../utils/spawnCommand");
const currentPath = "./";

const initProject = async () => {
  let existProject = false;
  const files = fs.readdirSync(currentPath);
  files.forEach((file) => {
    if (fs.statSync(file).isDirectory()) {
      if (file === (process.env.PROJECT_NAME || "DB-GPT")) {
        existProject = true;
      }
    }
  });

  if (existProject) {
    fetchSource();

    // 同步mdx资源
    await copySource(
      process.env.COPY_DIRECTION,
      process.env.TARGET_DIRECTION,
      "=========copy md file...========="
    );

    // 3. 同步静态资源内容到docs项目
    await copySource(
      process.env.STATIC_DIRECTION,
      process.env.STATIC_TARGET_DIRECTION,
      "=========copy static...========="
    );

    saveLog("=========项目启动成功!=========");
  } else {
    await cloneRepo();

    logger.info(`copy code...`);
    console.log(
      chalk.whiteBright.bold.bgGreen("=========copy code...=========")
    );

    // 同步mdx资源
    await copySource(
      process.env.COPY_DIRECTION,
      process.env.TARGET_DIRECTION,
      "=========copy md file...========="
    );

    // 3. 同步静态资源内容到docs项目
    await copySource(
      process.env.STATIC_DIRECTION,
      process.env.STATIC_TARGET_DIRECTION,
      "=========copy static...========="
    );

    saveLog("=========项目启动成功!=========");
  }
};

module.exports = initProject;
