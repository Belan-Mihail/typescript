//Multyple types 
let id: number | string

id = 10;
id = '10'
// id = true Type 'boolean' is not assignable to type 'string | number'.


//Custom type (good naming)
type Name = string;

let id1: Name

id1 = '10'
// id1 = 10 Type 'number' is not assignable to type 'string'.
