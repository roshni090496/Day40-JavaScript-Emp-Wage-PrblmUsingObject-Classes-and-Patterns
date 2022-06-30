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

//Array Helper Function
//UC-7A Calculate total wage using Array forEach traversal or reduce method 
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage = totalEmpWage + dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days : " + totalWorkingDays + " \t Total Hrs : " + totalEmpHrs + " \t Emp Wage : " + totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log(" Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));


//UC-7B Show the day along with daily wage using Array map helper function
console.log("UC-7B");
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map : ");
console.log(mapDayWithWageArr);

//UC-7C Show Days when full time wage of 160 were earned using filter function
console.log("UC-7C")
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Daily Wage Filter when Fulltime Earned");
console.log(fullDayWageArr);

// UC-7D Find the first occerance when fulltime wage was earned using find function
console.log("UC-7D")
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("First time Fulltime wage was earned on Day : " + mapDayWithWageArr.find(findFullTimeWage));

// UC- 7E  Check if Every Element of full time is truely holding full time wage
console.log("UC-7E")
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("Check all element have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));

// UC-7F Check if there is any part time wage
console.log("UC-7F")
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check If Any PartTime Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC-7G Find the number of days the employee worked
console.log("UC-7G")
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days Emp Worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));


// UC-8 Store the day and the daily wage long with the total wage
console.log("UC-8")
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}
console.log(empDailyWageMap);
console.log("Emp Wage Map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));