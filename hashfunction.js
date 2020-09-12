function hash(text, bit) {
    if (bit > 350) {
        return "bit cannot be larger than 300";
    }
    
    
    
    var Characters = ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","?",">","<",":","}","{","+","_","~","`","!","@","#","$","%","^","&","*","(",")","-","=","[","]",";","'",",",".","/"," "];
    var Text = text.split('');
    var Output = [];
    
    
    for(i = 0 ; i < Text.length ; i++) {
        Output.push(Characters.indexOf(Text[i]))
    }
    Output = Output.join('')
    
    while(Output.toString().length < bit) {
        Output = Math.floor(Output * 3);
        Output = BigInt(Output).toString();
    }
    
    if(Output.toString().length % 2 != 0) {
        Output = Output.split('');
        Output.push(0);
        Output = Output.join('');
    }
    
    var x = 0;
    TempStor = [];
    while (x < Output.length) {
        var n1 = Output[x].toString();
        var n2 = Output[x + 1].toString();
        TempStor.push(n1.concat(n2));
        x = x + 2;
    }
    
    Output = [];
    for(i = 0 ; i < TempStor.length ; i++) {
        if (TempStor[x] == '00') {
            Output.push(Characters[0]);
        } else if (parseInt(TempStor[i]) > (Characters.length)) {
            Output.push(Characters[0]);
        } else {
            Output.push(Characters[parseInt(TempStor[i], 10) - 1]);
        }
    }
    
    return Output.join('');
}
