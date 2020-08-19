import {LinkTransport} from 'anchor-link'
import {SigningRequest} from 'eosio-signing-request'

import {AnchorLinkSessionManager} from '../../src/manager'
import {MockWallet} from './mock-wallet'

export class MockTransport implements LinkTransport {
    public manager: AnchorLinkSessionManager
    public wallet: MockWallet

    constructor(manager: AnchorLinkSessionManager, wallet: MockWallet) {
        this.manager = manager
        this.wallet = wallet
    }

    async onRequest(request: SigningRequest) {
        this.wallet.completeRequest(request, this.manager)
    }
}
