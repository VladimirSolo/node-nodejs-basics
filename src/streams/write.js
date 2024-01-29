import fs from "fs";
import process from "process";
import stream from "stream";

const path = new URL("./files/fileToWrite.txt", import.meta.url);

const write = async () => {
  try {
    const writable = fs.createWriteStream(path);

    await stream.promises.pipeline(process.stdin, writable);
  } catch (error) {
    console.log("STREAM operation failed");
  }
};

await write();
