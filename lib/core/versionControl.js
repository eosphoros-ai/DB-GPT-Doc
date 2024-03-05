const fs = require("fs").promises;
const fsSync = require("fs");
const filePath = "./version.txt";

const saveVersion = async (version) => {
  const versionPath = "./version.txt";
  if (!version) return;
  await fs.writeFile(versionPath, version);
};

const getVersion = async () => {
  const data = await fs.readFile(filePath, "utf8");
  return data;
};

const getVersionSync = () => {
  const data = fsSync.readFileSync(filePath, {
    encodeURI: "utf8",
  });
  return data;
};

const delVersion = async () => {
  const versionPath = "./versions.json";
  // 1. 从version.json中删除
  const data = await fs.readFile(versionPath, "utf8");
  let delVersion;
  try {
    const versionArr = JSON.parse(data);
    if (!versionArr) {
      return false;
    }
    // 获得要删除的版本号
    delVersion = versionArr[versionArr.length - 1];

    const newVersions = versionArr.filter(
      (_, index) => index !== versionArr.length - 1
    );

    // 删除该版本号
    await fs.writeFile(versionPath, JSON.stringify(newVersions, null, 2));
    logger.info(`删除版本号： ${delVersion}成功！`);
  } catch (error) {
    logger.error(`delete version error : ${error}`);
  }

  // 2. 删除版本化文件目录， 比如versioned_docs/versions-
  // 3. 删除本地化侧边栏文件
};

module.exports = {
  saveVersion,
  getVersion,
  getVersionSync,
  delVersion,
};
