class EmployeePayRollUc12
// property
{
    id;
    salary;
    gender;
    startDate;

    //constructor

    constructor(...parans) {
        this.id = parans[0];
        this.name = parans[1];
        this.salary = parans[2];
        this.gender = parans[3];
        this.startDate = parans[4];
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + "," +
            " gender = " + this.gender + ", startDate = " + empDate;
    }
}
let newEmployeePayRollUc12 = new EmployeePayRollUc12(1, "Rohit", 50000, "M", new Date());
console.log(newEmployeePayRollUc12.toString());
let employeePayRollUc12 = new EmployeePayRollUc12(2, "Priti", 33000, "F", new Date());
console.log(employeePayRollUc12.toString());