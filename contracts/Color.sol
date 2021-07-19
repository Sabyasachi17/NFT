pragma solidity ^0.5.0;

import './ERC721Full.sol';

contract Color is ERC721Full
{
	string[] public colors;
	mapping (string => bool) notUniqueColor;

	constructor() ERC721Full("color","COLOR") public{}

	function mint(string memory _color) public{
	require(!notUniqueColor[_color]);
	uint _id = colors.push(_color);
    _mint(msg.sender, _id);
    notUniqueColor[_color] = true;
	}
    
}
    
