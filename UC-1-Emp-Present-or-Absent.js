console.log("Wel Come to Employee Payroll ")
let empCheck = Math.floor(Math.random() * 10) % 3;

//Uc-1 Check Employee is Present Or Absent
console.log("UC-1")
const IS_ABSENT = 0;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
}