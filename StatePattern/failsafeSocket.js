import { OnlineState } from "./onlineState.js";
import { OfflineState} from "./offlineState.js";

export class FailsafeSocket {
    constructor(options) {
        this.options = options;
        this.queue = [];
        this.currentState = null;
        this.socket = null;
        this.states = {
            offline : new OfflineState(this),
            online : new OnlineState(this)
        }
        this.changeState('offline');
    }

    changeState (state) {
        console.log(`Activated state: ${state}`);
        this.currentState = this.states[state];
        this.currentState.activate()
    }
    send (data) {
        this.currentState.send(data);
    }
} 