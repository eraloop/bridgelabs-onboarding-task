// SPDX-License-Identifier: MIT

contract Receiver {

  address private owner = msg.sender;

  constructor () public {}
    // event.log(uint amount, uint gas);
    // recieve() external payable {
    //     emit log(msg.value, gassleft());
    // }

    function getBalance() public view returns(uint256){
      return owner.balance;
    }
}
