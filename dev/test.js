const Blockchain = require('./blockchain')


const bitcoin = new Blockchain();


bitcoin.createNewBlock(8294584, "AD98KS72NS158", "0IAN509A9S9NF")

bitcoin.createNewTransaction(100, 'ALEXSDW09FNA', "JENN0AN09N0A9");

bitcoin.createNewBlock(728932, "AD9898A2NS158", "0IAN50SSWJS9NF")

bitcoin.createNewTransaction(50, 'ALEXSDW09FNA', "JENN0AN09N0A9");

bitcoin.createNewTransaction(300, 'ALEXSDW09FNA', "JENN0AN09N0A9");

bitcoin.createNewTransaction(2000, 'ALEXSDW09FNA', "JENN0AN09N0A9");

bitcoin.createNewBlock(728932, "AD989DHEL2NS158", "0IANDLES9NF")

console.log(bitcoin.chain[2]);