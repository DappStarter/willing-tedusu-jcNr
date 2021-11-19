require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note spice prosper install option equal gasp'; 
let testAccounts = [
"0xbfd5c475788b75c3e73726d0d0f2a396d79fb2575455c56fbba645ed1238dcab",
"0x3f5d808b4637aacf3561d8d23d9656e9d6f6b53a4cfe7bb10832a032c9a66d2d",
"0x508c1abe5aabdf73d8cb7cdf4a2e175f08b707a18718ad8c56edf23335a32bb4",
"0xa26b0afacf06d7f093f5c54995c662f1c03e9a1e30ada318edce6eac43d3fbc4",
"0x30cea5aed36108c718cbc51caf973d4fd0e4fcd28ca7b56d35437e6c65bc1033",
"0xeb7be3b98ac070162228c0b989b0486cc90aab044fa5a2679e34e0eb7e1db265",
"0xf26fed37ce316cabda78ea12fe917ab62eee806800045cc74126b0f5cd60dba5",
"0x111389608f35abb47217cfd246aa86a52d34bf67291a58d3ca09e1fabfdcbf68",
"0x48b748f2230ba74e9adce8254700a71845db603e434bdaeed5256e09bea3c19a",
"0x7ffb1930971aad09d210cd80e03f799fd52a18f0d4c623bac8c791632295f0cf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

