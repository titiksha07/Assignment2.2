class StudentDetails {
    name: string;
    roll: number;
    constructor(studentName:string,rollNumber:number){
        this.name = studentName;
        this.roll = rollNumber;
    }
    details(){
      return `Student Details are ${this.name} and roll number is ${this.roll}`;
    }
}
let getDetails = new StudentDetails("Abracadabra",7);
console.log(getDetails.details);