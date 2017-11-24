function main(num) {
    var str1 = "${num} + bottles of beer on the wall, 99 bottles of beer.\n" +
            "Take one down and pass it around, 98 bottles of beer on the wall.\n" +
        "${num-1} + bottles of beer on the wall, 98 bottles of beer.\n" +
            "Take one down and pass it around, 97 bottles of beer on the wall.\n";
    // var str1 = "aaa";
    if(num > 1){
        return str1;
    }
}

module.exports = main;