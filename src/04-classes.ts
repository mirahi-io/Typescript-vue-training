

/**
* Use the following object below in order to create the class Student 
* addition a Student has the methods connect and disconnect which change the isActive property 
*/

// const student  = {
//   name: 'Sheldon'
//   age: 19,
//   isActive: false
// };

class Student {
    name : String
    age : number
    isActive : boolean

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        this.isActive = false;
    }


    connect(){
        this.isActive = true
    }

    disconnect(){
        this.isActive = false
    }

}




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
    public username: String;
    private name? : String;

    constructor(username: string, name?: string){
        this.username = username;
        this.name = name || `Inigo Montoya`;
    }

    protected whoAmI():void{
        console.log(`${this.username} - ${this.name}`)
    }

    prepareForbattle():void{
        this.whoAmI();
        console.log(`My name is ${ this.name }, you killed my father, prepare to die!`)
    }
}

const p1 = new Player('test','typescript');
p1.prepareForbattle();
/*======================================================================================================*/


/**
 *Understanding the notion acess level with classes properties
 */


/**
* TODO: add the missing code in order to have extends the User class
*/

class Admin extends Player {
    private hasRootAccess: boolean
    constructor( username: string,rootAccess: boolean){
        super(username);
        this.hasRootAccess = rootAccess;
    }
    
    isRoot(): boolean {
        this.whoAmI();
        this.prepareForbattle();
        return this.hasRootAccess;
    }
}

const admin = new Admin('Morningstar', true);

// only for testing purposes

console.log("Am i root ",admin.isRoot());

/*======================================================================================================*/



/**
* Understanding the notion statics :
* TODO uncomment the example below 
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