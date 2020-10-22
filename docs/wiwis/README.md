# Kit de desarrollo de WiWi (WWDK)

Framework de desarrollo personalizado OpenGate UX.

## ¿Qué es un WiWi?

WiWi es la contracción de Wizard / Widget. Opengate UX proporciona este framework para permitir el despliegue de una funcionalidad personalizada en su solución.

## Prerrequisitos

Opengate UX 9 usa VueJS como framework de desarrollo.

::: warning Advertencia
Para continuar, debe tener conocimientos técnicos sobre la tecnología vuejs
:::

Para usar el WWDK necesita instalar _nodeJS_, _yarn_ y _vue-cli_ en su computadora

[NodeJS (^ 10.15.x)](https://nodejs.org/en/download/)

[yarn cli](https://yarnpkg.com/)

Finalmente:

```shell
$ yarn global add vue-cli
```
o

```shell
$ npm install -g vue-cli
```

Se requiere _vue init_ y se ha eliminado en Vue CLI >= 3 ...

> Descargando **vue init** versión heredada [+ info](https://cli.vuejs.org/guide/creating-a-project.html#pulling-2-x-templates-legacy)

## Descargando el WWDK

Una vez que haya instalado todas las dependencias, proceda a descargar la plantilla WWDK.

```shell
$ vue init amplia-iiot/wiwi-template my-wiwi
```

> Los fuentes del proyecto se encuentran en [amplia-iiot/wiwi-template](https://github.com/amplia-iiot/wiwi-template)

Para configurar su proyecto, el proceso de instalación le pedirá algunos datos requeridos

1. Nombre de WiWi en formato kebab-case

_Nombre del identificador de WiWi (se puede cambiar más tarde)_

2. Descripción del proyecto

_Una descripción para tu WiWi_

3. Autor

_Creador del WiWi_

4. Tipo de WiWi

_El tipo de WiWi. Puede ser Asistente, Widget o ambos (necesita configuración manual)_

::: tip
WWDK es una plantilla de proyecto para [vue-cli](https://github.com/vuejs/vue-cli).
**Se recomienda usar npm 3+ para un árbol de dependencia más eficiente.**
:::

## Prueba tu suerte

Para probar que su WWDK está preparado, debe ejecutar el siguiente

```shell
$ cd my-wiwi
$ yarn install
$ yarn run dev
```
o
```shell
$ cd my-wiwi
$ npm install
$ npm run dev
```

Si todo está bien, verá el siguiente mensaje en pantalla:

```bash
DONE Compiled successfully in 14649ms
I Your application is running here: http://localhost:8081
```

Al abrir el sitio, la plantilla base de WiWi se mostrará en el navegador de navegación.

## Licencia

[MIT](https://github.com/amplia-iiot/wiwi-template/blob/master/LICENSE)