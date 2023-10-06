const os = require("os");
const cluster = require("cluster");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

const cpus = os.cpus();

if (cluster.isMaster) {0
    console.log(`Master process on pid ${process.pid}`);
    for (let i = 0; i < cpus.length; i++) {
      cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`process with pid ${worker.process.pid} is dead`)
        cluster.fork()
    })
} else {
    console.log(`current process ${process.pid} is running`)

    setInterval(() => {
        console.log(`current process ${process.pid} is still working`);
    }, 5000)
}

