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

//Uc-3 Function
console.log("UC-3")
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        default:
            return 0;
    }
}
empHrs = getWorkingHours(empCheck);
empWage = empHrs * WAGE_PER_HOUR;
console.log("Hours : " + empHrs + "  Emp Wage : " + empWage);

//UC-4 Forloop
console.log("UC-4");

const NUM_OF_WORKING_DAYS = 20;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs = totalEmpHrs + getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Hours : " + totalEmpHrs + " Total Wage : " + empWage);

//UC-5 Calculate Wages till a condition of total working hours 160 or max day of 20is reached for month
console.log("UC-5");
totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs = totalEmpHrs + getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days : " + totalWorkingDays + " \t Total Hrs : " + totalEmpHrs + " \t Emp Wage : " + empWage);


//UC-6 Store the daily wage along with the total wage
console.log("Uc6");
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs + empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

empWage = calcDailyWage(totalEmpHrs);
console.log(empDailyWageArr);
console.log("Total Days : " + totalWorkingDays + " \t Total Hrs : " + totalEmpHrs + " \t Emp Wage : " + empWage);