const { saveLog, copySource, copySliderBar } = require("../utils/spawnCommand");

const getDirectByFName = (fileName) => {
  if (!fileName) {
    saveLog("fileName is Null!");
  }

  return {
    source: `./DB-GPT/docs/${fileName}/*`,
    target: `./${fileName}`,
  };
};

const syncSource = async () => {
  const docsDir = getDirectByFName("docs");
  const staticDir = getDirectByFName("static");

  // 同步mdx资源
  await copySource(
    docsDir.source,
    docsDir.target,
    "=========copy md file...========="
  );

  // 3. 同步静态资源内容到docs项目
  await copySource(
    staticDir.source,
    staticDir.target,
    "=========copy static...========="
  );
  // 4. 同步sliderBar配置， 目录结构
  copySliderBar();
};

module.exports = {
  getDirectByFName,
  syncSource,
};
