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

//22:50