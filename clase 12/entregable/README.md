# BACK END - Entregable-06

###  Consigna 1:  Modificar el último entregable para que disponga de un canal de websocket que permita representar, por debajo del formulario de ingreso, una tabla con la lista de productos en tiempo real. 
    o   Puede haber varios clientes conectados simultáneamente y en cada uno de ellos se reflejarán los cambios que se realicen en los productos sin necesidad de recargar la vista.
    o   Cuando un cliente se conecte, recibirá la lista de productos a representar en la vista.

### Aspectos a incluir en el entregable:
    o   Para construir la tabla dinámica con los datos recibidos por websocket utilizar Handlebars en el frontend.      
    o   Considerar usar archivos públicos para alojar la plantilla vacía, y obtenerla usando la función fetch( )
    o   oRecordar que fetch devuelve una promesa.



### Consigna 2:  Añadiremos al proyecto un canal de chat entre los clientes y el servidor.

### Aspectos a incluir en el entregable:
    o   En la parte inferior del formulario de ingreso se presentará el centro de mensajes almacenados en el servidor, donde figuren los mensajes de todos los usuarios identificados por su email.       
    o   El formato a representar será: email (texto negrita en azul) [fecha y hora (DD/MM/YYYY HH:MM:SS)](texto normal en marrón) : mensaje (texto italic en verde) 
    o   Además incorporar dos elementos de entrada: uno para que el usuario ingrese su email (obligatorio para poder utilizar el chat) y otro para ingresar mensajes y enviarlos mediante un botón.
    o   Los mensajes deben persistir en el servidor en un archivo (ver segundo entregable).


