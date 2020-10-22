# WiWi Development Kit (WWDK)

OpenGate UX custom developments framework.

## What is a WiWi?

WiWi is the contraction of Wizard/Widget. Opengate UX provides this framework in order to allow the deployment of custom functionality to your solution.

## Prerequisites

Opengate UX 9 uses VueJS as a development framework.

::: warning
In order to continue you must have technical knowledge about vuejs technology
:::

To use the WWDK you need to install _nodeJS_, _yarn_ and _vue-cli_ in your computer

[NodeJS (^10.15.x)](https://nodejs.org/en/download/)

[yarn cli](https://yarnpkg.com/)

Finally:

```shell
$ yarn global add vue-cli
```
or

```shell
$ npm install -g vue-cli
```

_vue init_ is required and it has been removed in Vue CLI >= 3...

> Downloading **vue init** legacy version [+info](https://cli.vuejs.org/guide/creating-a-project.html#pulling-2-x-templates-legacy)

## Downloading the WWDK

Once you have installed all dependencies proceed to download the WWDK template.

```shell
$ vue init amplia-iiot/wiwi-template my-wiwi
```

In order to configure your project the install process will ask you for some required data

1. WiWi name in kebab-case format

_WiWi's identifier name (can be change later)_

2. Project description

_A description for your WiWi_

3. Author 

_Creator of the WiWi_

4. Pic WiWi type

_The type of the WiWi. This can be Wizard, Widget or both (needs manual configuration)_

::: tip
WWDK is a project template for [vue-cli](https://github.com/vuejs/vue-cli). 
**It is recommended to use npm 3+ for a more efficient dependency tree.**
:::

## Test your might

To test that your WWDK is prepared you must execute the next

```shell
$ cd my-wiwi
$ yarn install
$ yarn run dev
```
or
```shell
$ cd my-wiwi
$ npm install
$ npm run dev
```

If everything is ok you will see the next message on screen:

```bash
DONE Compiled successfully in 14649ms
I Your application is running here: http://localhost:8081
```

By opening the site the base WiWi template will be shown in the navigation browser.

## License

[MIT](https://github.com/amplia-iiot/wiwi-template/blob/master/LICENSE)
