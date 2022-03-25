# Coding Challenge

Hello, my friend. Congratulations you have passed a short voice call interview. This is a short challenge for you to resolve. We encourage you to use the Internet to complete this challenge because it's quite hard and very domain-specific. If you finish. Push the code to GitHub, and contact us over the hiring platform or [email](bitweed@volare.finance). If you meet any problem you can not resolve, I'd like to help in the email too.

We are a blockchain startup. We are building a decentralized platform for the financial industry. So I want to test your skills in accepting new knowledge and see if you can resolve these challenges.

---

## Challenge 1 - Easy

Before starting, check out a new branch, name after your GitHub username. **Add an open-source license file under the root folder. Anyone you know is okay.**

Then, create a new Vue3 project under the root folder. Here's something required in the project:

- ESLint + Airbnb Config
- TypeScript
- Vue Router
- State Management
- SVG Rollup Plugin

We need to remove all the default pages included in the scaffold you might use. If you don't use any scaffold, you can ignore this line.

Create a component named `ConnectWallet`, and another component named `WalletBalance`. Place the `router-view` under the root Vue file.

Give those to a component different route, the path is `/wallet` and `/balance`. You can add a little nav bar to navigate between those two pages. On the left is the SVG icon of Metamask, you can get it [here](https://github.com/MetaMask/brand-resources). In the center is the link to the wallet and balance page.

After finishing all this, commit the code and push it to remote. That will be the end of challenge 1.

---

## Challenge 2 - Mid

I need you to learn stuff from the Internet, about how to use [Metamask](https://docs.metamask.io/guide/). Metamask is a web extension for users to interact with Ethereum. If you don't familiar with blockchain, it's okay. The things we require you to do is not complicated. 

First, create a new account inside Metamask, and remember the mnemonic phrases and your blockchain address. Every time you restart the Chrome browser, Metamask will require you to input the password again, so remember the password too.

On `/wallet` page, I need you to create a button. If you click this button, Metamask should be pop up and ask you for permission to connect to your site. Create a `<strong>` label next to the button to show the current status of connecting. If connected, inside Metamask Extension, the status on the top left should be `Connected`.

If you complete that, that'll be the end of challenge 2. If you figure out to do all of that inside the state management component, that will be a plus.

---

## Challenge 3 - Hard

It's getting more difficult. But trust me, after doing all this you are pretty capable of coding the web3 frontend.

First, you need to understand there's a thing called `ABI`. Aka, `Application Binary Interface`. It is a JSON file for you to interact with the smart contract deployed on the blockchain. And can understand smart contracts as a decentralized application. If you learned C programming language you can relate `ABI` with the header file, or type file in TypeScript. This description is not accurate but it is convenient for you to understand.

We've prepared the ABI you need in the `erc20.json` file under the root. Place it under `src/constants`, and import it to the code when you need it.

Metamask is how you interact with Ethereum, but you need a `provider` to handles all the data and actions. We use `ethers.js`, and there are also other alternatives. 

There's a website called [Etherscan](https://etherscan.io), you can view all data from Ethereum on this website. In the search box, search `USDT`, and click from the prompt menu, you will see the recent transactions from the `USDT` smart contract.

Theoretically, we can retrieve all those information in raw method names and object format. But using libraries like `ethers.js` make life easier.

On `/balance` page, There should only be a `<h1>` tag, containing a single data fetch from the blockchain.

When we request `/balance` directly, the variable inside `<h1>` tag should display how much USDT holding in the wallet you connect right now. 

[This section](https://docs.ethers.io/v5/api/contract/contract) contains how you can interact with a contract. After you load the ABI from the JSON file, connect it to the provider you created. After that, you can directly call functions like `await contract.balanceOf(address)` in your code. The result from the function call can be hard to read. Add `toString()` to the result to convert the big number into a string.

If you finish, commit, and push, that'll be the end of challenge 3.

### Section Bonus

If you manage to do all those, I'm pretty sure you are the guy we want. But there's one bonus task.

I want your page to accept a query parameter while not impacting anything we have done previously. The query parameter name is `addr`, and receives an Ethereum address. First, you need to handle all the potential errors that might occur during the process, then you need to check whether the query string is an Ethereum address.

And if the query string is Ethereum address and exists, the balance displayed in the `<h1>` tag should be the USDT balance of the string in the query parameter.

If you finish, commit and push.

---

> This is hard. By all means. For people who have never developed anything in Ethereum. We hope you try as hard as you can to complete these challenges, even if you tried and failed, it's okay. Progress is all that matters. As a developer, whether you decide to come or not, this will make you know more about blockchain. And in that way, this helps us BUILD TOGETHER.