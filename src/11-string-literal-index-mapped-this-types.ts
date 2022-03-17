/*
  Literals Types
*/

// TODO: create 'RangerColors' type using string literal for the colors
//  Red, Green, Blue, Yellow, Pink

type RangerColors = 'Red' | 'Green' | 'Blue' | 'Yellow' | 'Pink';

/*--------------------------------------------------------------------*/

// TODO: create 'PI' type with the 3.1415 value

type PI = 3.1415;

/*--------------------------------------------------------------------*/

// TODO: create 'Bools' type with the true or false value

type Bools = true | false;

/*======================================================================================================*/

/*
  Index Types
*/

// TODO: type the object below using Index/Mapped types and no any

type User = {
  [key: string]: string;
};
const user: User = {
  name: 'LOL',
  last: 'llll'
};

// Uncomment this line to check if your type is working
user.lol = 'POLL';

/*--------------------------------------------------------------------*/

// TODO: type the object below using Index types and no any

type Student = {
  name: string;
};

// Write here the type
type CustomMap = {
  [key: number]: Student;
};

const map: CustomMap = {};
map[1] = { name: 'paul' };
map[3] = { name: 'jean' };
map[7] = { name: 'mali' };

/*--------------------------------------------------------------------*/

// TODO: type the object below using Index types and no any

type CardinalDirection = 'North' | 'East' | 'South' | 'West';

type Position = { [key in CardinalDirection]?: number };

const p1: Position = {
  North: 3,
  East: 4
};

const p2: Position = {
  South: 3,
  East: 4
};

const p3: Position = {
  West: 3
};

/*======================================================================================================*/

/*
  Mapped Types
*/

type Ranger = {
  name: string;
  age: number;
};

// TODO: write the 'Optional' type that make all properties in T optional

type Optional<T> = { [P in keyof T]?: T[P] };

// Uncomment these line to validate you type, they should be in error
// const wolf: Optional<Ranger> = {
//   name: 'wolf',
//   age: 233
// };
// wolf.name.toLowerCase();
// wolf.age.toString()

/*--------------------------------------------------------------------*/

// TODO: write the 'ReadOnly' type that make all properties in T readonly

type ReadOnly<T> = { readonly [P in keyof T]: T[P] };

// Uncomment these line to validate you type, they should be in error
// const ranger: ReadOnly<Ranger> = {
//   name: 'lol',
//   age: 233
// };
// ranger.name = 'POL'
// ranger.age = 9

/*======================================================================================================*/

/*
  Typed this
*/

// TODO: type 'this' arguments
function getName(this: { name: string }) {
  return this.name;
}

getName.call({ name: 'lol' });

/*--------------------------------------------------------------------*/

// TODO: type 'this' arguments
function greeting(this: { name: string }, title: string) {
  return title + ' ' + this.name;
}

greeting.call({ name: 'lol' }, 'Mr');

export {};