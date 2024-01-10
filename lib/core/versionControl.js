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

module.exports = {
  saveVersion,
  getVersion,
  getVersionSync,
};
