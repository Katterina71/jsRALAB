// Working with Data Collections

// ALAB 308.3.1: Practical Loops
// Feeling Loopy

//   console.log('Part 3');

// const CSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26,";
// let cell = "";
// let rowTable = "";

// for (let i=0; i <CSV.length; i++) {

//    if (CSV[i] !== ",") {
//       cell = cell + CSV[i];
//    } 

//     if (CSV[i] === ",") {
//         rowTable = rowTable + cell + " ";
//         cell= "";
      
//     }

//     if (CSV[i] === "\n") {
//       rowTable = rowTable + cell;
//       console.log(rowTable);
//       rowTable="";
//       cell= ""; 
//     }

//   if (i === CSV.length-1 ) {
//     rowTable = rowTable + cell;
//      console.log(rowTable);
//   }  

// }

// Part 1: Refactoring Old Code


const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Splitting the CSV data into rows at each newline
const rowsCSV = csvData.split('\n');

// Iterating over each row
for (let rowCSV of rowsCSV) {
// Splitting each row into cells at each comma
  const cells = rowCSV.split(',');
// Logging the cells
  console.log(cells[0], cells[1], cells[2], cells[3]);
}

  // Part 2: Refactoring Old Code

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";
let rows = csvString.split("\n");
let arrayOfRows = [];

for (let i = 0; i < rows.length; i++) {
  let column = rows[i].split(",");
  arrayOfRows.push(column);
}

console.log(arrayOfRows);

//Part 3: Transforming Data

const arrayKeys = arrayOfRows[0];
const objArray = [];

for ( let i = 0; i < arrayOfRows.length; i++) {
    const objCSV = {};
    for (let j = 0; j < arrayKeys.length; j++ ) {
        objCSV[arrayKeys[j].toLowerCase()] = arrayOfRows[i][j];    
    }
    objArray.push(objCSV);  
}
console.log(objArray);


//Part 4: Sorting and Manipulating Data


//Sorted array
objArray.sort((a, b) => a.id - b.id);

// Remove the last element from the sorted array.
objArray.pop();
console.log(objArray);

// Insert the following object at index 1:

let addArray = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
objArray.splice(1,0,addArray);
//Sorted array
objArray.sort((a, b) => a.id - b.id);

// console.log(objArray);

// Add the following object to the end of the array:
addArray = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
objArray.push(addArray);
console.log(objArray);

//Calculate the average age of the group
let totalAges = 0;
let averageAge = 0;


    for (let i=1; i<objArray.length; i++) {
        totalAges += parseInt(objArray[i].age);  // Convert age to int and accumulate
    }

// Calculate average age
averageAge = Math.round(totalAges/(objArray.length-1)); 
console.log(`\nCalculate the average age of the group:  \n ${averageAge}`);

//Part 5: Full Circle
let arrayCSVStringCells = [];
let arrayCSVStringRows = [];

//Add all values from ObjectArray to Array with Cells and Rows

for (let i=0; i<objArray.length; i++){
for (const [key, value] of Object.entries(objArray[i])) {
  arrayCSVStringCells.push(value);
}
arrayCSVStringRows.push(arrayCSVStringCells);
arrayCSVStringCells = [];
}

// console.log(arrayCSVStringRows); // Check array of rows and cells

// Add all values in one string
let stringCSV = "";


for (let i = 0; i < arrayCSVStringRows.length; i++) {
  for (let j=0; j<arrayCSVStringRows[i].length; j++) {
      if (j === arrayCSVStringRows[i].length-1){
        stringCSV +=arrayCSVStringRows[i][j];
        continue;
      }
      stringCSV +=arrayCSVStringRows[i][j]+',';
  }
  if (i === arrayCSVStringRows.length-1) {
    continue;
  }
  stringCSV +="\n";
}

console.log(`\n Part 5: Full Circle transform the final set of data back into CSV format: \n ${stringCSV}`);
console.log(`\n Original CSV example data: \n ${csvString}`);

