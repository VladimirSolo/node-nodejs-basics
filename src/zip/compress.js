import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const pipelineAsync = promisify(pipeline);
const compressFile = new URL("./files/fileToCompress.txt", import.meta.url);
const archiveFileName = "archive.gz";

const compress = async () => {
  const readStream = createReadStream(compressFile);
  const gzipStream = createGzip();

  const writeStream = createWriteStream(archiveFileName);

  try {
    await pipelineAsync(readStream, gzipStream, writeStream);
    console.log("Compression successfully complete.");

  } catch (error) {
    console.error("Error compression:", error);
  }
};

compress();
