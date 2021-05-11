const Reciept = artifacts.require("Reciept");

module.exports = function (deployer) {
  deployer.deploy(Reciept);
};
