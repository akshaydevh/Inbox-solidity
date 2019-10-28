const HDWalletProvider = require('@truffle/hdwallet-provider'); //this provider is used to deploy in actual network
const Web3 = require('web3');
const {interface,bytecode} = require('./compile')

const provider = new HDWalletProvider('miss cook jacket visa mobile inmate husband frost maximum intact eight flee','https://rinkeby.infura.io/v3/e787810239dc4c4aa815d4d20b1399f2');

const web3 = new Web3(provider); 
const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Deploying contract from ',accounts[0])
    const  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy( { data:'0x'+ bytecode, arguments:['hi there!']}) //any arguments can be passed
    .send({from:accounts[0],gas:1000000})
    console.log('Contract deployed to ',inbox.options.address)
};
deploy();