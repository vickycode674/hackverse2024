// SPDX-License-Identifier: MIT

pragma solidity ^0.5.16;

contract Healthcare {
    struct Patient {
        string name;
        uint256 age;
    
    }

    mapping(address => Patient) public patients;

    function addPatient(string memory _name, uint256 _age) public {
        patients[msg.sender] = Patient(_name, _age);
    }
}