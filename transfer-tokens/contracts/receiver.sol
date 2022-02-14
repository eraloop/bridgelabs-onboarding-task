// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract receiver {
  constructor () public {
  }

    event.log(uint amount, uint gas);

    recieve() external payable {
        emit log(msg.value, gassleft());
    }
}
