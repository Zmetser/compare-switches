compare-switches
==============
Compare two or more kinja blog's feature switches.
This project is based on [bradstewart/electron-boilerplate-vue](https://github.com/bradstewart/electron-boilerplate-vue)

# Quick start
```
git clone https://github.com/zmetser/compare-switches.git
cd compare-switches
npm install
npm start
```

*Note:* The app can't load the mantle API by default. Please run mantle with this branch: [`compare-switches-companion`](https://github.com/gawkermedia/kinja-mantle/tree/compare-switches-companion)

# Development

#### Installation

```
npm install
```
It will also download Electron runtime, and install dependencies for second `package.json` file inside `app` folder.

#### Starting the app

```
npm start
```

#### Adding pure-js npm modules to your app

Remember to add your dependency to `app/package.json` file, so do:
```
cd app
npm install name_of_npm_module --save
```


# Making a release

**Note:** There are various icon and bitmap files in the `build/resources` directory. Those are used in installers and are intended to be replaced by your own graphics.

To make ready for distribution installer use command:
```
npm run release
```
This process uses [electron-packager](https://github.com/electron-userland/electron-packager). See their documentation on packaging for various operating systems.
