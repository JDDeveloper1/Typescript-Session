//tipos
// const number = 1
// let n: number = 2

// let a = 'Hola'
// let aaa = null
// let b: undefined = undefined

// /// ??? Cuando no sabe inferir un tipo,
// // let a; seria un any

// //cualquier tipo de dato
// //Es que IGNORE el tipo de datos (typescript)
// let anyValue: any = 'hola'

// anyValue.aa // ??

// let anyValue: unknown = 'hola'

// anyValue.aa // ?? EVITAR !!!

// INFERENCIA
// como a y b infiere que son number sin decirle nada
// const a = 1
// const b = 2
// const c = a + b
// c tambien seria number

// Functions
// function salaudar(name: string): string {
//     console.log(`Hola ${name}`)
// }

// salaudar('pepe')
// salaudar(2) //error

//Objeto
//forma 1
// function saludar({ name, age }: { name: string, age: number }) {
//     console.log(`Hola ${name} tienes ${age} años`)
// }

// saludar({ name: 'pepe', age: 22 })

// //forma 2
// function saludar2(persona: { name: string, age: number }) {
//     const { name, age } = persona
//     console.log(`Hola ${name} tienes ${age} años`)
// }

// saludar2({ name: 'pepe', age: 22 })

//cuando hacemos la devulucion de un valor deberiamos de poner el tipo de dato que devolvemos
// function saludar({ name, age }: { name: string, age: number }): number {
//     console.log(`Hola ${name} tienes ${age} años`)
//     return age
// }

// saludar({ name: 'pepe', age: 22 })

// Esta seria una manera incorrecta de pasar nuestro parametro a la funcion de saludar, porque no estamos especificando el tipo de dato, seria como el ANY
// const sayHiFromFunction = (fn: Function) => {
//      fn('david')
// }

// const sayHi = (name: string) => {
//     console.log(`Hola ${name}`);
// }

// sayHiFromFunction(sayHi)

// Esta seria la forma correcta de pasar nuestro parametro a la funcion de saludar : void  es un tipo de dato que no devuelve nada* pero si develovieramos algo seria declarar que tipo de dato devolvemos
// const sayHiFromFunction = (fn: (name: string) => void) => {
//      fn('david')
// }

// const sayHi = (name: string) => {
//     console.log(`Hola ${name}`);
// }

// sayHiFromFunction(sayHi)

// Tipar arrows functions

//Forma 1 esta es mas clara
// const sumar = (a: number, b: number): number => {
//     return a + b
// }

// //forma 2
// const restar:( a: number, b: number) => number = (a, b) => {
//     return a - b
// }

// never :  esto quiero decir que nunca vamos a devolver nada
// function throwError(message: string): never {
//     throw new Error(message)
// }

// inferencia funciones anonimas segun el contexto. esoo lo sabe gracias a los genericos
// const avengers = ['spiderman', 'thor', 'ironman']

// avengers.forEach(avengers => {
//     console.log(avengers.toUpperCase())
// })

// inferecia de objetos puede ser si segue sigue el mismo argumento, pero lo mejior seria utilizar type Alias

// let hero = {
//     name: 'thor',
//     age: 1500
// }

// hero.name = 122452 //error

//aqui si bien no daria error, no podrias saber si lo que se esta crenado es un heroe
// let hero = {
//     name: 'thor',
//     age: 1500
// }

// function createHero(name: string, age: number) {
//      return {name, age}
// }

// const spiderman = createHero('spiderman', 22)

// Type Alias : su funcion es crear un tipo de dato personalizado que se puede reutilizar, debe declararse con PascalCase para que se diferencie de las variables.

// type Hero = {
//     name: string
//     age: number

// }

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// }

// function createHero(name: string, age: number): Hero {
//      return {name, age}
// }

// const spiderman = createHero('spiderman', 22)

//Pasandole mas argumentos

// type Hero = {
//     name: string
//     age: number

// }

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// }

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero
//      return {name, age}
// }

// const spiderman = createHero({name: 'spiderman', age: 22})

// Optional properties

//type HeroId = `${string}-${string}-${string}-${string}-${string}`; // template union type, es una cadena de texto

// type Hero = {
//     readonly id?: string // readonly es para que no se pueda modificar y solo se de lectura de la propiedad
//     name: string
//     age: number
//     isActive?: boolean

// }

// type Hero = {
//     readonly id?: HeroId // le estas diciendo que formato tiene el id
//     name: string
//     age: number
//     isActive?: boolean

// }

// let hero: Hero = {
//     name: 'spiderman',
//     age: 1500
// }

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero
//     return { name, age, isActive: true }
// }

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true,
//     }  // crea el id automaticamente, el randomUUID es una funcion que nos da un id unico generado por el sistema, es nativo de la plataforma webs
// }

//  const spiderman = createHero({ name: 'spiderman', age: 22 })

// const spiderman = Object.freeze(createHero({ name: 'spiderman', age: 22 })) // esto es para que no se pueda modificar el objeto, ahora es inmutable, ya es necesario el readonly

//console.log(spiderman.isActive); // Nos diria que true

//spiderman.id?.toString() // es el operador de encadenamiento opcional, si no existe la propiedad id no va a devolver nada

//spiderman.id = 4515251511 // error porque es readonly,eso no quiere dcir que no es sea inmutable.

// Template union types // es una validacion de un tipo de dato

// type HexadecimalColor = `#${string}` // le estamos diciendo como es una hexadecimal

// const color: HexadecimalColor = '0033ff' // error porque no tiene el # que ya le hemos dicho que tiene el color
// const color2: HexadecimalColor = '#0033ff' // acepta porque tiene el # que ya le hemos dicho que tiene el color

//Union Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal'; // le estamos diciendo que puede ser alguno de estos valores

// let annn: number | string  // le estamos diciendo que tipo de dato es, incluso podríamos poner mas tipos de datos ó un valor

//annn = true // el tipo de dato boolean no es valido, por que no se lo hemos asignado

// type Hero = {
//     readonly id?: string
//     name: string;
//   age: number;
//     isActive?: boolean;
//     powerScale?: HeroPowerScale,
// };

// let hero: Hero = {
//   name: "spiderman",
//   age: 1500,
// };

//  function createHero(hero: Hero): Hero {
//      const { name, age } = hero
//      return {
//          id: crypto.randomUUID(),
//          name,
//          age,
//          isActive: true,
//      }
//  }

// const spiderman = createHero({ name: 'spiderman', age: 22 })
// spiderman.powerScale = 'planetary'

// Intersection Types // con esto podemos unir  dos tipos de datos, el anterior era un in y esto seria or

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = "local" | "planetary" | "galactic" | "universal";

// type HeroBasicInfo = {
//   name: string,
//   age: number,
// }

// type HeroProperties = {
//   readonly id?: string;
//   isActive?: boolean;
//   powerScale?: HeroPowerScale;
// };

// type Hero = HeroBasicInfo & HeroProperties

// let hero: Hero = {
//   name: "spiderman",
//   age: 1500,
// };

// function createHero(input: HeroBasicInfo): Hero {
//   const { name, age } = input;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }

// const spiderman = createHero({ name: "spiderman", age: 22 });
// spiderman.powerScale = "planetary";

//Type indexing // podemos acceder a las propiedades de un objeto de una manera mas dinamica ***

// type HeroProperties = {
//   isReactive: boolean;
//   address: {
//     planetary: string;
//     city: string;
//   };
// };

// const addressHero: HeroProperties["address"] = {
//   city: "New York",
//   planetary: "Earth",
// };

// Type from value // podemos crear un tipo de dato a partir de un valor ***

// const address = {
//   planet: "Earth",
//   city: "New York",
// }

// type address = typeof address; // es un operador que no ayuda a crear typos de datos a partir de un valor

// const addresTwitch: address = { // esta esperando que sea el mismo tipo de datos
//   planet: "Mars",
//   city: "Madrid",
// }

// Type from function return , quiero recuperar la informacion de la funcion

// function createAddress() {
//   return {
//     planet: "Earth",
//     city: "New York",
//   };
// }

// type address = ReturnType<typeof createAddress>; //  esto me recupera el tipo de datos a partir de la funcion

// Arrays***

//const lenguajes = [] // le estamos diciendo que es un array vacio

//const lenguajes: string[] = [] // le estamos diciendo que es un array de strings - sintaxis 1
//const lenguages: Array<string> = [] // le estamos diciendo que es un array de strings - sintaxis 2
// const lenguages: (string | number)[] = []; // si quisiera añadir  mas de un valor a mi array

// lenguages.push("Javascript");
// lenguages.push("Javascript");
// lenguages.push(2);

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = "local" | "planetary" | "galactic" | "universal";

// type HeroBasicInfo = {
//   id?: number,
//   name: string,
//   age: number,
// }

// const heroWithbasicInfo: HeroBasicInfo[] = [] // esto seria un array de objetos

//Tipar un array de arrays Matrix  de 3x3 de strings
/*
[
  ['x', 'y', 'z'], // string
  ['o', 'x, 'o'], // string
  ['x', '', 'o'], // string

]
*/

// type CellValue = 'x' | 'o' | ''

// type GameBoard = [
// [CellValue, CellValue, CellValue], // tuple
// [CellValue, CellValue, CellValue], // tuple
// [CellValue, CellValue, CellValue], // tuple
// ]

// const gameBoard: GameBoard = [
//   ['x', 'o', 'x'],
//   ['o', 'x', 'o'],
//   ['x', '', 'o'],
// ]

// //gameBoard[0][1] = '122345'
