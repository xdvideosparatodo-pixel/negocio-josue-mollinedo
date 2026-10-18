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
