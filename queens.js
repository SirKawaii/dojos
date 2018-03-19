function readline() {
    return ["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)","(5,4)","(2,5)"];
}



function EightQueens(strArr) { 

    let queens = strArr;

    for(i=0; i < strArr.length - 1 ;i++){
        let queen = strArr[i];
        let nextqueen = strArr[i+1]
        //console.log("Actual Queen : "+actualQueen(queen));
        let actualqueen = queenPosition(queen);

        for(let j = i+1; j < strArr.length ; j++){
            let victim = queenPosition(queens[j]);
            range (actualqueen,victim);
        }
    }
  return strArr;
}


function queenPosition(queen){
    queen = queen.replace("(","");
    queen = queen.replace(")","");
    var position = queen.split(",");
    //console.log("position x: " + position[0]+" position y:"+position[1]);
    return position;
}



function range(q,victim){
    console.log(q +" - "+ victim);
    let i,j;

    if(q[0] === q[1]){
        i=0;
        j=0;

    }else{
        if(q[0] <= q[1]){
            i = 0;
            j = Math.abs(q[0] - q[1]);
        }else{
            j = 0;
            i = Math.abs(q[1] - q[0]);
        }
    }
    do {
            let beam = [i.toString(),j.toString()];
            
            console.log("("+q[0]+"-"+q[1]+";) ->atack in : ("+i+";"+j+")" );
            if(beam == victim){
                console.log("dead");
            }
            i++;
            j++;
    } while (i < 8 || j < 8);
}


   
// keep this function call here 
EightQueens(readline());   