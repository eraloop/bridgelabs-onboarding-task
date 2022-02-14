// SPDX-License-Identifier: MIT

contract Receiver {

  address private owner;

  constructor () public {
    owner = msg.sender;
  }
    // event.log(uint amount, uint gas);
    // recieve() external payable {
    //     emit log(msg.value, gassleft());
    // }

    function getBalance() public view returns(uint256){
      return owner.balance;
    }
    
    function getAddress() public view returns(address){
      return owner;
    }
}
