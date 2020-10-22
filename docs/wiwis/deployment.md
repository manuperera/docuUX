# Implementación de WiWi

## Compilando y probando fuentes

WWDK proporciona un servidor web interno para probar su desarrollo antes de la implementación.

Para ejecutarlo debes lanzar el siguiente comando

```bash
yarn run dev
```
o
```bash
npm run dev
```

> Servidor con recarga en caliente en localhost: 8080

Ábrelo en tu navegador de navegación favorito y listo.

[Herramienta de prueba WWDK](http: // localhost: 8080)

## Construyendo las fuentes

Antes de registrarse / cargar su wiwi, debe crear la versión final del código para preparar el paquete

```bash
yarn run build
```
o
```bash
npm run build
```

> compilación para producción con minificación (webpack)

::: tip
Para obtener una explicación detallada sobre cómo funcionan las cosas, consulte los [documentos para vue-loader](http://vuejs.github.io/vue-loader).
:::

## Configuración del modo

Con el WWDK puedes crear asistentes y widgets. Esto es posible debido al archivo de configuración **meta-widget.json**.

::: details Ejemplo completo de meta-widget.json
```json
{
  "actions": {
    "nombre del asistente": [
      "acción de asistente"
    ]
  },
  "widgets": ["nombre del widget"]
}
```
:::

Los WiWis pueden ejecutarse en ambos modos simultáneamente. Esta configuración determinará el propósito de WiWi.

A continuación puede encontrar cómo configurar el modo de WiWi.

* **actions**: objeto json donde puede configurar el nombre del asistente para su WiWi en modo asistente. Cada entrada de este json contiene una matriz con la configuración de enrutamiento de acción. Este wiwi aparecerá en la configuración de Acciones del espacio de trabajo y en el menú de acciones, sección de activos.
* **widgets**: una matriz de nombres para tu wiwi en modo widget.

## Gestión y despliegue

A continuación puede encontrar las 3 operaciones disponibles a través de WiWis: **register**, **update** y **delete**.
Le pedirán la siguiente información:

1. URL de la api-web donde realizarás la acción
2. Destino del dominio (las instancias de WiWis dependerán del dominio)
3. Usuario, que existe en la plataforma OpenGate, asociada al dominio seleccionado.
4. Contraseña

### Registrarse (register)

Esto es obligatorio para cargar y registrar el WiWi la primera vez en la plataforma.

```bash
$ yarn run register
```
o
```bash
$ npm run register
```

### Actualización (update)

Se usa para actualizar una instancia existente de una WiWi en la plataforma Opengate

```bash
$ yarn run update
```
o
```bash
$ npm run update
```

### Eliminar (delete)

Retire un WiWi de la plataforma Opengate. Útil cuando falla un WiWi o al final de su vida útil.

```bash
$ yarn run delete
```
o
```bash
$ npm run delete
```

## Generar una versión

Este proyecto ofrece el siguiente script que genera una nueva versión usando [npm-version](https://docs.npmjs.com/cli/version)

```shell
$ npm version [major | minor | patch]
```

::: tip
npm-version utiliza la semántica [https://semver.org](https://semver.org/)
:::