# Vistas personalizadas en Opengate UX

Opengate UX ofrece la capacidad de personalización de formularios para los distintos tipos de entidad soportados dotando a la plataforma. De esta manera podrás adaptar dichos formularios a las necesidades de tu negocio.

## Creando un nuevo formulario personalizado

Para acceder al gestor de vistas personalizadas se debe seguir la siguiente navegación:

> Menú Acciones -> Gestión de vistas de entidades

En el cuadro de diálogo se muestran todas las vistas que se encuentran ya configuradas (si es que las hubiera). Para craer una debemos pulsar el botón **NUEVA** lo que abrirá el formulario de creación de vista.

### 1. _Datos identificativos_

En este paso se debe indicar el nombre que se va a asignar a la vista, como por ejemplo: _Cuadro Eléctrico_.

Las vistas personalizadas siempre van asociadas a un tipo de entidad y subtipo facilitando la identificación de la misma. Se podrán crear tantas como se deseen por tipo y subtipo sin problema. Más adelante se explica como discriminar entre una u otra.

### 2.1. _Configuración de pasos existentes_

En este paso se configuran los pasos que se deseen para la vista que se está preparando.
Para cada entidad se podrán configurar aquellos campos que sean opcionales dentro de cada paso del wizard original, haciendo que no se muestre aquellos pasos en los que no quede visible ningún campo.

### 2.2. _Configuración de pasos adicionales_

Adicionalmente se podrán configurar nuevos pasos pulsando en el botón de *NUEVO PASO*. Ahí se debe indicar el nombre identificativo y título asociados al paso. También se puede dotar de una breve descripción del paso para dar más pistas de la información que se va a completar en el mismo.

Una vez rellenada la información básica del paso debemos indicar qué datos queremos mostrar. Para esto se nos muestran 2 opciones:

* **Selecciona los campos del paso** que mostrará en el paso un selector de campos para que el usuario vaya selecionando, en el formulario final, para rellenar.
* **Ver campos específicos del paso** permite configurar de manera más específica qué se quiere mostrar al usuario.

> Los datastreams permitidos para las vistas personalizadas son aquellos correspondientes a provisión (aquellos que comienzan por _provision._, por ejemplo: __provision.fechaConstruccionArmario__)

## Configuración avanzada de paso adicional

Una vez seleccionados los campos que se van a permitir elegir entre una serie de combinaciones preestablecidas para facilitar la disposición de los mismos. También se ofrecerá la posibilidad de configurar una vista de manera totalmente manual.

Los campos mostrados en el paso se representarán adaptados al tipo de dato requerido por la plataforma.

Las configuraciones preestablecidas serán las siguientes:

> Una vez seleccionada la distribución se podrán hacer los cambios deseados en la misma

### Una columna

Se mostrarán todos los campos selecionados de manera continua en sentido vertical

::: details Distribución una columna
```json
[
  {
    "type": "help",
    "htmlClass": "row",
    "helpvalue": "<h3 class='primary--text'>Titulo del formulario personalizado</h3>"
  },
  {
    "key": "['provision.arrayenum']"
  },
  {
    "key": "['provision.boolean']"
  },
  {
    "key": "['provision.stringenum']"
  },
  {
    "key": "['provision.date']"
  },
  {
    "key": "['provision.time']"
  },
  {
    "key": "['provision.number']"
  }
]
```
:::

### Múltiples columnas

Con esta opción se pueden selecionar el número de columnas en las que distribuir los campos

::: details Distribución múltiples columnas a 2
```json
[
  {
    "type": "help",
    "htmlClass": "row",
    "helpvalue": "<h3 class='primary--text'>Titulo del formulario personalizado</h3>"
  },
  {
    "type": "section",
    "htmlClass": "row",
    "items": [
      {
        "type": "section",
        "htmlClass": "col md6",
        "items": [
          {
            "key": "['provision.arrayenum']"
          },
          {
            "key": "['provision.stringenum']"
          },
          {
            "key": "['provision.time']"
          }
        ]
      },
      {
        "type": "section",
        "htmlClass": "col md6",
        "items": [
          {
            "key": "['provision.boolean']"
          },
          {
            "key": "['provision.date']"
          },
          {
            "key": "['provision.number']"
          }
        ]
      }
    ]
  }
]
```
:::

### Por pestañas

Esta opción es útil cuando se quieren distribuir los campos en múltiples pestañas y columnas permitiendo tener una visión más organizada en el caso de que se disponga de multitud de datos a completar.

Con la simple configuración del número de elementos por pestaña y el número de columnas por la misma se distribuirán los datos de manera equitativa.

::: details Distribución por pestañas (2 elementos por pestaña en 2 columnas)
```json
[
  {
    "type": "help",
    "htmlClass": "row",
    "helpvalue": "<h3 class='primary--text'>Titulo del formulario personalizado</h3>"
  },
  {
    "type": "tabs",
    "tabs": [
      {
        "title": "Título de pestaña 1",
        "items": [
          {
            "type": "help",
            "htmlClass": "col xs12",
            "helpvalue": "<h4>Descripción de pestaña 1</h4>"
          },
          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.arrayenum']"
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.boolean']"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "Título de pestaña 2",
        "items": [
          {
            "type": "help",
            "htmlClass": "col xs12",
            "helpvalue": "<h4>Descripción de pestaña 2</h4>"
          },
          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.stringenum']"
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.date']"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "Título de pestaña 3",
        "items": [
          {
            "type": "help",
            "htmlClass": "col xs12",
            "helpvalue": "<h4>Descripción de pestaña 3</h4>"
          },
          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.time']"
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.number']"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
```
:::

### Modo personalizado

El configurador de vistas permite configurar los formularios de manera manual para dejarlos de un modo más personalizado y adecuado a nuestras necesidades. En el siguiente punto se explican los detalles de este modo

## Modo personalizado (a fondo)

> Antes de comenzar con este modo se recomienda experimentar con las opciones automáticas

Para la configuración de los pasos adicionales se utiliza _json form_, un objeto json adaptado a las necesidades de la plataforma que nos permite indicar una serie de objetos a los que les daremos propiedades para dar forma a nuestro formulario.

Este bloque se divide en 2 partes: estructura del formulario y formato de los controles asociados a los datos

### Estructurando el contenido

Para estructurar el formulario disponemos de los siguientes elementos:

| Elemento | Atributo | Descripción | Obligatorio |
| ------------- |-------------|-----|---|
| help |   | Permite introducir un elemento html en el formulario |
|  | helpvalue  | Código html con la información a mostrar  | :white_check_mark: |
|  | helpClass  | Clases CSS a aplicar al elemento  |
| section      |  | Permite hacer agrupaciones de elementos  |  
|       | items[ ] | Elementos que contiene la sección  |  :white_check_mark: |
|       | title      | Título o nombre de la sección |
|  | helpClass  | Clases CSS a aplicar al elemento  |
| tabs |       | Agrupa distintos grupos de elementos por pestañas |  |
|  | items[ ]      | Elementos que contiene la pestaña | :white_check_mark: |
|   | title      | Título de la pestaña | :white_check_mark: |

* Ayuda para el relleno de atributo **helpClass** [Vuetify hoja de estilos](https://vuetifyjs.com/en/styles/colors/)

### Dando formato a los campos

A continuación se detallan las opciones disponibles para el formateo de campos:

| Atributo | Descripción | Obligatorio |
| ------------- |-------------|-----|
| key  | Identifica qué campo se quiere visualizar ahí | :white_check_mark: |
| title | Sobreescribe el nombre original del datastream en el control mostrado |
| description | Muestra una descripción asociada al campo |
| helpClass | Clases CSS a aplicar al elemento  |
| titleMap [ {"name": "etiqueta asignada", "value": "valor final equivalente" } ] | Util para asignar etiquetas o valores predefinidos en campos de texto con o sin enumerados |
| type (*) | permite modificar el control a mostrar |

(*) Valores que puede tomar el campo _type_ así como identificar sobre qué tipo de dato aplicarlo:

| Valor | Tipo de control | Aplicable a... | 
| ------------- |-------------|-----|
| "textarea" | Muestra un campo de texto más grande para introducir información | Datos de tipo texto |
| "password" | Muestra un campo de texto con máscara | Datos de tipo texto |
| "asset" (**) | Muestra un selector de entidades de tipo **asset** | Util cuando se quiere validar que la entidad exista en la plataforma |
| "device" (**) | Muestra un selector de entidades de tipo **device** | Util cuando se quiere validar que la entidad exista en la plataforma  |
| "ticket" (**) | Muestra un selector de **tickets** | Util cuando se quiere validar que la entidad exista en la plataforma  |
| "entity" (**) | Muestra un selector de entidades de todo tipo exceptuando **ticket** | Util cuando se quiere validar que la entidad exista en la plataforma  |
| "radio" | Muestra varios valores para seleccionar | Datos de tipo texto con enumerado o **titleMap**  |
| "radiobuttons" | Muestra varios valores en forma de botón para seleccionar | Datos de tipo texto con enumerado o **titleMap**  |
| "slider" | Muestra un selector deslizante | Datos de tipo numérico con **minValue** y **maxValue** |

(**) Estos tipos habilitan una serie de atributos específicos útiles para personalizar cómo realizar la búsqueda de los elementos del componente.

### Características especiales para controles de selección de entidades y tickets

| Atributo | Descripción | Tipo | Valor por defecto |
| ------------- |-------------|-----|-----|
| disableDefaultSorted  | Deshabilita la ordenación por identificador en las búsqueda internas lo cual agiliza el resultado | booleano | **true** |
| disableCaseSensitive  | Deshabilita las búsquedas exactas por mayúsculas/minúsculas mermando el rendimiento de la búsqueda | booleano | **false** |
| quickSearchFields | Permite reconfigurar los campos por los que se realizará la búsqueda interna | array de string | **["provision.administration.identifier"]** en entidades o **["provision.administration.identifier", "provision.ticket.specificType", "provision.ticket.name", "provision.ticket.type", "provision.ticket.entity"]** para tickets |
| exactSearch | Habilita las búsquedas exactas agiliza el rendimiento de la búsqueda pero debes conocer el valor buscado | booleano | **false** |
| forceFilter | Fuerza la introducción de un filtro en el componente antes de mostrar resultados | booleano | **false** |
