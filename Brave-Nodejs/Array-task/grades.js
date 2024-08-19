// Students grades
const grades = [85, 92, 78, 88, 90, 67, 95];
const gradesCopy = [85, 92, 78, 88, 90, 67, 95];

// Add and Remove Grades
grades.push(40);
console.log(grades);
// using pop()
grades.pop();
console.log(grades);
// using unshift()
grades.unshift(40);
console.log(grades);
// using shift()
grades.shift();
console.log(grades);

// Modify the Array
// using splice() to insert
grades.splice(1, 0, 1);
console.log(grades);

// using splice() to remove
const removedElements = grades.splice(2, 4);
console.log(removedElements);

// using slice() to modify array
const slicedArray = grades.slice(2, 5);
console.log(slicedArray);

// Combine and Split Arrays
const gradeArray1 = [90, 50, 76];
const gradeArray2 = [60, 55, 46];
// using concat()
const combinedArray = gradeArray1.concat(gradeArray2);
console.log(combinedArray);

// using join()
const stringOfGrades = gradesCopy.join(", ");
console.log(stringOfGrades);

// Reverse and Sort Grades
// using reverse()
gradeArray1.reverse();
console.log(gradeArray1);

// using sort()
gradeArray1.sort();
console.log(gradeArray1);

// Iterate and Transform Grades
// using forEach()
gradesCopy.forEach((grade) => console.log(grade));

// using map()
const newGrades = gradesCopy.map((grade) => grade + 5);
console.log(newGrades);

// Filter and Analyze Grades
// using filter()
const passingGrades = gradesCopy.filter((grade) => grade > 70);
console.log(passingGrades);

// using reduce()
const total = gradesCopy.reduce((acc, grade) => acc + grade, 0);
console.log(total);

// using find()
const foundGrade = gradesCopy.find((grade) => grade === 88);
console.log(foundGrade);

// using findIndex()
const foundIndex = gradesCopy.findIndex((grade) => grade < 70);
console.log(foundIndex);

// using some()
const below60 = gradesCopy.some((grade) => grade < 60);
console.log(below60);

// using every()
const above50 = gradesCopy.every((grade) => grade > 50);
console.log(above50);

//using include()
console.log(gradesCopy.includes(46));
