import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", ["files/script.js", ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);

  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
    process.exit(code);
  });

  childProcess.on("error", (error) => {
    console.error(`Error spawning child process: ${error.message}`);
    process.exit(1);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["testArg_1", "testArg_2", "testArg_3", "testArg_4"]);
