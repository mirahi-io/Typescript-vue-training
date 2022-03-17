

/**
* Use the following object below in order to create the class Student 
* addition a Student has the methods connect and disconnect which change the isActive property 
*/

// const paul:Student  = {
//   name: "lol",
//   age: 19,
//   isActive: false
// };

/*======================================================================================================*/


/**
 * Understanding the notion acess level with classes properties, create a class Player :
 * a public string username
 * a private string name , optional with a default value e.g :  `Inigo Montoya`
 * a protected method whoAmI which will only print username - name
 * a public function : 
    prepareForbattle():void{
        this.whoAmI();
        console.log(`My name is ${ this.name }, you killed my father, prepare to die!`)
    }
 */

class Player {
}

// const p1 = new Player('typescriptTester','Leonard');
// One of those following calls won't work, why ? 
// p1.whoAmI();
// p1.prepareForbattle();

/*======================================================================================================*/


/**
 *Understanding the notion acess level with classes properties
 */


/**
* TODO: add the missing code in order to have extends the User class
*/

class Admin extends Player {
    private hasRootAccess: boolean
    
    constructor( rootAccess: boolean){
        this.hasRootAccess = rootAccess;
    }
    
    isRoot(): boolean {
        this.whoAmI();
        return this.hasRootAccess;
    }
}

const admin = new Admin(true);

// only for testing purposes

console.log("Am i root ",admin.isRoot());

/*======================================================================================================*/



/**
* Understanding the notion statics :
* TODO: uncomment the example below 
*/

// class Firework {
//   static totalItems:number = 100;
//   explode(){
//     Firework.totalItems--;
//     console.log(`Firework left: ${Firework.totalItems}`);
//   }
// }
 
// const f1 = new Firework();
//  f1.explode();
 
// const f2 = new Firework();
//  f1.explode();



/*======================================================================================================*/