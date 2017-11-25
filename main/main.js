function main(num) {
    var str1 = "";
    while(num > 2){
        str1 +=  num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
            "   Take one down and pass it around, " + (num-1) + " bottles of beer on the wall.\n" ;
        num--;
    }
    if(num == 2){
        str1 +=  num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
            "   Take one down and pass it around, " + (num-1) + " bottle of beer on the wall.\n" ;
        num--;
    }
    if(num == 1){
        str1 += num + " bottle of beer on the wall, " + num + " bottle of beer.\n"+
            "   Take one down and pass it around, no more bottles of beer on the wall.\n"+
            "   No more bottles of beer on the wall, no more bottles of beer.\n"+
            "   Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    }
    return str1;
}

module.exports = main;