/**
* Creation of class with a given array
* @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
* @see https://steveholgado.com/typescript-types-from-arrays/
*/

// TODO: Given a the following array create the type Color : 
const colors = ['bleue', 'green', 'red'] as const;
type color = typeof colors[number];



// TODO: given the following array of object create a type elements type
const pocketMonsters = [
    {name: "Venusaur", type:"Grass"  },
    {name: "Charizard", type:"Fire"  },
    {name: "Blastoise", type:"Water"  }
    ] as const

type type = typeof pocketMonsters[number]['type'];