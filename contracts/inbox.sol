pragma solidity ^0.4.17;

contract inbox{
    string public message;
    function setmsg(string memory newmsg) public {
     message = newmsg;
    }
    function getmsg() public view returns(string memory) {
        return message;
    }
}