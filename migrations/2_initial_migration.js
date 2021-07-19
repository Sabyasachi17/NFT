const color = artifacts.require("Color.sol");

module.exports = function (deployer) {
  deployer.deploy(color);
};
