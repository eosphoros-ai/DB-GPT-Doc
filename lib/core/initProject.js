const { commandSpawn } = require("../utils/terminal");
const fs = require("fs");
const chalk = require("chalk");
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
    await commandSpawn("git", ["pull"], {
      cwd: `./${process.env.PROJECT_NAME}`,
    });
    console.log(
      chalk.whiteBright.bold.bgGreen("=========Pull Code!=========")
    );
    console.log(
      chalk.whiteBright.bold.bgGreen("=========项目启动成功!=========")
    );
  } else {
    commandSpawn("git", ["clone", process.env.PROJECT_REPO]);
    console.log(
      chalk.whiteBright.bold.bgGreen("=========Clone Code!=========")
    );
    console.log(
      chalk.whiteBright.bold.bgGreen("=========项目启动成功!=========")
    );
  }
};

module.exports = initProject;
