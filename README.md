# boilerplate 🔬

Bare bones react, truffle boilerplate.

### Getting started

Install packages and start server (I prefer using [yarn](https://yarnpkg.com/en/))

```
yarn
yarn start
```

Start a local blockchain like [Ganache](https://github.com/trufflesuite/ganache). You can use [Ganache CLI](https://github.com/trufflesuite/ganache-cli) or the [desktop client](http://truffleframework.com/ganache/).

```
ganache-cli
```

Add an `.env` file depending on which port ganache is running on and which port you want your server running on.

```
// .env
PORT=5000
RPC_HOST="127.0.0.1"
RPC_PORT=8545 // 7545 if you use the Ganache GUI
STAGE="development"
WEB3_PROVIDER="https://localhost:8545"
```

