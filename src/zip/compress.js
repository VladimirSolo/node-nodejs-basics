import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import zlib from "zlib";
import { URL } from "url";

const compressFile = new URL("./files/fileToCompress.txt", import.meta.url);
const archiveFileName = new URL("./archive.gz", import.meta.url);

const compress = async () => {
  try {
    const readable = createReadStream(compressFile);
    const writable = createWriteStream(archiveFileName);
    const gzipStream = zlib.createGzip();

    await pipeline(readable, gzipStream, writable);

    console.log("Compression successful!");
  } catch (error) {
    console.error("Compression failed:", error);
  }
};

await compress();
