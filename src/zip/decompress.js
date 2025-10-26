import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import { access } from "fs/promises";

const archiveFile = new URL("archive.gz", import.meta.url);
const decompressFile = new URL("fileToCompress.txt", import.meta.url);

const decompress = async () => {
  try {
    await access(archiveFile);

    const readable = createReadStream(archiveFile);
    const writable = createWriteStream(decompressFile);
    const gunzipStream = createGunzip();

    await pipeline(readable, gunzipStream, writable);

    console.log("Decompression successful!");
  } catch (error) {
    console.error("Error Decompression failed:", error);
  }
};

await decompress();
