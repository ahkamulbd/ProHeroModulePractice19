function averageAssignment(assignment1, assignment2, assignment3) {
    var sumAssignment = assignment1 + assignment2 + assignment3;
    var average = sumAssignment / 3;
    return average;
}

var firstAssignment = 55;
var secondAssignment = 49;
var thirdAssignment = 60;

var averageOfAssignments = averageAssignment(firstAssignment, secondAssignment, thirdAssignment);

console.log(averageOfAssignments);
console.log(averageOfAssignments.toFixed(2));