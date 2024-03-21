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

