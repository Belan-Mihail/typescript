let array:string[]
// alt let array:Array<string>

array = ['1', '2']




const numbers: ReadonlyArray<number> = [0,1,2,3]
// cant change 

// doesnt work (push and anothe arrays method also dont work)
// numbers[0] = 9
// numbres.push(10)


type TypeArray = [number, string, null]
// like tuples (cant chsnge)
const NewArray:TypeArray = [1, "2", null]

// dont work
// const NewArray:TypeArray = ["1", 2, null]
// const NewArray:TypeArray = [1, 2, null]
// const NewArray:TypeArray = ["1", 2, undefiend]


