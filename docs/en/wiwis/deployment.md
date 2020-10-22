# WiWi Deployment

## Compiling and testing sources

WWDK provides an insternal web server in order to test your development before the deploy.

To execute it you must execute the next command 

``` bash
yarn run dev
```
or
``` bash
npm run dev
```
> server with hot reload at localhost:8080

Open it in your favourite navigation browser and go.

[WWDK Test Tool](http://localhost:8080)

## Building the sources

Before you register/upload your wiwi you must build the final version of the code in order to prepare the package

``` bash
yarn run build
```
or
``` bash
npm run build
```

> build for production with minification (webpack)

::: tip
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
:::

## Mode configuration

With the WWDK you can create wizards and widgets. This is possible due to the **meta-widget.json** configuration file.

::: details Complete example of meta-widget.json
``` json 
{
  "actions": {
    "wizard name": [
      "wizard action"
    ]
  },
  "widgets": ["widget name"]
}
``` 
:::

WiWis can run in both modes simultaneously. This configuration will determine the purpose of the WiWi.

Below you can find how to configure the mode of the WiWi.

* **actions**: json object were you can configure the wizard name for your WiWi in wizard mode. Every entry of this json contains an array with the action routing configuration. This wiwi will appear in the Workspace Actions configuration and in the actions menú, assets section.
* **widgets**: an array of names for your wiwi in widget mode.

## Management and deployment

Below you can find the 3 available operations over WiWis: **register**, **update** and **delete**.
They will ask for the following information:

1. Url of the api-web where you will perform the action 
2. Domain destiny (WiWis instances will be domain dependant)
3. User, that exists in the OpenGate platform, associated to the selected domain
4. Password 

### Register

This is mandatory to upload and register the WiWi the first time in the platform. 

``` bash
$ yarn run register
```
or

``` bash
$ npm run register
```

### Update

Used to update an existing instance of a WiWi in the Opengate platform

``` bash
$ yarn run update
```
or
``` bash
$ npm run update
```

### Delete

Remove a WiWi from the Opengate platform. Useful when it fails a WiWi or at the end of his life.

``` bash
$ yarn run delete
```
or 
``` bash
$ npm run delete
```

## Generate a version

This project offers the following script that generates a new version using [npm-version](https://docs.npmjs.com/cli/version)

``` shell
$ npm version [ major | minor | patch ]
```

::: tip
npm-version uses the [https://semver.org/](https://semver.org/) semantics
:::

