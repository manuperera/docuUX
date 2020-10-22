
# Desarrollo de WiWi

## Cómo codificar

Una vez que haya descargado e instalado todo, su punto de partida será

> **\<project-dir\>**/src/components/wiwi.vue

**wiwi.vue** incluye un ejemplo de un wiwi que usa el framework Vuetify que se usa en Opengate UX.

> [Vuetify](https://vuetifyjs.com/)

## Utilidades para desarrollo

El proyecto contiene algunas herramientas (componentes y complementos) contenidos en la web donde se instalará el wiwi.

Esto facilita el desarrollo autónomo del wiwi.

A continuación se enumeran estas herramientas con ejemplos de cómo usarlas en nuestro wiwi.

### $jsonPath

``` javascript
export default {
  name: 'exampleJsonPath',
  data() {
    return {
      example: {
        one: '1',
        two: '2'
      }
    }
  }
  computed: {
    return this.$jsonPath(this.example, '$.one')[0]
    //return 1
  }
}
```

### $api 

[OGAPI](/ogapi/)

1. Configurar

``` javascript
// src/plugins/store.js
{
  apiKey: '@@API_KEY@@',
  url: '@@NORTH_API@@',
  timeout: 60000,
  south: {
    url: '@@SOUTH_API@@'
  }
}

```

2. Uso

``` javascript
import { mapGetters } from "vuex";

export default {
  name: 'exampleApi',
  data() {
    return {
      entries: []
    }
  },
  methods: {
    async search(){
      this.entries.splice(0, this.entries.length);
      try {
        const result = await this.builder.build().execute();
        if (result.statusCode !== 204) {
          this.entries = result.data.entities;
        }
      } catch (err) {
        console.log(err);
      } finally {
      }
    }
  },
  computed: {
    //https://vuex.vuejs.org/guide/getters.html#the-mapgetters-helper
    ...mapGetters({ api: "$api" }),
    builder() {
      return this.api.entitiesSearchBuilder();
    }
  }
}
```
