# Carrusel JS-Reutilizable y dinámico
<img width="1999" height="1548" alt="Copia de TALLER DE INVESTIGACIÓN 1" src="https://github.com/user-attachments/assets/00eef7f2-033d-45ec-a17f-fc80487d3874" />


¿necesitas que la visualización del usuario con tu pagina tenga componentes dinámicos para mostrar información sin disminuir el interés?

¿Tu cliente te pidió mostrar imágenes que cambien de forma automática cada cierto tiempo?

¿Quieres experimentar con un componente básico de tipo carrusel para estudiarlo y/o implementarlo?

¡ESTO ES PARA TI!
Este componente carrusel es una herramienta que te permite mostrar información en forma interactiva, el usuario puede leer una imagen dentro del carrusel y recorrer
a la siguiente, pero no solo eso, este componente incluye 2 funciones de mucha utilidad, primero te permite usar imagenes
que tengas de forma local o mediante URL´s SIN MODIFICAR TU HTML, y segundo TU DECIDES, tienes las opciones de decidir si quieres que el usuario
sea el que recorra cada imagen, o de lo contrario puedes ponerle un tiempo determinado para se haga la transcición.

ES MUY BÁSICO? Claro pero solo lo suficiente:
  -lo suficiente para que sea entendible, usable y hasta modificable a tus requerimientos personales
  -lo suficiente para que solo lo implementes sin modificar tu HTML (DOM), sin asignarle nombres específicos a tus imágnes o componentes
  -lo suficiente para que se entienda su función, sin detalles innecesarios que compliquen el proceso

  NO ES PARA PROFESIONALES PERO SIN DUDA ALGUNA ES UN BUEN PUNTO DE PARTIDA


## Instalación: cómo incluir el CSS y el JS en un proyecto HTML
Si llegaste aquí el siguiente paso es instalarlo y probarlo para no quedarte con la duda, pero ¿cómo hacerlo?

Toma en cuenta esto:
El componente se puede usar cuantas veces quieras en la misma página o en otros proyectos solo necesitas un contenedor por carrusel y llamar a `crearCarrusel` con tu contenido.

**1.Un contenedor vacío por cada carrusel:** Cada "div" representa un carrusel diferente, no lo confundas con las imágenes

```html
<div id="galeria1"></div>
<div id="galeria2"></div>
```

**2. Carrusel manual con imágenes locales:** En vez de imágenes locales puedes usar las que se encuentran en internet siempre y cuando las mandes en el argumento del método,
por cierto, el ejemplo de abajo es SIN la funcion para controlar las transiciones automaticamente, en este caso el usuario es el que presiona los botones y hace el cambio

```js
crearCarrusel(document.getElementById("galeria1"), [
  { src: "img/img1.jpg", alt: "comida 1" },
  { src: "img/img4.jpg", alt: "comida 2" }
])
```

**3. Otro carrusel con otro contenido y autoplay de 3 segundos:** nota que en este carrusel se le manda un tercer parametro, primero el objeto, luego las imagenes y en este caso el modo
automático con la duración que tu quieras (si no la especifícas el tiempo default es 3 seg)

```js
crearCarrusel(document.getElementById("galeria2"), [
  { src: "img/img2.jpg", alt: "random1" },
  { src: "img/img3.jpg", alt: "random2" }
], { autoplay: true, intervalo: 3000 })
```

**Ejemplo de como podrías implementarlo en tu archivo HTML** Es literalmente todo lo que tienes que hacer
<img width="1072" height="396" alt="image" src="https://github.com/user-attachments/assets/643bf0cf-f0e5-4f2d-8ce8-51e1ae7fb688" />


**EVIDENCIAS VISUALES DE LA PRUEBA QUE SE INCLUYE EN EL REPOSITORIO (El index.html)** RECUERDA QUE ES BÁSICO, PERO SOLO LO SUFICIENTE
<img width="1200" height="972" alt="image" src="https://github.com/user-attachments/assets/0b3a2f3c-ca9e-4c99-9431-f014a39eba89" />

VIDEO: Pendiente por ahora
