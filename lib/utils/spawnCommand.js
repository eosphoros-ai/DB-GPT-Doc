const { logger, commandSpawn } = require("./terminal");
const chalk = require("chalk");

const saveLog = (message) => {
  const isStr = typeof message === "string";

  logger.info(message);

  isStr && console.log(chalk.whiteBright.bold.bgGreen(message));
};

const copySource = async (source, target, message) => {
  saveLog(message);

  await commandSpawn("cp", ["-r", source, target], {
    shell: true,
  });

  logger.info(`cp -r ${source} ${target}!`);
};

const fetchSource = async () => {
  saveLog("=========Pull Code...=========");

  await commandSpawn("git", ["pull"], {
    cwd: `./${process.env.PROJECT_NAME}`,
  });
};

const cloneRepo = async () => {
  saveLog("=========Clone Code...=========");

  await commandSpawn("git", ["clone", process.env.PROJECT_REPO]);
};

module.exports = {
  saveLog,
  copySource,
  fetchSource,
  cloneRepo,
};
