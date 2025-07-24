# Tripleten web_project_around

Este es el proyecto número 7 del programa de Desarrollo Web de TripleTen

# Características del proyecto

Este proyecto está dividido en varias partes, siendo la primera entrega la que consta de la creación de una página web tipo red social (Instagram) que contiene una serie de imágenes a las que se podrá "reaccionar", también es posible actualizar la información de perfil, para lo cual se creó un formulario con javascript.

En la segunda parte se agregó un formulario para agregar nuevos lugares, también se agregó la funcionalidad de poder eliminar cualquier imagen. Además se incorporó la funcionalidad de poder visualizar cada foto (zoom) de manera individual haciendo clic en la imagen.

En la tercera parte se agregó la parte de validación de formularios de forma dinámica; es decir, se muestra al usuario un mensaje de error en color rojo así como añadiendo al campo del formulario con un borde inferior rojo. Cuando el usuario introduce de manera correcta los datos, además de desaparecer los mensajes de error se activa el botón de envío. Para esto se realizó con Javascript una serie de funciones con las cuales y en conjunto es posible realizar los procesos de validación.

En la cuarta parte se reorganizó el código en los siguientes módulos javascript:

1. Clase Card: dedicada a la creación y funcionamiento de las tarjetas individuales.
2. Clase FormValidator: dedicada a la validación de los datos en los formularios.
3. utils: donde se encuentran definidas las funciones utilizadas así como los controladores de eventos.
4. index: es el archivo principal que describe el funcionamiento global.

En la quinta parte se añadieron los siguientes módulos de javascript:

1. Section: es la encargada de mostrar las tarjetas iniciales y agregar nuevas tarjetas.
2. Popup: esta clase es la que va a realizar las funciones de abrir y cerrar popups, tomando en cuenta el selector de cada popup. Se incluyen los métodos de cerrar cada popup por medio del botón cerrar, click fuera del popup y presionando la tecla Esc.
3. PopupWithImage: esta clase muestra la versión ampliada de una imagen así como su descripción.
4. PopupWithForm: esta clase es la encargada de recopilar y enviar los datos de los formularios.
5. UserInfo: esta clase tiene la función de mostrar y actualizar la información de perfil del usuario (nombre, acerca de).

Se realizaron los ajustes necesarios para que cada elemento sea independiente, con esto se busca crear módulos que puedan ser reutilizables.

En la sexta parte se realizaron las siguientes peticiones al servidor:
-Cargar datos del usuario (Petición GET)
-Cargar tarjetas (Petición GET)
-Editar información del perfil del usuario (Petición PATCH)
-Agregar nuevas tarjetas (Petición POST)
-Borrar tarjetas (Petición Delete)
-Poder dar "like" a una trajeta así como eliminar dicho "like" (Peticiones PUT y DELETE)

- Para este proyecto se utilizaron los siguientes conceptos:

* HTML 5
* CSS
* Flexbox
* BEM
* Formularios
* Diseño responsivo
* Javascript
* Validación de formularios
* Programación orientada a objetos (POO)
* Clases de Javascript
* Exportaciones e importaciones en Javascript
* Métodos públicos y privados de Javascript
* JavaScript modular
* Clases Javascript
* Acoplamiento débil
* Promises
* Solicitudes al servidor
* API

El proyecto se puede consultar en el siguiente enlace:
https://oliviaa14.github.io/web_project_around/
