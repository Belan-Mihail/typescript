class Car {
    public name:string;
    public price:number;
    readonly o: number;

    constructor(name:string, price:number, o:number) {
        this.name = name
        this.price = price
        this.o = o
    }

    getInfo():string {
        return `${this.name} and ${this.price}`
    }

    // Privat or #getInfo():string
    // private getInfo():string {
    //     return `${this.name} and ${this.price}`
    // }

    // new Car ('BMW', 1000000).getInfo() - privat is working here!


    // Protected
    // protected getInfo():string {
    //     return `${this.name} and ${this.price}`
    // }

}

const car1 = new Car('audi', 1000000, 2)  

car1 // {name: 'audi}, price: 1000000}
car1.name // 'audi'
car1.name = 'bmw'
car1.name // 'bmw
// car1.o = 4 Cannot assign to 'o' because it is a read-only property.
// to protect field nedd to be readonly



// class Bus extends Car {
//     constructor(name:string, price:number) {
//         super(name, price)
//     } 

//     test() {
//         return this.getInfo() - protected is working here!
//     }

// }

// public - default модификатор позволяет вызвать метод где угодно
// private - модификатор позволяющий визвать метод только внутри фунции (если б метод был приватный 
// new Car ('BMW', 1000000).getInfo() не работала так как метод вызывается за пределами класса)
// protected - работает как private но его еще моно вызвать внутри класса который расширяется от текущего

new Car ('BMW', 1000000, 3).getInfo()

//class with default values
class Person3 {
    public name:string;
    public age: number = 20;
    public nickname: string = 'webdev';

    constructor(name:string) {
        this.name = name

    }

    getPass():string {
        return `${this.nickname} and ${this.age}`
    }

}

const newUser = new Person3('Mike')
newUser.getPass()  //'webdev20'