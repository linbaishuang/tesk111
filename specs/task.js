console.log("dfsfs");

var main = require("../main/main.js");

console.log("dfsfs");
describe("main", function () {
    console.log("dfsfs");
    it("if the number is bigger than 1", function () {
        let num1 = 99;
        let result = main(num1);
        expect(result).toEqual("99 bottles of beer on the wall, 99 bottles of beer.\n" +
            "    Take one down and pass it around, 98 bottles of beer on the wall.\n" +
            "    98 bottles of beer on the wall, 98 bottles of beer.\n" +
            "    Take one down and pass it around, 97 bottles of beer on the wall.\n"
        )
    })
});