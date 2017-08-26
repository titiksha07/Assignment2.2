var StudentDetails = (function () {
    function StudentDetails(studentName, rollNumber) {
        this.name = studentName;
        this.roll = rollNumber;
    }
    StudentDetails.prototype.details = function () {
        return "Student Details are " + this.name + " and roll number is " + this.roll;
    };
    return StudentDetails;
}());
var getDetails = new StudentDetails("Abracadabra", 7);
console.log(getDetails.details);
