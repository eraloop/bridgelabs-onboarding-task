// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16;

contract Receiver {
  constructor () public {
  }

    event.log(uint amount, uint gas);

    recieve() external payable {
        emit log(msg.value, gassleft());
    }
}
