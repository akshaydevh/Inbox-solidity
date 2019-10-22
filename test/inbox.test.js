const assert = require('assert'); //assert used for asserting values to check
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider()); //passing ganache as the provide for blockchain network
const {interface,byteCode} = require('../compile'); //importing interface and bytecode from compiledfiles 

 
let fetchedAccounts;
//beforeach is used to execute some general function before every it
beforeEach(async()=>{
    //get a list of all acconts
    fetchedAccounts = await web3.eth.getAccounts() 
    new web3.eth.Contract(JSON.parse(interface))
    .deploy( { data:byteCode, arguments:['first message']}) //any arguments can be passed

})
describe('Inbox',()=>{
it('list of accounts',()=>{
    console.log(fetchedAccounts)
})
})

// class Car{
// park(){
//     return 'stopped'
// }
// drive(){
//     return 'vroom';
// }
// }
// let car;
// beforeEach(()=>{
//     car = new Car();
// })
// describe('Car',()=>{
//     it('test park',()=>{
//         assert.equal(car.park(),'stopped')
//     })
//     it('test drive',()=>{
//         assert.equal(car.drive(),'vroom')
//     })

// })