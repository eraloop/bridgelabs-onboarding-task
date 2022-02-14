// SPDX-License-Identifier: MIT

contract Receiver {

  address private owner;

  constructor () public {
    owner = msg.sender;
  }
    // event.log(uint amount, uint gas);
    // receive() external payable {
    //     emit log(msg.value, getBalance());
    // }

    function getBalance() public view returns(uint256){
      return owner.balance;
    }
    
    function getAddress() public view returns(address){
      return owner;
    }
}
