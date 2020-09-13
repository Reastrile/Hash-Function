function hash(text, bit) {
    var hashlength = bit;
    var Characters = ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","?",">","<",":","}","{","+","_","~","`","!","@","#","$","%","^","&","*","(",")","-","=","[","]",";","'",",",".","/"," "];
    var OutputA = text.split('');
    var OutputB = [];
    
    for (i = 0 ; i < OutputA.length ; i++) {
        OutputB.push(Characters.indexOf(OutputA[i]) * (i + 1));
    }
    
    var total = 1;
    for (i = 0 ; i < OutputB.length ; i++) {
        total = total * OutputB[i];
    }
    
    total = BigInt(total ** 2).toString();
    while (total.toString().length < (hashlength * 2)) {
        total = BigInt(Math.floor(total * 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679)).toString();
    }
    
    total = total.split('');
    OutputA = [];
    for (i = 0 ; i < (total.length / 2) ; i++) {
        OutputA.push(Characters[parseInt(total[i].concat(total[i + 1]))]);
    }
    
    return OutputA.join('');
}
