// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract sender {
  constructor() payable public {
  }



    // function sendEther(address payable recipient) external{
    //     recipient.transfer(1 ether);
    // } 

    // function checkSenderBalance(){

    // }

    function sendViaTransafer(address payable _to) external payable{
        _to.transfer(123);
    }

    function sendViaSend(address payable _to) external payable{
        bool sent  = _to.send(123);
        require(sent, "sent failed");
    }

    function sendViaCall(address payable _to) external payable{
        {bool success }_to.call{value: 123}("");
        require(success, "call fail");
    }
}
