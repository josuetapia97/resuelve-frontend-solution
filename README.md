# Solución Frontend

Para esta solución se creó una interfaz gráfica con la ayuda de React.
Ésta hace peticiones a la API de [Ghibli films](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API "Ghibli films"), obtiene los datos y los muestra en la interfaz con su titulo, descripción, autor, año de creación y duración de la pelicula.

La interfaz cuenta con una busqueda por titulo, la cual te ayuda a autocompletar la pelicula dentro de la cátegoria.

# Levantamiento de ambiente 🚀

Para levantar el ambiente realmente es muy sencillo, para facilitar esto nos vamos a ayudar de `docker`, pero antes tenemos que hacer algunas cosas.

- Instalar [Git](https://git-scm.com/downloads "instalar Git")
- Instalar [Docker](https://docs.docker.com/get-docker/ "instalar Docker")

Una vez instalado todo, para levantar nuestro ambiente tenemos que aplicar el siguiente comando:

``docker build -t <nombre de tu imagen>``

donde nombre de la imagen es algo que haga sentido para la aplicación

hasta aquí tenemos ya creada nuestra imagen, para crear nuestro contenedor tenemos que aplicar el siguiente comando:

``docker run --rm -dp 80:80 <nombre de la imagen>``

y listo, podemos consultar nuestro pequeño sitio web, en la siguiente URL:

``http://localhost/``

entonces abrimos nuestro navegador e introducimos la URL anterior.

# Parte del código que estoy más orgulloso 

``https://github.com/josuetapia97/resuelve-frontend-solution/blob/main/src/Contenido.js``

El subirlo a alguna plataforma ya no me dio tiempo, es un trabajo que se puede hacer futuro, sin embargo, al tener toda la solución en un contenedor el deploy se realiza mucho más fácil.