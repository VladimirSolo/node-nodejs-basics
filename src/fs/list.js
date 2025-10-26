import fs from "fs"

const path = new URL('./files', import.meta.url);

const list = async () => {
    try {
        const files = await fs.promises.readdir(path);
        console.log({files});
      } catch (error) {
        console.log("FS operation failed");
      }
};

await list();
