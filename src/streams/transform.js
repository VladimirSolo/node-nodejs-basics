import fs from "fs";
import process from "process";
import stream from "stream";

const transform = async () => {
  try {
    const readable = process.stdin;

    const reverse = new stream.Transform({
      transform(chunk, encoding, callback) {
        const reversedStdin = chunk.toString().split("").reverse().join("");

        this.push(reversedStdin);

        callback();
      },
    });

    readable.pipe(reverse).pipe(process.stdout);
  } catch (error) {}
};

await transform();
