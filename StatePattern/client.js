import { FailsafeSocket } from "./failsafeSocket.js";

const failsafeSocket = new FailsafeSocket ({ port : 5000 });

setInterval(() => {
    failsafeSocket.send("hello from failsafeSocket 1")
}, 5000)