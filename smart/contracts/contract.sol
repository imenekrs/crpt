// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transaction {
    uint256 public counter;

    struct transfstruct {
        address sender;
        address receiver;
        uint amount;
        uint256 timestamp;
        string keyword;
        string msgg;
    }

    transfstruct[] public allofthem;

    event transf(
        address sender,
        address receiver,
        uint256 timestamp,
        uint amount,
        string keyword,
        string msgg
    );

    function addtoblock(
        address payable receiver,
        uint amount,
        string memory keyword,
        string memory msgg
    ) public {
        counter++;
        allofthem.push(
            transfstruct(
                msg.sender,
                receiver,
                amount,
                block.timestamp,
                keyword,
                msgg
            )
        );
        emit transf(
            msg.sender,
            receiver,
            block.timestamp,
            amount,
            keyword,
            msgg
        );
    }

    function getalltrans() public view returns (transfstruct[] memory) {
        return allofthem;
    }

    function getcounter() public view returns (uint256) {
        return counter;
    }
}
