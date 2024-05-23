const IPManager = artifacts.require("IPManager");

module.exports = function(deployer) {
  deployer.deploy(IPManager);
};
