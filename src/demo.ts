// demo basic annotations
// demo primitive and array types
// demonstrate protection when you assign other types

/**
 * symbol => are immutable (cannot be changed) and are unique.
 */

const value1 = Symbol("hello");
const value2 = Symbol("hello");

//console.log(value1 === value2);

// const example = Symbol('hey');
// console.info(example);
// console.log(example.description);

/**
 * unknown vs any
 */

let demo1: any;
let demo2: unknown;

demo1 = "ok";
demo2 = "ok";
//console.log("string values", demo1, demo2);

// const s1:string = demo1
// const s2:string = demo2

/**
 * never
 */

const infiniteLoop = (): never => {
  while (true) {
    console.log("hey");
  }
};

const inputData = (data: string | number) => {
  if (typeof data === "string") {
    // do something
    return data;
  } else if (typeof data === "number") {
    // do something else
    return data;
  } else {
    return data; // has type 'never'!
  }
};

const colorString = ["red", "blue", "green"] as const;
type color = typeof colorString[number];

type Team = {
  name: string;
  city: string;

  [key: string]: string | number;
};

interface Team2 {
  name: string;
  city?: string;
  win(): boolean;
}
const bestTeam: Team = { name: "chargers", city: "la" };
bestTeam.league = 1;

bestTeam.city;

const func = (a?: number, b?: number, c?: number, ...d: number[]) => {
  console.log("my funct", a, b, c, d);
};

type SchoolMember = "a" | "b";

let card: Set<number>;

class car {
  speedUp() {
    console.log("as speed as a car");
  }
}

class Human {
  speedUp() {
    console.log("as slow as an human");
  }
}

const barryAllen: Human = new car();

if( barryAllen instanceof car ){
  console.log('is car', true)
} else {
  console.log( typeof barryAllen);
}
