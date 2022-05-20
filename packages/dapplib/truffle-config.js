require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note range puppy grace nature swift shallow'; 
let testAccounts = [
"0x874cf678de6d9902eaaabc03de30d8b8c2daff899be2133f54151fd982a01e8b",
"0x23d58f221f9c17418f4cf88257c990247b8ccf1070e0544936ef061b4d5f0d4f",
"0x398c153446d6b112db299f4ca423224c8ff24ce0ffa2af2385345e940efebbc4",
"0xe3a4de2a5039dbc65c13b1b232e3bf5e15a31ae83b0faf59522342cf686f913a",
"0x82df270a7d3b00916a09bb6a35ad20344de421c3df417cb55a2c2ac7a127fd66",
"0x52f95157f20c81ee555e702a9046b981d3622be60b0f4b6878f15ead0104e366",
"0xfbb3fb0d6fe057e45f89a77db88dfbe134c85ecdd5775fcbe2826a6357dd97aa",
"0xc30a05e15fcfb4f416b833025159719583eb486644e4f8b47ddea3cf36e092a5",
"0xeddb71c5e77b5b929400ad1641b970a9c8fae76a60c6787554a7773b7f533fe6",
"0x7a0624f7556d498244f968fbbc38229f0d420003999a244a9a29368b9cd2df35"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

