let theString= "Pico pal que lee";

function FirstReverse(str) { 

    var alRevez = "";
   
    for(var i = str.length ; i >= 0 ; i--){

       // console.log(str.charAt(i));

        alRevez = alRevez + str.charAt(i);

    }



    // code goes here  
    return console.log(alRevez); 
           
  }
     
  // keep this function call h, ere 
  FirstReverse(theString+"CTM"); 