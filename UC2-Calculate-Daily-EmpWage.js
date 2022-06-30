console.log("Wel Come to Employee Payroll ")
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
let empHrs = 0;
let empWage = 0;
let totalEmpHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;

//Uc-1 Check Employee is Present Or Absent
console.log("UC-1")
const IS_ABSENT = 0;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
}


//Uc-2 Switch case
console.log("UC-2");

switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage : " + empWage);