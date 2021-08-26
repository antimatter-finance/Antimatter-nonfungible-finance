const { ethers, upgrades } = require("hardhat");

async function main() {
    const proxyAddress = '';
    const contract = await ethers.getContractAt("FinanceERC721", proxyAddress);
    const uri = "https://antimatter.finance/";
    const tx = await contract.setBaseURI(uri);
    console.log(tx);

    const tokenUri = await contract.tokenURI(0);
    console.log(tokenUri)

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
