import fs from "fs";

const filesCopy = new URL("../fs/files_copy", import.meta.url);
const filesCurrent = new URL(decodeURI("./files"), import.meta.url);

const copy = async () => {
  try {
    await fs.promises.mkdir(filesCopy, { recursive: true });
    const files = await fs.promises.readdir(filesCurrent);

    await Promise.all(
      files.map(async (el) => {
        try {
          await fs.promises.access(`${filesCurrent.pathname}/${el}`, fs.constants.R_OK);
          await fs.promises.copyFile(
            `${filesCurrent.pathname}/${el}`,
            `${filesCopy.pathname}/${el}`,
            fs.constants.COPYFILE_EXCL
          );
          console.log(`File ${el} copied successfully.`);
        } catch (error) {
          console.error(`Error copying file ${el}:`, error);
        }
      })
    );
  } catch (error) {
    console.log("FS operation failed");
  }
};

await copy();
