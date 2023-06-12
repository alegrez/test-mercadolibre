Repo para test de MercadoLibre

Sobre el proyecto:
- Está hecho sobre el framework Next.js.
- Se utilizó Typescript para usar sintaxis de tipos.
- Se usó Tailwind para agregar estilos.
- Se usó la API incluida en Next.js para correr código desde el servidor.
- El proyecto contiene 4 componentes usados a nivel de cliente: 
  - ItemDetail: muestra el detalle de un producto,
  - NavBar: muesta la barra de búsqueda,
  - SearchResultItem: muestra un producto de la lista de resultados,
  - SearchResults: muestra la lista de resultados.
- Las ulrs de navegación son:
  - GET /: muestra la página sólo con la barra de búsqueda,
  - GET /items/: muestra los resultados de la búsqueda,
  - GET /items/:itemId/: muestra el detalle del producto con id :itemId
- La api del servidor contiene los siguientes endpoints:
  - POST /api/items/: busca los resultados de la búsqueda. El texto de consulta va en el body en el campo q.
  - POST /api/items/:itemId: busca el detalle del producto con id :itemId.
- Para buscar las categorías se usó el endpoint adicional https://api.mercadolibre.com/categories/:itemId. Esto no estaba especificado en el enunciado del test.

Instrucciones para levantar el proyecto:
- abrir consola y ubicarse en esta carpeta (test-mercadolibre)
- ejecutar npm install para instalar dependencias
- ejecutar npx next build para compilar el proyecto
- ejecutar npx next start para levantar el proyecto
- ingresar a http://localhost:3000 desde el navegador.
