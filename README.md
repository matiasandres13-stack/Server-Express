# API - Gestión de Productos

## Descripción

Esta es una API simple para gestionar productos. Proporciona endpoints para consultar la lista de productos, obtener los detalles de un producto específico y realizar operaciones CRUD (crear, leer, actualizar y eliminar).

## Endpoints

### Listar todos los productos

**Método HTTP:** `GET`

**Endpoint:** `/api/productos`

Obtiene la lista de todos los productos disponibles.

**Ejemplo de respuesta:**

```json
[
  {
    "id": 1,
    "nombre": "Producto 1",
    "precio": 100
  },
  {
    "id": 2,
    "nombre": "Producto 2",
    "precio": 200
  }
]
```

**Estado HTTP esperado:** `200 OK`

---

### Obtener un producto por ID

**Método HTTP:** `GET`

**Endpoint:** `/api/productos/{id}`

Obtiene los detalles de un producto específico utilizando su identificador.

**Ejemplo de solicitud:**

```http
GET /api/productos/1
```

**Ejemplo de respuesta:**

```json
{
  "id": 1,
  "nombre": "Producto 1",
  "precio": 100
}
```

**Estado HTTP esperado:** `200 OK`

---

### Crear un producto

**Método HTTP:** `POST`

**Endpoint:** `/api/productos`

Permite crear un nuevo producto.

**Ejemplo de solicitud:**

```json
{
  "nombre": "Producto 3",
  "precio": 300
}
```

**Ejemplo de respuesta:**

```json
{
  "id": 3,
  "nombre": "Producto 3",
  "precio": 300
}
```

**Estado HTTP esperado:** `201 Created`

---

### Actualizar un producto

**Método HTTP:** `PUT`

**Endpoint:** `/api/productos/{id}`

Permite actualizar los datos de un producto existente utilizando su identificador.

**Ejemplo de solicitud:**

```http
PUT /api/productos/1
```

**Cuerpo de la solicitud:**

```json
{
  "nombre": "Producto Actualizado",
  "precio": 150
}
```

**Ejemplo de respuesta:**

```json
{
  "id": 1,
  "nombre": "Producto Actualizado",
  "precio": 150
}
```

**Estado HTTP esperado:** `200 OK`

---

### Eliminar un producto

**Método HTTP:** `DELETE`

**Endpoint:** `/api/productos/{id}`

Permite eliminar un producto utilizando su identificador.

**Ejemplo de solicitud:**

```http
DELETE /api/productos/1
```

**Respuesta esperada:**

La API puede devolver una confirmación de eliminación o una respuesta sin contenido.

**Estados HTTP esperados:**

- `200 OK`: el producto se eliminó correctamente y se devuelve una confirmación.
- `204 No Content`: el producto se eliminó correctamente y no se devuelve contenido.

---

## CRUD

CRUD es un acrónimo que representa las cuatro operaciones básicas de gestión de datos.

| Operación | Descripción                | Método HTTP     |
| --------- | -------------------------- | --------------- |
| Create    | Crear un producto          | `POST`          |
| Read      | Leer o consultar productos | `GET`           |
| Update    | Actualizar un producto     | `PUT` / `PATCH` |
| Delete    | Eliminar un producto       | `DELETE`        |

## Contrato de productos

El contrato de la API define los endpoints disponibles, los métodos HTTP utilizados y las respuestas esperadas.

| Necesidad              | Método HTTP | Endpoint           | Respuesta esperada                     | Estado HTTP                 |
| ---------------------- | ----------- | ------------------ | -------------------------------------- | --------------------------- |
| Listar productos       | `GET`       | `/api/productos`   | Array de productos en JSON             | `200 OK`                    |
| Obtener un producto    | `GET`       | `/api/productos/1` | Objeto producto en JSON                | `200 OK`                    |
| Crear un producto      | `POST`      | `/api/productos`   | Objeto producto con ID generado        | `201 Created`               |
| Actualizar un producto | `PUT`       | `/api/productos/1` | Objeto producto actualizado            | `200 OK`                    |
| Eliminar un producto   | `DELETE`    | `/api/productos/1` | Confirmación o respuesta sin contenido | `200 OK` / `204 No Content` |

## Estructura de un producto

Cada producto contiene las siguientes propiedades:

| Propiedad | Tipo de dato               | Descripción                      |
| --------- | -------------------------- | -------------------------------- |
| `id`      | Número entero              | Identificador único del producto |
| `nombre`  | Cadena de texto (`string`) | Nombre del producto              |
| `precio`  | Número (`number`)          | Precio del producto              |

**Ejemplo de objeto producto:**

```json
{
  "id": 1,
  "nombre": "Producto 1",
  "precio": 100
}
```

## Resumen de endpoints

| Método   | Endpoint              | Operación                  |
| -------- | --------------------- | -------------------------- |
| `GET`    | `/api/productos`      | Listar todos los productos |
| `GET`    | `/api/productos/{id}` | Obtener un producto por ID |
| `POST`   | `/api/productos`      | Crear un producto          |
| `PUT`    | `/api/productos/{id}` | Actualizar un producto     |
| `DELETE` | `/api/productos/{id}` | Eliminar un producto       |

---
