import { FailsafeSocket } from "./failsafeSocket.js";

const failsafeSocket = new FailsafeSocket ({ port : 5000 });

setInterval(() => {
    failsafeSocket.send("hello from failsafeSocket 2")
}, 5000)