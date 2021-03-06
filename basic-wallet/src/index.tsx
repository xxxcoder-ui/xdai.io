import React from 'react';
import ReactDOM from 'react-dom';
import { xdai, dai, eth } from '@burner-wallet/assets';
import BurnerCore from '@burner-wallet/core';
import { InjectedSigner, LocalSigner } from '@burner-wallet/core/signers';
import { InfuraGateway, InjectedGateway, XDaiGateway, } from '@burner-wallet/core/gateways';
import Exchange, { Uniswap, XDaiBridge } from '@burner-wallet/exchange';
import MinimalUI from 'minimal-ui';
import MyPlugin from 'my-plugin';

const core = new BurnerCore({
  signers: [new InjectedSigner(), new LocalSigner()],
  gateways: [
    new InjectedGateway(),
    new InfuraGateway(process.env.REACT_APP_INFURA_KEY=https://optimism-mainnet.infura.io/v3/dafe7978cb1145039d88ae648aa3278a),
    new XDaiGateway(https://opt-mainnet.g.alchemy.com/v2/L-FO35KamCp-0H97HmpI7GKY8FT6Qvpr),
  ],
  assets: [xdai, dai, eth],
});

const exchange = new Exchange({
  pairs: [new XDaiBridge(), new Uniswap('dai')],
});

const BurnerWallet = () =>
  <ModernUI
    title="Basic Wallet"
    core={core}
    plugins={[exchange, new MyPlugin()]}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
