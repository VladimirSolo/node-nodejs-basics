import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const numCPUs = os.cpus().length;

  const workerPromises = [];

  for (let i = 0; i < numCPUs; i++) {
    const workerPromise = new Promise((resolve) => {
      const worker = new Worker(path.join(__dirname, "worker.js"));

      worker.on("message", (result) => {
        if (result && typeof result === "object" && result.error) {
          resolve({ status: "error", data: null });
        } else {
          resolve({ status: "resolved", data: result });
        }
        worker.terminate();
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          resolve({ status: "error", data: null });
        }
      });

      worker.postMessage(10 + i);
    });

    workerPromises.push(workerPromise);
  }
  const results = await Promise.all(workerPromises);

  console.log(results);
};

await performCalculations();
