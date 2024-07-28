const Blockchain = require('./blockchain')


const bitcoin = new Blockchain();


bitcoin.createNewBlock(2389, "OINA90SDNFOD", "90AD87645A")
bitcoin.createNewBlock(231, "OIN76ADS", "56BAREDFG7")
bitcoin.createNewBlock(200, "A5A789DAER", "99A8ERDA")

bitcoin.getLastBlock

console.log(bitcoin);