const Blockchain = require('./blockchain')


const bitcoin = new Blockchain();

const previousBlockHash = 'OINA3DFEFRH234GH2'
const currentBlockData = [
    {
        "amount": 50,
        "sender": "A1B2C3D4E5F6G7H8",
        "recepient": "I9J0K1L2M3N4O5P6"
    },
    {
        "amount": 20,
        "sender": "QR8S9T0U1V2W3X4",
        "recepient": "Y5Z6A7B8C9D0E1F2"
    },
    {
        "amount": 35,
        "sender": "G3H4I5J6K7L8M9N0",
        "recepient": "O1P2Q3R4S5T6U7V8"
    },
]

const nonce = 100

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce))