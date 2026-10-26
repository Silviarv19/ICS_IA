1. ¿En qué archivo está el punto de entrada de la aplicación? ¿Qué hace la función createRoot?
El punto de entrada está en src/main.jsx. La función createRoot crea la raíz de React para renderizar la aplicación dentro de un elemento HTML.

2. ¿Cuál es el ID del elemento HTML donde se monta la aplicación? ¿En qué archivo está definido?
El ID es root, definido en el archivo index.html: <div id="root"></div>

3. Dibuja el árbol de componentes que se renderiza al arrancar el proyecto recién creado.
App
└── div
    ├── a
    │   └── img
    ├── a
    │   └── img
    ├── h1
    ├── div
    │   ├── button
    │   └── p
    └── p

4. ¿Qué ocurre en la página si eliminas `<StrictMode>` de `main.jsx`? ¿Y en la consola en modo desarrollo?
En la página: no cambia su aspecto ni su funcionamiento habitual.
En desarrollo: React deja de realizar comprobaciones adicionales, como ejecutar ciertos renderizados y efectos dos veces para detectar errores

5. Abre `App.jsx` y localiza tres fragmentos de código JavaScript escritos entre llaves `{ }` dentro del JSX. Explica qué hace cada uno.
{count}: muestra el valor actual del contador.
{() => setCount((count) => count + 1)}: define una función que incrementa el contador al pulsar el botón.
{/* comentario */}: permite escribir un comentario dentro del JSX sin mostrarlo en la página.

6. ¿Qué es el elemento `<>` que envuelve el JSX devuelto por `App`? ¿Genera algún elemento en el DOM? Compruébalo con las herramientas de 
desarrollo del navegador (pestaña Elementos).
Es un Fragment de React. Permite agrupar varios elementos JSX sin añadir un elemento contenedor al DOM.
Solo aparecen sus elemento hijos.

