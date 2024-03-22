type TypeUser1 = {
    name:string;
    age:number;
    adress:string;
}

let user1:TypeUser1;

user1 = {
    adress: 'sss',
    name: 'mis',
    age: 24,

    // nickname: 'webb' Object literal may only specify known properties, and 'nickname' does not exist in type 'TypeUser1'.
}

// user1.nickname = 'webb' Property 'nickname' does not exist on type 'TypeUser1'.

//why we need type

// let user2: {name: string, age: number, nick: string} = {
//     name: 'a',
//     age: 23,
//     nick: 'b'
// }

// let admin2: {name: string, age: number, nick: string} = {
//     name: 'admin',
//     age: 33,
//     nick: 'mad'
// }

// we can add one type

type Person = {name: string, age: number, nick: string};

let user2:Person = {
    name: 'a',
    age: 23,
    nick: 'b'
}

let admin2:Person = {
    name: 'admin',
    age: 33,
    nick: 'mad'
}

//that why we need types


//updating type with optional properties

type person1 = {
    name: string, 
    age: number, 
    nick?: string,
    getPass?: () => string
}

let user3:person1 = {
    name: 'a',
    age: 23,
    nick: 'b'
}

let admin3:person1 = {
    name: 'admin',
    age: 33,
    getPass(): string {
        return `${this.name}${this.age}`
    }
}


type TypeUser = {
    name:string;
    age:number;
}

type TypeAdress = {
    city: string;
    country: string;
}


const user: TypeUser = {
    name: 'mis',
    age: 24,
}

const adress: TypeAdress = {
    city: 'York',
    country: 'Ukr',
}

// spread
const common = {
    ...user, ...adress
}

// variant

let common1: TypeUser & TypeAdress = {
    ...user,
    ...adress,
}


const create = (o: object | null): void => {}
// create(1)  Argument of type 'number' is not assignable to parameter of type 'object'.
// create(42) Argument of type 'number' is not assignable to parameter of type 'object'.
create({obj:1})

