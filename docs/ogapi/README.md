# OGAPI: Un API para la API 

## ¿Qué es OGAPI?

OGAPI es una solución javascript que facilita la integración de los [servicios REST de la plataforma Opengate](https://www.amplia-iiot.com/documentation/latest/). 

Su uso permite hacer una integración más rápida y limpia de los servicios Opengate en proyectos web y NodeJS ya que es isomórfica y puede ser ejecutada en ambos modos.

### Proyecto OpenSource

Además, _OGAPI_ es opensource. Se encuentra alojado en los repositorios de [github](https://github.com) bajo el nombre _opengate-js_ y es accesible por todo el mundo.

> [opengate-js](https://github.com/amplia-iiot/opengate-js)

### Importar OGAPI en nuestro proyecto

Para usarlo en nuestro proyecto simplemente debemos añadirlo como dependencia en el fichero _package.json_ o descargarse la última versión directamente de los repositorios github

```shell
$ yarn add amplia-iiot/opengate-js
```
o

```shell
$ npm install amplia-iiot/opengate-js
```

## Hello OGAPI!!!

### Importar

Recuerde, hay que realizar los imports necesarios para hacer uso de la misma y esto dependerá de si lo usa bajo HTML o NodeJS respectivamente.

**NodeJS**:
```javascript
import {} from 'opengate-js/dist/opengate-api-bower-7.2.0'
```

**HTML**: [HTML Import](https://www.w3schools.com/tags/att_script_src.asp)

::: tip
Esto no es necesario para el desarrollo de WiWis ya que viene integrado bajo el objeto [$api](/wiwis/development.html#api) 
:::

### Instanciar

Lo primero que se debe hacer para hacer funcionar nuestro api es instanciarlo. Para ello necesitamos usar el siguiente método:

```javascript
var $api = new OpenGateAPI({
    apiKey: 'API-KEY DE OPENGATE', 
    url: 'URL DEL API NORTE DE OPENGATE (*)',
    timeout: 120000, // Timeout de las peticiones que se lancen usando OGAPI
    south: {
        url: 'URL DEL API SUR DE OPENGATE (*)'
    }
})
```

::: details Servicios disponibles a través de la plataforma online de Opengate
**Api Norte**: https://api.opengate.es/north/v80

**Api Sur**: https://api.opengate.es/south/v80
:::

### Test

Para probar si tenemos todo bien configurado podremos lanzar un primer searching con el que podemos ver los dominios visibles por el api-key proporcionado:

```javascript
$api.domainsSearchBuilder()
    .build()
    .execute()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
```

> OGAPI está implementada siguiendo el estandar [Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface#JavaScript) 

## ¿Qué se puede hacer con el OGAPI?

Opengate permite hacer operaciones de provisión, búsquedas, operación y recolección de información.

A continuación se enumeran algunas de las operaciones más comunes de Opengate realizadas con OGAPI y su equivalente en REST. 

### Búsquedas a través de OGAPI

A continuación se realiza la misma búsqueda desde los distintos puntos de entrada dispuestos por Opengate

#### Búsqueda de entidades 

Para realizar una búsqueda de entidades a través del api REST ejecutaríamos lo siguiente:

```bash
curl --request POST \
     --data-binary @filter.json \
     --header "X-ApiKey: YOUR_API_KEY_HERE" \
     --verbose \
     http://[your_opengate_address]/north/v80/search/devices?flattened=true
```

::: details filter.json
```json 
{
  "filter": {
    "and": [
      {
        "like": {
          "resourceType": "entity.asset"
        }
      }
    ]
  }
}
```
:::

Código necesario para hacerlo con OGAPI

```javascript
$api.entitiesSearchBuilder()
    .flattened()
    .filter(
        {
            "like": {
                "resourceType": "entity.asset"
            }
        }
    )
    .build().execute()
```

### Provisión a través de OGAPI

A continuación se enseña cómo realizar la misma acción de provisión desde los distintos puntos de entrada dispuestos por Opengate

#### Provisión de un canal

Elementos necesarios para la provisión de un canal a traveś del api REST.

```bash
curl --request POST \
     --data-binary @channel.json \
     --header "X-ApiKey: YOUR_API_KEY_HERE" \
     --verbose \
     http://[your_opengate_address]/north/v80/provision/organizations/{organizationName}/channels \
     -H "Content-type: application/json"
```

::: details channel.json
```json 
{
  "channel": {
    "name": "battery_channel",
    "description": "channel description",
    "certificates": [
      "certificate1_id",
      "certificate2_id"
    ]
  }
}
```
:::

Código necesario para hacerlo con OGAPI

```javascript
$api.channelsBuilder()
    .withOrganization({organizationName})
    .withName('batteryChannel')
    .withDescription('channel description')
    .withCertificate('certificate1_id')
    .withCertificate('certificate2_id')
    .create()
```

#### Provisión de un ticket

Opengate permite modelar determinadas entidades (dispositivos, assets y tickets), a través de los datamodels, permitiendo definir con detalle el comportamiento de las mismas. OGAPI se adapta al modelado de la entidad seleccionada con el fin de facilitar la provisión de la misma.

A continuación se muestra un ejemplo de provisión de ticket a través de OGAPI:

```javascript
// Se invoca el constructor de builder de tickets con la organización 
// para que prepare el builder "datamodelado" segñun nuestros datamodels
$api.entityBuilder
    .ticketsBuilder(organization)
    .then(function(builder) {
        builder.with('provision.ticket.identifier', 'nuevo identificador')
            .with('provision.ticket.name', 'Nombre del ticket')
            .with('provision.ticket.type', 'WORKORDER')
            .with('provision.ticket.severity', 'CRITICAL')
            .create();
    })

```
> Este comportamiento se extrapola a todos los builder de entidades

### Operaciones a través de OGAPI

La ejecución de operaciónes (o jobs) desde OGAPI es muy similar a la de entidades con OGAPI.
Primero es necesario instanciar el builder en base a la operación que se quiere lanzar para posteriormente introducir los parámetros necesarios para esa operación en concreto.
Al OGAPI se le ha dotado la inteligencia suficiente para identificar cuando una operación es periódica o no basándose en los parámetros introducidos 
obviando que desde el api REST se distingue entre distintos recursos de provisión (jobs y tasks) 

#### Consulta del catálogo de operaciones

Algunas operaciones del api REST no están implentadas directamente en OGAPI pero sí se permite invocarlas a través del mismo utilizando el recurso _rawSearchBuilder_. A continuación se enseña cómo recuperar el catálogo de operaciones:

```javascript
$api.rawSearchBuilder()
    .from('/catalog/operations')
    .build()
    .execute()
```

#### Lanzamiento de la operación

Una vez conozcamos qué operaciones hay disponibles procedemos a construir y lanzar nuestra operación.

```javascript
$api.operations
    .builderByOperationName('identificador de operación')
    .then(function(operationBuilder) {
        builder.withAckTimeout(parseInt(timers.acktimeout || 0), 'seconds')
            .withJobTimeout(parseInt(timers.stop))
            .withTimeout(parseInt(timers.timeout), 'seconds')
            .withRetries(parseInt(timers.retries || 0))
            .withRetriesDelay(parseInt(timers.retriesDelay || 0), 'seconds')
            .withNotes(options.userNotes || null)
            .withCallback(options.callback || null)
            .appendEntitiesBy
                .list(['entidad1', 'entidad2'])
            .build()
            .execute()
    }));
```

::: tip Documentación técnica
Dentro del proyecto opengate-js se encuentra toda la documentación técnica con todas las posibilidades
:::