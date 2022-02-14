pragma solidity >=0.5.16;

contract Sender {

    address private owner;

    constructor  () payable public {
        owner = msg.sender;
    }

    function sendEther(address payable recipient) external{
        recipient.transfer(10 ether);
    } 

    // function checkSenderBalance(){

    // }

    function sendViaTransafer(address payable _to) external payable{
        _to.transfer(10 ether);
    }

    function sendViaSend(address payable _to) external payable{
        bool sent  = _to.send(10 ether);
        require(sent, "sent failed");
    }

    function getBalance() public view returns(uint256){
      return owner.balance;
    }

    function getAddress() public view returns(address){
      return owner;
    }

    // function sendViaCall(address payable _to) external payable{
    //     {bool success,} = _to.call{value: 123}("");
    //     require(success, "call fail");
    // }
}
