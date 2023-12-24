const fs = require("fs").promises;
const filePath = "./version.txt";

const saveVersion = async (version) => {
  const versionPath = "./version.txt";
  if (!version) return;
  await fs.writeFile(versionPath, version);
};

const getVersion = async () => {
  const data = await fs.readFile(filePath, "utf8");
  return data || "v4.2.0";
};

module.exports = {
  saveVersion,
  getVersion,
};
