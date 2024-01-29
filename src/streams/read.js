import fs from "fs";
import process from "process";
import stream from "stream";

const path = new URL("./files/fileToRead.txt", import.meta.url);

const read = async () => {
  try {
    const fileContent = fs.readFileSync(path, "utf-8");

    const readableStream = stream.Readable.from(fileContent);

    readableStream.pipe(process.stdout);

    readableStream.on("end", () => {
      console.log("\nFile reading completed.");
    });

  } catch (error) {
    console.log("STREAM operation failed");
  }
};

await read();


/* 
const read = async () => {
  try {
    const readable = fs.createReadStream(path, "utf-8");

    readable.on("error", (error) => console.log(`error: ${error.message}`));

    readable.on("data", (chunk) => process.stdout.write(chunk));

    readable.on("end", () => console.log("\nFile reading completed."));

  } catch (error) {
    console.log("STREAM operation failed");
  }
};

await read(); 
*/