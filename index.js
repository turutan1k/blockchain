const { Block, Blockchain } = require("./blockchain.js");

const test = new Blockchain();

test.addBlock(
  new Block(Date.now().toString(), {
    from: "Alex",
    to: "Satoshi",
    amount: 235123,
  })
);
test.addBlock(
  new Block(Date.now().toString(), {
    from: "Nikita",
    to: "Alex",
    amount: 23623,
  })
);
test.addBlock(
  new Block(Date.now().toString(), {
    from: "Alex",
    to: "Nikita",
    amount: 23521355,
  })
);
test.addBlock(
  new Block(Date.now().toString(), {
    from: "Ivan",
    to: "Satoshi",
    amount: 23523,
  })
);
test.addBlock(
  new Block(Date.now().toString(), {
    from: "Satoshi",
    to: "Nikita",
    amount: 8234897,
  })
);

console.log(test.chain)
