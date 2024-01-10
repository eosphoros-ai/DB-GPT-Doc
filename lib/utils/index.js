const { saveLog } = require("../utils/spawnCommand");

export const getDirectByFName = (fileName) => {
  if (!fileName) {
    saveLog("fileName is Null!");
  }

  return {
    source: `./DB-GPT/docs/${fileName}/*`,
    target: `./${fileName}`,
  };
};
