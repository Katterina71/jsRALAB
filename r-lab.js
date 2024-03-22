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

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26"; // Baseline for change
// Splitting the CSV data into rows at each newline
let rows = csvString.split("\n");

let arrayOfRows = []; // Array for collect  csvStringData

//Additing Data to new array arrayOfRows
for (let i = 0; i < rows.length; i++) {
  let column = rows[i].split(",");
  arrayOfRows.push(column);
}
// Logging the cells 
console.log(`\nPart 2: Expanding Functionality: \n ${arrayOfRows}`);

//Part 3: Transforming Data

const arrayKeys = arrayOfRows[0]; // Array value to creat keys for Object;
const objArray = []; // New Array for Object;

//Additing elements from arrayOfRows to transforming Data to new Array 
for ( let i = 0; i < arrayOfRows.length; i++) {
    const objCSV = {};
    for (let j = 0; j < arrayKeys.length; j++ ) {
        objCSV[arrayKeys[j].toLowerCase()] = arrayOfRows[i][j];    
    }
    objArray.push(objCSV);  
}
// Remove first element with headers
objArray.shift(); 

// Logging the Array 
console.log("\n Transforming Data \n");
console.log(objArray);


//Part 4: Sorting and Manipulating Data

//Sorted array
objArray.sort((a, b) => a.id - b.id);
// Remove the last element from the sorted array.
objArray.pop();
console.log("\n Sorting Data in Array: \n");
console.log(objArray);

// Insert the following object at index 1:

let addArray = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
objArray.splice(1,0,addArray);
//Sorted array
objArray.sort((a, b) => a.id - b.id);


// Add the following object to the end of the array:
addArray = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
objArray.push(addArray);
console.log("\n Remove and add new rows \n");
console.log(objArray);

//Calculate the average age of the group
let totalAges = 0; // Number value for sum of ages for full Object
let averageAge = 0; // Number value for average Age for full Object


    for (let i=0; i<objArray.length; i++) {
        // Convert age to int from string and accumulate
        totalAges += parseInt(objArray[i].age);  
    }

// Calculate average age
averageAge = Math.round(totalAges/(objArray.length)); 
console.log(`\nCalculate the average age of the group:  \n ${averageAge}`);

//Part 5: Full Circle
let arrayCSVStringCells = [];
let arrayCSVStringRows = [];

// Get Keys for Header for new Array;
let arrayKey = Object.keys(objArray[0]); 


// Transform the first element to uppercase and Capitalize the first letter of other items

let header = arrayKey.map((item, index) => {
  // Uppercase the first item
  if (index === 0) {
    return item.toUpperCase();
  } else {
    // Capitalize the first letter of other items
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
  }
});


//Add all values from ObjectArray to Array with Cells and Rows
for (let i=0; i<objArray.length; i++){
  // Object.entries - static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
for (const [key, value] of Object.entries(objArray[i])) {
  // Additing cell value in arrayCSVStringCell by keys
  arrayCSVStringCells.push(value);  
}
// Additing arrayCSVStringCell like a new row every time
arrayCSVStringRows.push(arrayCSVStringCells);
arrayCSVStringCells = [];
}


// Add the first row with headers
arrayCSVStringRows.unshift(header);

// console.log(arrayCSVStringRows);  // Check array of rows and cells

// Add all values in one string
let stringCSV = ""; // NEW CSV Data - String value

//Additing each element to string array
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

