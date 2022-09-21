# BACK END - Entregable-05

###  Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:

    o   Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
    o   Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
    o   Ambas páginas contarán con un botón que redirija a la otra.
    o   Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por pug.
    o   Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por ejs.


### Aspectos a incluir en el entregable:
    o   Realizar las plantillas correspondientes que permitan recorrer el array de productos y representarlo en forma de tabla dinámica, siendo sus cabeceras el nombre de producto, el precio y su foto (la foto se mostrará como un imágen en la tabla)
    o   En el caso de no encontrarse datos, mostrar el mensaje: 'No hay productos'.
    o   El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo. Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.. 


