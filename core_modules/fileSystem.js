// Three types of modules: built-in modules, modules created by us, third party modules(installed using npm)
// Node core/ built-in module: File Sysyem

// const fs = require('fs')

//********************************    SYNCHRONOUS    *********************************

//--------- 1. CREATING A FOLDER ----------
// fs.mkdirSync('SYNC')

//--------- 2. CREATING A FILE -------------
// fs.writeFileSync('demo.txt','I have created this file from scratch!')

//--------- 3. READING A FILE DATA FROM CONSOLE --------------
//Buffer - Stores raw binary data (in bytes) | stores data temporarily (if we don't write utf-8 or .toString)

// var myfile = fs.readFileSync('demo.txt','utf-8');
// console.log(myfile)

// OR

// var myfile = fs.readFileSync('demo.txt');
// console.log(myfile.toString())


//-----------  4. REPLACING FILE CONTENT ---------------
//A)*replace some part of file content using replace function

// var myfile = fs.readFileSync('demo.txt','utf-8');
// myfile = myfile.replace('I have created this file','I replaced the file content that I created')
// fs.writeFileSync('demo.txt',myfile)
// console.log(myfile)


//B)*Overwrite entire file content 

// fs.writeFileSync('demo.txt','I have overwritten the file content!');
// var myfile = fs.readFileSync('demo.txt','utf-8');
// console.log(myfile)

//------------- 5. APPENDING FILE CONTENT ---------------
// fs.appendFileSync('demo.txt',' I appended this sentence in the file.')
// var myfile = fs.readFileSync('demo.txt','utf-8');
// console.log(myfile)

// --------------- 6. RENAME THE FILE ------------------
// fs.renameSync('demo.txt','newdemo.txt')

// ----------------- 7. DELETE THE FILE ----------------
// fs.unlinkSync('newdemo.txt');

// ----------------- 8. DELETE THE FOLDER --------------
// fs.rmdirSync('SYNC')

//********************************    ASYNCHRONOUS    *********************************

/* callback function:   > A callback is a function passed as a parameter to another function
                        > It executes in the background while the rest of the code runs
 */

//------------ 1. CREATING A FOLDER ------------
// fs.mkdir('studyNotes',(err)=> {
//     if(err) throw err
// });
//---------- 2. CREATING A FILE ----------------
// fs.writeFile('myfile.txt','I created the file and inserted this text.',(err)=> {
//     if(err) throw err
//     console.log('A file is created!');
// })
// console.log("Hello"); //prints first in console  (Checking the asynchronous behaviour)

//--------- 3. READING A FILE DATA FROM CONSOLE ------------
// fs.readFile('myfile.txt','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

//------------ 4. REPLACING FILE CONTENT --------------
// replaces a part of file content
// fs.readFile('myfile.txt','utf-8',(err,data)=>{
//         if(err) throw err

//         data = data.replace('I created','I replaced')
//         fs.writeFile('myfile.txt',data,(err)=> console.log('Some file content has been relpaced!'));

//     })

//                              OR

// overwrites entire file content
// fs.writeFile('myfile.txt','I have overwritten entire file content.',(err)=> {
//     if(err) throw err
//     console.log('Entire file content has been overwritted!');
// })

//----------- 5. APPENDING FILE CONTENT -----------
// fs.appendFile('myfile.txt', ' This sentence is appended to the already existing sentence.', (err) => {
//     if (err) throw err;
//     console.log('Content appended successfully!')
// })

// ---------- 6. RENAME THE FILE ---------------
// fs.rename('myfile.txt', 'yourfile.txt', (err) => {
//     if (err) throw err;
//     console.log('File Renamed successfully!')
// })

// -------------- 7. DELETE THE FILE ----------------
// fs.unlink('yourfile.txt', (err)=>{
//     if(err) throw err;
//     console.log('File deleted successfully')
// });

// ----------- 8. DELETE THE FOLDER ------------------
// fs.rmdir('ASYNC', (err)=>{
//     if(err) throw err;
//     console.log('Folder deleted successfully!')
// })



// MORE USECASES
//*we can also transfer data stored in variable to a file
//*we can also transfer data from one file to another => 1. read from file1 2. write to file2



