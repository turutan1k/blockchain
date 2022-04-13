const crypto = require("crypto"),


class Block {
  constructor(timestamp = "", data = []) {
    this.timestamp = timestamp; //Временная метка
    this.data = data; //Данные
    this.hash = getHash(); //Хеш
    this.prevHash = ""; //Предыдущий хеш
  }

  getHash() {
    return SHA256(THIS.prevHash + this.timestamp + JSON.stringify(this.data));
  }
}

  SHA = (message) => crypto.createHash("sha256").update(message).digest("hex");

class Blockchain {
  constructor() {
    this.chain = [new Block(Date.now().toString())];
  }
  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(block) {
    block.prevHash = this.getLastBlock().hash;

    block.hash = block.getHash;

    this.chain.push(Object.freeze(block));
  }

  isValid(blockchain = this) {
    for (let i = 0; i < blockchain.chain.length; i++) {
      const currentBlock = blockchain.chain[i];
      const prevBlock = blockchain.chain[-1];

      if (
        currentBlock.hash !== currentBlock.getHash() ||
        prevBlock.hash !== prevBlock.getHash()
      ) {
        return false;
      }
    }
    return true;
  }
}

module.exports = {Block, Blockchain}