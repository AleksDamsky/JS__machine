class DataBase {
    url : number;

    constructor(){
        this.url = Math.random();
    }
};

let db1 = new DataBase();
let db2 = new DataBase();

console.log(db1.url);
console.log(db2.url);