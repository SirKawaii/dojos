function readline() {
    return ["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)","(5,4)"];
}



function EightQueens(strArr) { 

    let queens = strArr;

    for(i=0; i < strArr.length - 1 ;i++){
        let queen = strArr[i];
        let nextqueen = strArr[i+1]
        //console.log("Actual Queen : "+actualQueen(queen));
        let actualqueen = queenPosition(queen);

        for(let j = i+1; j < strArr.length - 1 ; j++){
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
    //console.log(q +" - "+ v);

    //FIRST ATACK!
    for(let x = q[0] ; x < 8 ; x++){
    
        for(let y = q[1] ; x < 8 ; y++){
            let beam = [x,y] ;
            if( beam === victim){          
                console.log("beam:" +beam+" as equal to "+v);
            }
        }
    }

    //sECOND ATAFCK!

    for(let y = q[1] ; y < 8 ; y++){
        let beam = [y,y] ;
        if( beam === victim){          
            console.log("beam:" +beam+" as equal to "+v);
        }
    }
}


   
// keep this function call here 
EightQueens(readline());   