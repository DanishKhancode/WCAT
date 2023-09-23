let fs = require("fs");
let inputArr = process.argv.slice(2);
let filesArr = [];
let optionArray = [];
for (let i = 0; i < inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") {
        optionArray.push(inputArr[i]);
    }else{
    filesArr.push(inputArr[i]);
    }
}

//check if all the file are present or not
 
for (let i = 0; i < filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if (!doesExist) {
        console.log("file does not exist");
        // return;
        process.exit();
    }
}

// content read and appending start
let content = "";
for (let i = 0; i < filesArr.length; i++){
    let fileContnet = fs.readFileSync(filesArr[i]);
    content += fileContnet + "\r\n";
}
// console.log(content);

let contentArr = content.split("\r\n");
// console.log(contentArr);

//check if -s is prenet or not

let isPresent = optionArray.includes("-s");
if (isPresent) {
    for (let i = 1; i < contentArr.length; i++){
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    // console.log(contentArr);
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++){
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
    // console.log(tempArr);
}

//if both -n -b are present or not

let indexOFn = optionArray.indexOf("-n");
let indexOFb = optionArray.indexOf("-b");
let finalOption = "";
if (indexOFn != -1 && indexOFn != -1) {
    if (indexOFn < indexOFb) {
        finalOption = "-n";
    } else {
        finalOption = "-b";
   }
} else {
    if (indexOFn != -1) {
        finalOption = "-n";
    } else if(indexOFb !=-1) {
        finalOption = "-b";
    }
}
if (finalOption == "-n") {
    modifyContentByN();
} else if (finalOption == "-b") {
    modifyContentByB();
}
// }
function modifyContentByN() {
    for (let i = 0; i < contentArr.length; i++){
        contentArr[i] = (i + 1) + ")" + contentArr[i];
    }
}
console.log(contentArr);
function modifyContentByB() {
    let count = 1;
    for (let i = 0; i < contentArr.length; i++){
        if (contentArr[i] != "") {
            
            contentArr[i] = count + ")" + contentArr[i];
            count++;
        }
    }
}
// console.log(contentArr);