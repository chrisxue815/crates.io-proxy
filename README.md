**crates.io-proxy** is a [crates.io](https://crates.io) proxy which temporarily fixes a cargo issue [Cargo doesn't respect git's http.sslverify](https://github.com/rust-lang/cargo/issues/1180)

# Usage

Set up crates.io proxy:

1. ```cd /PATH/TO/DEV/DIR```
1. ```git clone https://github.com/chrisxue815/crates.io-proxy.git```
1. ```cd crates.io-proxy```
1. ```npm config set strict-ssl false```
1. ```npm install```
1. ```node index.js --port 3000 --proxy PROXY_ADDRESS```
1. Open ```http://127.0.0.1:3000/api/v1/crates/libc/0.2.6/download``` in your browser to make sure the proxy is working

Set up index repo:

1. ```cd /PATH/TO/DEV/DIR```
1. ```git clone https://github.com/rust-lang/crates.io-index.git```
1. Open ```./crates.io-index/config.json```, set ```dl``` to ```"http://HOSTNAME:3000/api/v1/crates"```
1. ```cd crates.io-index```
1. ```git add .```
1. ```git commit -m fixup!```
1. Create or open ```~/.cargo/config```, add/set the following section

    ```
    [registry]
    index = "file:///PATH/TO/DEV/DIR/crates.io-index"
    ```

```cargo build``` should work now. If not, try deleting or renaming ```~/.cargo/registry``` and ```PROJECT_DIR/target```

# License
* [ISC License](https://github.com/chrisxue815/crates.io-proxy/blob/master/LICENSE) ([What is it?](http://choosealicense.com/licenses/isc/))
