### 1. GET (Obtener todos los posts del userId 1)

* **¿Para qué sirve?**: Recupera una lista filtrada de recursos que pertenecen a una entidad específica sin alterarlos en el servidor.
* **Configuración en Thunder Client**:
  * **Método**: GET
  * **URL**: https://jsonplaceholder.typicode.com/posts?userId=1
  * **Pestaña Query**: Verás automáticamente que se añade el parámetro userId con el valor 1.
  * **Cuerpo (Body)**: Marcar la opción icon-none (Vacío).
   ```json
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    ```
  * **Código de respuesta**: 200 OK
  * **Respuesta**: Devuelve un arreglo con los 10 posts del usuario (puedes consultar el contenido completo en la documentación de referencia).
---
### 2. POST (Añadir un nuevo post al userId 1)

* **¿Para qué sirve?**: Crea un undécimo post vinculándolo al id del usuario solicitado de forma simulada.
* **Configuración en Thunder Client**:
  * **Método**: POST
  * **URL**: https://jsonplaceholder.typicode.com/posts
  * **Pestaña Body -> JSON**:
    ```json
    {
      "title": "Mi nuevo post número 11",
      "body": "Este es un post adicional de prueba en la colección.",
      "userId": 1
    }
    ```
  * **Código de respuesta**: 201 Created
  * **Respuesta**:
    ```json
    {
      "title": "Mi nuevo post número 11",
      "body": "Este es un post adicional de prueba en la colección.",
      "userId": 1,
      "id": 101
    }
    ```
### 3. PUT (Reemplazo total de uno de los posts del usuario)

* **¿Para qué sirve?**: Modifica por completo el contenido de uno de los 10 posts existentes (por ejemplo, el post con id: 1).
* **Configuración en Thunder Client**:
  * **Método**: PUT
  * **URL**: https://jsonplaceholder.typicode.com/posts/1
  * **Pestaña Body -> JSON**:
    ```json
    {
      "id": 1,
      "userId": 1,
      "title": "Este título reemplaza al original del primer post",
      "body": "Contenido completamente sobrescrito."
    }
    ```
  * **Código de respuesta**: 200 OK
    ```json
    {
    "id": 1,
    "userId": 1,
    "title": "Este título reemplaza al original del primer post",
    "body": "Contenido completamente sobrescrito."
    }
    ```

---
### 4. PATCH (Modificación parcial de un post del usuario)

* **¿Para qué sirve?**: Altera únicamente un campo específico del post asignado sin necesidad de reenviar toda la estructura de datos.
* **Configuración en Thunder Client**:
  * **Método**: PATCH
  * **URL**: https://jsonplaceholder.typicode.com/posts/1
  * **Pestaña Body -> JSON**:
    ```json
    {
      "title": "Solo actualizo el título manteniendo el cuerpo original"
    }
    ```
  * **Código de respuesta**: 200 OK
  ```json
    {
    "userId": 1,
    "id": 1,
    "title": "Solo actualizo el título manteniendo el cuerpo original",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    ```
---
