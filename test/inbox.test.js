const assert = require('assert'); //assert used for asserting values to check
const ganache = require('ganache-cli')
const Web3 = require('web3') 
const web3 = new Web3(ganache.provider()); //passing ganache as the provide for blockchain network
const { interface , bytecode } = require('../compile'); //importing interface and bytecode from compiledfiles 
const initialMessage = 'hai there!'
let fetchedAccounts;
let inbox;
//beforeach is used to execute some general function before every it
beforeEach(async()=>{
    //get a list of all acconts
   fetchedAccounts = await web3.eth.getAccounts() 
   inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy( { data:bytecode, arguments:[initialMessage]}) //any arguments can be passed
    .send({from:fetchedAccounts[0],gas:1000000})
   // inbox.setProvider(provider)
})
describe('Inbox',()=>{
it('deploy a contract',()=>{
    assert.ok(inbox.options.address)
});
it('get Initial message',async()=>{
    const message = await inbox.methods.message().call();
    assert.equal(message,initialMessage)  
});
it('set Message',async()=>{
    await inbox.methods.setmsg('bye').send({from:fetchedAccounts[0],gas:100000})
    const message = await inbox.methods.message().call()
    assert.equal(message,'bye')
})
})