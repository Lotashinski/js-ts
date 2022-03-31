#!/usr/bin/node

class Obj {
    field1;
    field2;

    constructor() {
        this.field1 = "first";
        this.field2 = "second";
    }

    concat(param1, param2) {
        return `${this.field1}, ${this.field2}, ${param1}, ${param2}`;
    }
}

const obj = new Obj();
const obj2 = {
    field1: "g1",
    field2: "g2",
}


console.log(obj.concat());
console.log(obj.concat.bind(obj2, "2", "2", "3")())