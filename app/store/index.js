import { action, observable, computed, observe, when } from "mobx";
import contract from "truffle-contract";
import BigNumber from "bignumber.js";
import IPFS from "ipfs";

export default class Store {
  @observable currentBlock = "latest";
  @observable currentAccount = null;
  @observable currentNetwork = null;

  constructor(readOnlyWeb3, writeOnlyWeb3) {
    this.readOnlyWeb3 = readOnlyWeb3;
    this.writeOnlyWeb3 = writeOnlyWeb3;
    this.ipfsNode = new IPFS();
    this.accountInterval = setInterval(() => this.setCurrentAccount(), 500); // Ugh ಠ_ಠ
    this.networkInterval = setInterval(() => this.setCurrentNetwork(), 500);
    this.blockInterval = setInterval(() => this.setCurrentBlock(), 1000);

    // Watch isReady
    when(
      () => this.isReady,
      () => {
        this.setWatchers();
      }
    );
  }

  @computed
  get web3() {
    return this.readOnlyWeb3 || this.writeOnlyWeb3;
  }

  @computed
  get isReady() {
    return this.currentAccount && this.currentBlock && this.curatorInstance;
  }

  // Setters
  setWatchers() {
    // Add watchers
  }

  setCurrentAccount() {
    (this.writeOnlyWeb3 || this.readOnlyWeb3).eth.getAccounts(
      action((error, accounts) => {
        this.currentAccount = accounts[0];
        if (error) {
          console.log("Error", "setCurrentAccount", error);
        }
      })
    );
  }

  setCurrentNetwork() {
    this.web3.version.getNetwork((error, network) => {
      this.currentNetwork = network;
      if (error) {
        console.log("Error", "setCurrentNetwork", error);
      }
    });
  }

  setCurrentBlock() {
    this.web3.eth.getBlock(
      "latest",
      action((error, result) => {
        if (result.number !== this.currentBlock) {
          this.currentBlock = result.number;
        }
        if (error) {
          console.log("Error", "setCurrentBlock", error);
        }
      })
    );
  }
}
