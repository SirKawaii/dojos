function readline() {
    return ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"];
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
            diagonalBeam(actualqueen,victim);
            inverseDiagonalBeam(actualqueen,victim);
            horizontalBeam(actualqueen,victim);
            verticallBeam(actualqueen,victim);
        }      
    }
    //render(queens);
    //return strArr;
}


function queenPosition(queen){
    queen = queen.replace("(","");
    queen = queen.replace(")","");
    var position = queen.split(",");
    //console.log("position x: " + position[0]+" position y:"+position[1]);
    return position;
}

function diagonalBeam(q,victim){
    //console.log(q +" - "+ victim);
    let i = q[0];
    let j = q[1];
    while (i>0 && j>0) {
        i--;
        j--; 
    }
    do {
            let beam = [i,j]       
            if(areEquals(beam, victim)){
                console.log("Diagonal Beam: "+q+" ->atack to "+victim+" : ("+i+";"+j+")" );
            }
            i++;
            j++;
    } while (i < 8 || j < 8);
}

function inverseDiagonalBeam(q, victim){
    //console.log(q +" - "+ victim);
    let i = q[0];
    let j = q[1];

    while (i>0 && j<8) {
        i--;
        j++; 
    }
    do {
        //console.log("("+q[0]+"-"+q[1]+";) ->atack in : ("+i+";"+j+")" );
            let beam = [i,j]                    
            if(areEquals(beam, victim)){
                console.log("inverse Diagonal Beam: "+q+" ->atack to "+victim+" : ("+i+";"+j+")" );
            }
            i++;
            j--;
    } while (i < 8 && j >= 0);
}

function horizontalBeam(q, victim){
    let i = 0;
    let j = q[1];
    do {
            let beam = [i,j]                    
            if(areEquals(beam, victim)){
                console.log("horizontal beam: "+q+" ->atack to "+victim+" : ("+i+";"+j+")" );
            }
            i++;
    } while (i<8);
}

function verticallBeam(q, victim){
    let i = q[0];
    let j = 0;
    do {
            let beam = [i,j]                    
            if(areEquals(beam, victim)){
                console.log("vertical beam: "+q+" ->atack to "+victim+" : ("+i+";"+j+")" );
            }
            j++;
    } while (j<8);
}

function areEquals(A,B){
    let xIsTrue = false;
    let yIsTrue = false;

    if(A[0] == B[0]){
        xIsTrue = true;
    }

    if(A[1] == B[1]){
        yIsTrue = true;
    }

    if(xIsTrue && yIsTrue){
        return true;
    }
    else{
        return false;s
    }

}

function render(table){
    let line = "";
    let batleground =  Array(9).fill(Array(9));
}
   
// keep this function call here 
EightQueens(readline());   