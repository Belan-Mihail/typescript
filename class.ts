class Car {
    name:string
    price:number

    constructor(name:string, price:number) {
        this.name = name
        this.price = price
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

new Car ('BMW', 1000000).getInfo()