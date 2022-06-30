class EmployeePayRollRegex {
    //property
    id;
    salary;
    gender;

    //constructor

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is Incorrect";
    }

    //method
    toString() {
        return "id=" + this.id + ",name='" + this.name + ",salary=" + this.salary + "," + "gender=" + this.gender;
    }
}

try {
    let employeePayRollRegex = new EmployeePayRollRegex(1, "Rohit", 50000, "M");
    console.log(employeePayRollRegex.toString());
    let newEmployeePayRollRegex = new EmployeePayRollRegex(2, "Priti", 35000, "F");
    console.log(newEmployeePayRollRegex.toString());
} catch (e) {
    console.error(e);
}