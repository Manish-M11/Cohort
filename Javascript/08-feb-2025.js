//start pattern challenge
let row = 7, col = 4, k =0;

// for (let i = 1; i <= row; i++){
//     i <= 4 ? k++ : k--;
//     for(let j = 1; j <= col; j++){
//         if(j <= k){
//         process.stdout.write("*"); 
//         }else{
//         process.stdout.write(" ");
//         }
//     }
//     console.log("");
// }

// let n = 7;

// for (let i = 1; i <= 7; i++){

//     i <= 4 ? k++ : k--;

//     for(let j = 1; j <= 4; j++){
//         if(j <= k){
//         // process.stdout.write("*"); 
//         console.log("*");
//         console.clear();
//         }else{
//         // process.stdout.write("");
//         console.log("");
//         console.clear();
//         }
//     }
//     console.log("");
// }

function invertedMountain(n) {
    for (let i = 1; i <= 4; i++){
      for (let j = 1; j <= 4; j++ ){
        if(j >= i)
        {
          process.stdout.write("*");
        }else{
          process.stdout.write("");
        }
      }
      console.log("")
    }
  }

  invertedMountain(4);