
interface IAuthor {
    id: number,
    username: string,
}

interface ICategory {
    id: number,
    title: string,
}


// post may have multy User or Categories
interface IPost {
    id: number,
    title: string,
    desc: string,
    extra: IAuthor[] | ICategory[] 

}


//T parameter which we can choose
interface IPostBetter<T> {
    id: number,
    title: string,
    desc: string,
    extra: T[],

}

const testUser: IPostBetter<string> = {
    id: 1,
    title: 'a',
    desc: 'b',
    extra: ['str', 'str2']
}

interface IPostEventBetter<T extends object> {
    id: number,
    title: string,
    desc: string,
    extra: T[],

}

// we cant add string as parameter. we nee to add object
const testUser2: IPostEventBetter<{id:number, username:string}> = {
    id: 1,
    title: 'a',
    desc: 'b',
    extra: [{id: 1, username:'john'}]
}

const testUser3: IPostEventBetter<IAuthor> = {
    id: 1,
    title: 'a',
    desc: 'b',
    extra: [{id: 1, username:'john'}]
}

const testUser4: IPostEventBetter<ICategory> = {
    id: 1,
    title: 'a',
    desc: 'b',
    extra: [{id: 1, title:'title1'}]
}