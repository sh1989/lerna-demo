# Lerna Demo

This is an example of using [Lerna](https://github.com/lerna/lerna) to create a monorepo, hosting two react apps: a Client, and an Admin.
There is additionally some common code which sits as a helper package. This contains some React components used by both packages, and some used by only one or the other, to demonstrate Tree Shaking.

# Instructions
* Ensure that you have lerna 2 npm installed globally: `npm install -g lerna`
* Clone the repo
* Bootstrap the app, ensuring that common dependencies are installed at the top level: `lerna bootstrap --hoist`
* Build the apps, either in debug mode (`lerna run build`) or "prod" mode (`lerna run prod`)
* Start the apps: `lerna run start`, which hosts the client app on port `8080` and the admin app on port `8081` of `localhost`
