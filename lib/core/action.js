const { commandSpawn } = require("../utils/terminal");
const chalk = require("chalk");
const { saveVersion, getVersion } = require("./versionControl");

const createProjectAction = async () => {
  console.log(chalk.whiteBright.bold.bgGreen("=========pull code...========="));
  // 1. 执行git pull
  await commandSpawn("git", ["pull"], { cwd: `./${process.env.PROJECT_NAME}` });

  console.log(chalk.whiteBright.bold.bgGreen("=========copy code...========="));
  // 2. 复制docs内容到docs项目
  await commandSpawn(
    "cp",
    [
      "-r",
      process.env.COPY_DIRECTION || `./${process.env.PROJECT_NAME}`,
      process.env.TARGET_DIRECTION,
    ],
    {
      shell: true,
    }
  );

  console.log(chalk.whiteBright.bold.bgGreen("=========build...========="));
  // 3. 重新执行build
  await commandSpawn("npm", ["run", "build"], {
    cwd: process.env.FRONT_END_DIRECTION || "./",
  });

  console.log(
    chalk.whiteBright.bold.bgGreen("=========success deploy!=========")
  );
};

const publishNewVersion = async (version) => {

  if (!version) {
    return null;
  }
  console.log(
    chalk.whiteBright.bold.bgGreen("=========publish Version...=========")
  );
  // 1. 获取上一版本号
  const curVersion = await getVersion();
  // 2. 保存当前版本号
  await saveVersion(version);

  await commandSpawn("npm", ["run", "docusaurus", "docs:version", curVersion], {
    cwd: `./${process.env.PROJECT_NAME}`,
  });

  console.log(chalk.whiteBright.bold.bgGreen("=========pull code...========="));
  // 2. 执行git pull
  await commandSpawn("git", ["pull"], { cwd: `./${process.env.PROJECT_NAME}` });

  console.log(chalk.whiteBright.bold.bgGreen("=========copy code...========="));
  // 3. 复制docs内容到docs项目
  await commandSpawn(
    "cp",
    [
      "-r",
      process.env.COPY_DIRECTION || `./${process.env.PROJECT_NAME}`,
      process.env.TARGET_DIRECTION,
    ],
    {
      shell: true,
    }
  );

  console.log(chalk.whiteBright.bold.bgGreen("=========build...========="));
  // 4. 重新执行build
  await commandSpawn("npm", ["run", "build"], {
    cwd: process.env.FRONT_END_DIRECTION || "./",
  });

  console.log(
    chalk.whiteBright.bold.bgGreen("=========success deploy!=========")
  );
};

module.exports = {
  createProjectAction,
  publishNewVersion,
};
