import fs from "fs";

const path = new URL("./files/fresh.txt", import.meta.url);
const content = "I am fresh and young";

const create = async () => {
  try {
    await fs.promises.writeFile(path, content);
    console.log(`File fresh.txt with content ${content} created successfully`);
  } catch (error) {
    console.log("FS operation failed");
  }
};

await create();
