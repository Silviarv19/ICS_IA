
BLOQUE A

A.1)¿Por qué pendiente no tiene un tipo útil?
Porque no le hemos asignado ningún valor ni indicado ningún tipo. TypeScript la considera de tipo any en este caso, así que puede aceptar cualquier tipo de dato y perdemos la comprobación de tipos.
Correccion  let pendiente: string;


A.2)// ERROR 1: media es number, no string, porque calcularMedia devuelve number.
const media: number = calcularMedia([6, 7, 8]);

// ERROR 2: '7' es string, pero el array solo admite números.
calcularMedia([6, 7, 8]);

// ERROR 3: Date no tiene un método llamado sumarDias.
// Para sumar días, podemos modificar la fecha con setDate.
const hoy = new Date();
hoy.setDate(hoy.getDate() + 3);

// ERROR 4: aprobado es boolean, no puede recibir un string.
let aprobado = true;
// aprobado = 'sí'; // Error: string no es asignable a boolean.


A.4)¿Por qué TypeScript no avisa del error?
Porque any desactiva la comprobación de tipos. TypeScript permite acceder a respuesta.autor.toUpperCase() aunque autor no exista en el objeto.
Con unknown, TypeScript obliga a comprobar qué contiene la variable antes de utilizar sus propiedades.
La función esLibro comprueba que el valor sea un objeto con titulo de tipo string y paginas de tipo number. Si es válido, TypeScript permite tratarlo como un Libro.


A.5)unknown: significa que no sabemos qué tipo de dato tenemos. Antes de usarlo, debemos comprobar su tipo.
never: representa un valor que nunca llega a existir porque la función no termina normalmente o porque no puede devolver ningún valor.



BLOQUE B

B.4)¿Podrías definir EstadoPrestamo con una interface? ¿Por qué?
No, porque EstadoPrestamo es un tipo de unión que solo admite unos valores concretos ('disponible', 'prestado' o 'reservado'). Las interfaces sirven para definir la estructura de los objetos, mientras que los tipos de unión se definen con type.





























export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
