import jsonOverTcp from 'json-over-tcp-2';

export class OfflineState {
    constructor (failsafeSocket) {
        this.failsafeSocket = failsafeSocket;
    }
    send(data) {
        this.failsafeSocket.queue.push(data);
    }

    activate() {
        const retry = () => {
            setTimeout(() => {
                console.log('Retrying connection...')
                this.activate()
            }, 1000)
        }
        console.log('Trying to connect...')
        this.failsafeSocket.socket = jsonOverTcp.connect(
            this.failsafeSocket.options,
            () => {
                console.log('Connected')
                this.failsafeSocket.socket.removeListener('error', retry)
                this.failsafeSocket.changeState('online')
            }
        )
        this.failsafeSocket.socket.once('error', (err) => {
            console.error(`Error connecting to server: ${err.message}`)
            retry()
        })
    }
}