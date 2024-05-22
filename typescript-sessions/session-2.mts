//Tuplas  *** para evitar la mutacion de los datos

// type RGB = readonly [number, number, number]; // readonly para evitar la mutacion de los datos

// let color: RGB = [255, 0, 0];
// let alpha: RGB = [255, 0, 1];

// color.push(4) // Error

//Enums *** Enumeraciones ***

/* ejemplo en JS */ //
// const ERROR_TYPES = {
//     NOT_FOUND: 'Not found',
//     ACCESS_DENIED: 'Access denied',
//     INTERNAL_SERVER_ERROR: 'Internal server error'

// }

// function mostrarmensaje(tipoDeError) {
//     if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
//         console.log('No encontrado')
//     } else if (tipoDeError === ERROR_TYPES.ACCESS_DENIED) {
//         console.log('Acceso denegado')
//     } else if (tipoDeError === ERROR_TYPES.INTERNAL_SERVER_ERROR) {
//         console.log('Error interno del servidor')
//     }
// }

//En typescript se puede hacer de la siguiente manera, los datos deben ser finitos, ni dinaicos los datos otro ejeplo seria los dias de la semana.

// enum ERROR_TYPES {
//   NOT_FOUND, //0
//   ACCESS_DENIED, //1
//   INTERNAL_SERVER_ERROR, //2
// }

//tambien podriamos declararlo antes como una constante.*** siempre que podamos utilicemos este ejemplo para no generar tanto JS en la trascompilacion.***
// const enum ERROR_TYPES {
//   NOT_FOUND, //0
//   ACCESS_DENIED, //1
//   INTERNAL_SERVER_ERROR, //2
// }

// Tmabien podriamos asignarle un string dado el caso que no queramos que se muestre el valor numerico.***
// enum ERROR_TYPES {
//   NOT_FOUND = 'Not found',
//   ACCESS_DENIED = 'access denied',
//   INTERNAL_SERVER_ERROR = 'Internal server'
// }

// function mostrarmensaje(tipoDeError: ERROR_TYPES) {
//   if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
//     console.log("No encontrado");
//   } else if (tipoDeError === ERROR_TYPES.ACCESS_DENIED) {
//     console.log("Acceso denegado");
//   } else if (tipoDeError === ERROR_TYPES.INTERNAL_SERVER_ERROR) {
//     console.log("Error interno del servidor");
//   }
// }

//ASERCIONES DE TIPOS ***
/* Las aserciones de tipos son declaraciones que se utilizan en programación para verificar que un valor tiene un determinado tipo de datos. Se utilizan para garantizar 
que los datos que se están manipulando en el código cumplan con ciertas condiciones, como por ejemplo, que un valor sea un número entero, una cadena de texto, un booleano, etc.
En lenguajes de programación como Java, C# o TypeScript, las aserciones de tipos se pueden realizar mediante la utilización de palabras clave como "instanceof", "typeof" o "as", entre otras. */

//Ejemplo error

// const canvas = document.getElementById('canvas')

//Null i no lo encuentra**
// HTMLElement si lo encuentra, pero no el tipo de elemento que esperamos seria HTMLCanvasElement**
//

// ??? Como sabe typeScript que realmente estas recuoerando un elemento <canvas/> ??? ***

// if (canvas != null) {
//     const ctx = canvas.getContext('2d')
// }

//Ejemplos correctos **
//const canvas = document.getElementById("canvas") as HTMLCanvasElement //as HTMLCanvasElement para decirle que es un elemento de tipo canvas pero no es un uso correcto de asercion de tipos

// const canvas = document.getElementById("canvas");

// if (canvas instanceof HTMLCanvasElement) {
//   // asercion de tipo podriamos hacerlo despues de la comprobacion haciendo inferencia = TypeScript se da cuenta que dentro del if ya solo puede ser un HTMLCanvasElement
//   const ctx = canvas.getContext("2d");
// }

//FETCHING DE DATOS EN TYPESCRIPT ***

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// el 'await expresion es unicamente en nivel de modulo o en una funcion marcada como async' para solucionar esto podrias marcar el archivo como mts
const response = await fetch(API_URL);

if (!response.ok) {
  throw new Error("Error al obtener los datos");
}

/* Esta seria la estructura de la respuesta que esperamos de manera manual, lo malo es que es un poco tedioso,
 ademas que si cambia la respuesta de la API tendriamos que cambiarlo manualmente.
Una manera de solucionar esto seria co la ayuda de la pagina  https://app.quicktype.io/ */

// type APIResponse = { // EJEMPLO A MANO
//   items: object[],
// }

/* tipo typescript zod */
// import * as z from "zod";

// export const ApiTestingElementSchema = z.object({
//   userId: z.number(),
//   id: z.number(),
//   title: z.string(),
//   body: z.string(),
// });
// export type ApiTestingElement = z.infer<typeof ApiTestingElementSchema>;

// export type APIPlaceHolder = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// const data = (await response.json()) as APIPlaceHolder[];

// data.map(repo => {
//   return {
//     userId: repo.userId,
//     id: repo.id,
//     title: repo.title,
//     body: repo.body,
//   }
// })

//Interfaces. ***
/*En TypeScript, una interfaz es una forma de definir la estructura de un objeto, 
especificando qué propiedades debe tener y de qué tipo deben ser. Las interfaces 
en TypeScript se utilizan para definir contratos en el código y 
asegurarse de que los objetos cumplan con ciertas reglas de estructura.

Aquí tienes un ejemplo de cómo se define una interfaz en TypeScript: */

// interface Person {
//   name: string;
//   age: number;
// }

// function greet(person: Person) {
//   return `Hello, ${person.name}!`;
// }

// const john: Person = { name: 'John', age: 30 };
// console.log(greet(john)); // Output: Hello, John!

interface Hero {
  id: string;
  name: string;
  age: number;
  saludar: () => void; // Metodo: funcion que pertenece a un objeto
}

const hero: Hero = {
  id: "1",
  name: "Spiderman",
  age: 20,
  saludar: function () {
    console.log(`Hola soy ${this.name}`);
  },
};

// Tambien podriamos tener una interface dentro de otra interface

interface Producto {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

//Tambien podemos extender una interface de otra interface para no tener que crear una nueva interface con los mismos datos
interface Zapatilla extends Producto {
  talla: number;
}

// interface CarritoDeCompras {
//   total: number,
//   productos: Zapatilla[]
// }

// const carrito: CarritoDeCompras = {
//   total: 100,
//   productos: [
//     {
//       id: 1,
//       name: 'Producto 1',
//       price: 20,
//       quantity: 2,
//       talla: 10
//     },
//     {
//       id: 2,
//       name: 'Producto 2',
//       price: 30,
//       quantity: 3,
//       talla: 12
//     }
//   ]
// }

interface CarritoDeCompras {
  total: number;
  productos: (Zapatilla | Producto)[]; // Podriamos tener un array de productos o zapatillas
}

//Ahora imagina que necesitamos operaciones dentro del carrito de compras, como agregar un producto, eliminar un producto, etc.
//Para esto podemos crear una interface que tenga todas estas operaciones.

interface OperacionesCarrito {
  agregarProducto: (producto: Producto) => void;
  eliminarProducto: (id: number) => void;
  calcularTotal: () => number;
}

// otra forma de hacerlo
// interface CarritoOps {
//   add(product: Producto): void,
//   remove(id: number): void,
//   total(): void
// }

const carrito: CarritoDeCompras = {
  total: 100,
  productos: [
    {
      id: 1,
      name: "Producto 1",
      price: 20,
      quantity: 2,
      talla: 12,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 30,
      quantity: 3,
      talla: 10,
    },
  ],
};

// Narrowing
/* Narrowing en TypeScript se refiere a la capacidad de reducir el tipo de una variable a un tipo más específico en función de ciertas condiciones. 
Esto se logra mediante el uso de constructos como condicionales, instanceof y typeof.

Por ejemplo, si tenemos una variable que puede ser de tipo string o number, 
podemos estrechar su tipo a string si verificamos que la variable es de tipo string en un bloque condicional.*/

// Aquí hay un ejemplo de cómo se puede estrechar un tipo en TypeScript:

// function imprimirLength(strNum: string | number) {
//   if (typeof strNum === "string") {
//     console.log(strNum.length); // Aquí TypeScript sabe que strNum es de tipo string
//   }
// }

// imprimirLength("Hola"); // Output: 4

// function mostrarLongitud (objeto: number | string) {
//   if (typeof objeto === 'string') {
//     return objeto.length
//   }

//   return objeto.toString().length // Aqui TypeScript sabe que objeto es de tipo number
// }

// mostrarLongitud('Hola') // Output: 4

// interface Mario  {
//   company: 'Nintendo', // si declaro el nombre en vez de colocar string, le estoy diciendo que siempre es asi de la misma manera con los otros tipos de datos
//   name: string,
//   saltar: () => void
// }

// interface Sonic  {
//   company: 'Sega',
//   name: string,
//   correr: () => void
// }

// type Personaje = Mario | Sonic

// function playGame(personaje: Personaje) {
//   console.log(personaje.name); // Aqui TypeScript sabe que personaje es de tipo Mario o Sonic

//   // if (personaje.company === 'Nintendo') { // Aqui si la company es de tipo Nintendo le decimos que salte y si no que corra
//   //   personaje.saltar()
//   // } else {
//   //   personaje.correr()
//   // }
// }

// TYPE GUARDS *** // Type guard es una guardia de tipo que nos permite verificar si una variable es de un tipo específico en tiempo de ejecución.
// interface Sonic {
//   name: string;
//   correr: () => void;
// }

// interface Mario {
//   name: string;
//   saltar: () => void;
// }

// type Personaje = Mario | Sonic;

// function checkIsSonic(personaje: Personaje): personaje is Sonic {
//   return (personaje as Sonic).correr !== undefined;
// }

// //HAY QUE EVITAR EL USO DE TYPE GUARDS, ES MEJOR UTILIZAR INTERFACES O CLASES
// function playGame(personaje: Personaje) {
//   if (checkIsSonic(personaje)) {
//     personaje.correr();
//     return
//   } else {
//     personaje.saltar();
//     return
//   }
// }

// CLASES *** //
/*En TypeScript, las clases son una forma de definir la estructura y el comportamiento de un objeto. 
Permiten encapsular datos y funciones relacionadas en un solo lugar, lo que facilita la organización y la reutilización del código.

Para crear una clase en TypeScript, se utiliza la palabra clave class seguida del nombre de la clase y, opcionalmente, una lista de propiedades y métodos.
Por ejemplo:

class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

let persona1 = new Persona("Juan", 30);
persona1.saludar();

En este ejemplo, se define una clase Persona con dos propiedades (nombre y edad),
 un constructor que recibe estos valores al crear una instancia de la clase,
y un método saludar que imprime un mensaje por consola.*/

// Para las clases tambien podemos utilizar interfaces para definir la estructura de la clase
interface Avenger {
  name: string;
  power: number;
  wonBattles: number;
  age: number;
  battle: (enemy: Avenger, win: boolean) => void; // incluso podriamos implementar metodos
}

class Avenger implements Avenger {
  // name: string; // si anteponemos readonly solo se podra acceder a el en modo lectura
  // power: number; // si antepone el private solo se podra acceder a el dentro de la clase. tambien a la clase que lo herede  se puede poner ambas a la vez readonly private
  // wonBattles: number = 0 // si anteponemos el protected solo se podra acceder a el dentro de la clase y a la clase que lo herede
  // age: number = 0 // si anteponemos el public se podra acceder a el desde cualquier parte de la aplicacion, tambien de la clase que lo herede y de la clase que lo instancie

  constructor(name: string, power: number) {
    this.name = name;
    this.power = power;
  }

  get fullName() {
    return `${this.name}, de poder ${this.power}`;
  }

  set powerScore(newPower: number) {
    if (newPower < 100) {
      this.power = newPower;
    } else {
      throw new Error("Power score cannot be more that 100");
    }
  }
} // Acá estariamos indicando la estructura de la clase de un Avenger

const avengers = new Avenger("spiderman", 80); // Creando el vengador

avengers.power = 90; // Modificando el poder del vengador
