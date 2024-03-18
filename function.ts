type TypeChannelReturn = {
    name:string
}

function getChannel(name:string): TypeChannelReturn {
    return { name }
}

//мы сделали двойную типизацию: входных и исходящих данных функции
//  входные данные это принимаемый атрибут для которого мы установили type string
// выходной это ретурн для которого мы установили тип на основании TypeChannelReturn
// после чего наша функция допускает возврать только свойства name с типом строка
// return { age } даже если age тоже строка - уже не будет работать 


// example for arrow function
const getChannelName = (name:string): TypeChannelReturn => {
    return { name }
}

//avternative syntax
//                      input data      output data
type ChannelFunction = (name:string) => TypeChannelReturn

//    типизировали стрелку здесь
const getChannelName1: ChannelFunction = (name) => {
    return { name }
}

/////////////////////////
const getNumbers = (...numbers: number[]) => {
    return numbers
}

////////////////////
function getCars(name:string, price?:number):string {
    return price ? `Name ${name} price ${price}` : `Name ${name}` 
}

const getCar1 = getCars('bmw')
const getCar2 = getCars('audi', 100000)
// const getCar3 = getCars('audi', 100000, true) - doesnt work


//25:05