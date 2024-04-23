import cluster from "cluster";
import http from "http";
import os from "os";

const cpuNums = os.cpus().length;

if (cluster.isPrimary) {
  console.time("serially");
  console.log(`Primary process ${process.pid} is running`);
  const worker = cluster.fork();
  worker.send("HELLO!");
  worker.on("message", (msg) => {
    console.log(`Message  "${msg}": recived from ${worker.id}`);
  });
} else {
  process.on("message", (msg) => {
    process.send(msg + "MSG__");
  });

  process.send("Message from Worker");
}
