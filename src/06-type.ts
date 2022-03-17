/*
 * Type
*/



type Person = {
  name: string;
  age: number;
  isActive: boolean;
};

const paul: Person = {
  name: "lol",
  age: 19,
  isActive: false
};

/*======================================================================================================*/

function getValueComplete2(obj: { value: boolean }): { valueChanged: number } {
  return { valueChanged: 2 };
}

// i.e an 'Value' for { value: boolean } and 'ValueChanged' for { valueChanged: number }

type Value = {
  value: boolean;
};

type ValueChanged = {
  valueChanged: number;
};

function getValueCompleteWithInterface(obj: Value): ValueChanged {
  return { valueChanged: 2 };
}

const testValue = { value: false };

getValueComplete2(testValue);
getValueCompleteWithInterface(testValue); // Why typescript is not complaining ?

/*======================================================================================================*/



type Person2 = {
  getRealAge(a: number): number;
};

const paul2: Person2 = {
  getRealAge(a: number): number {
    return a + 10;
  }
};

/*======================================================================================================*/


type Sum = (a: number, b: number) => number;

const sum: Sum = (a: number, b: number): number => {
  return a + b;
};

sum(1, 3);

/*======================================================================================================*/

/*
  Type alias
*/


type Int = number;

function acceptInteger(a: Int): Int {
  return a + 1;
}

/*--------------------------------------------------------------------*/




type Bool = boolean;

function acceptOnlyTrue(a: Bool): Bool {
  return a;
}

/*--------------------------------------------------------------------*/



type StrOrNum = string | number;

let strOrNum: StrOrNum;
strOrNum = 123;
strOrNum = "123";

export {};