// Async thing is old concept
// Promisses came later.

//File reading => is it difficult ? yes very much
//fs module
//readFile => nonblocking code 
//in readFile how will someone know when file reading completes? callback is the answer
//third parameter callback pass kardo, and jab complete hoga thab callback call ho jayega.

//redFileSync => Blocking code

//Before promises calback was used by developers, we have notes how callback works.
//  Below is a callback example

//Task : 1. Read the content of file from hello.txt
//2. Then create a new file named as backup.txt
//3. Copy the contents of hello file to backup file4. 
//4. delete the hello file
//whatever said earlier : below is a dry code synchronous version
//const file = fs.readFileSync(hello.txt);
//fs.createFile(backup)
//fs.writeFile(backup, file)
//fs.delete(hello.txt)

//Below is a async version
const { rejects } = require("assert");
const fs = require("fs");


// fs.readFile("./hello.txt", "utf-8", function(err, content) {    //callback 1
//     if(err){
//         console.log("Error in handling", err);
//     }else{
//         console.log("File reading success", content);

//         fs.writeFile("backup.txt", content, function(err){  //calllabck 2
//             if(err){
//                 console.log("Error in writting in Backup.txt", err);
//             }else{
//                 fs.unlink("./hello.txt", function(e){   //callback 3
//                     if(e){
//                         console.log("Error in deleting file");
//                     }else{
//                         console.log("File delete success");
//                     }
//                 })
//             }
//         })
//     }
// })

//above code is called callback hell, our code is asynchronous but code redability decreases.

// const fsv2 = require("fs/promises");
// const { resolve } = require("path");

// fsv2.readFile("./hello.txt", "utf-8")
// .then((content) => fsv2.writeFile("backup.txt", content))
// .then(()=> fsv2.unlink("./hello.txt"))
// .catch((e)=> console.log("Error 2", e));

//callback function example 2
function sum(a, b, cb){
    
    cb(a, b);
}

sum(10, 2, (a, b) => a + b);


//concepts learned:
//Callback concepts - Asynch and Sync - Promises

//Lets write custom promises (similar to Polyfills) using Promise
//Lets create promisified version of readFile, writeFile, unlink


//Purpose: Convert legacy code to promisified code.

function readFileWithPromise(filePath, encoding){
    return new Promise( (resolve, reject) => {
        fs.readFile(filePath, encoding, (err, content) => {
            if(err){
                reject("Error readFile");
            }else{
                resolve(content);
            }
        })
})
}

function writeFileWithPromise(filePath, data){
    return new Promise( (resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {
            if(err){
                reject(err)
            }else{
                resolve();
            }
        })
    }
    )
}

function unlinkWithPromise(filePath){
    return new Promise( (resolve, reject) => {
        fs.unlink(filePath, (e) =>{
            if(e){
                reject(e);
            }else{
                resolve();
            }
        })
    }
)
}

const result = writeFileWithPromise("./hello2.txt", "this is new www");

result
.then()
.catch();

console.log("Use custom Promise below");

readFileWithPromise("./hello2.txt", 'utf-8')
.then(content => writeFileWithPromise ("./backup2.txt", content))
.then(() => unlinkWithPromise("./hello2.txt"))
.catch(err => console.log("Error last", err));

//Above process called Promisification
//Basically callback function wale code ko romise ke upar wrap kar diya.

//Legacy code are with callback
//Now Promisification


// Async await are syntactic sugar
// Promises can be replicated, using try {} catch() {} finally {}
