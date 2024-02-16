// There are 4 ways to create object in Javascript

// Using literals
var patient = { "name": "Henrique", "Age": 30 };
patient.Admit = function () { console.log("Henrique admitted!") };

// Using Object.Create
var patientObj = Object.create(patient);
patientObj.Age = 32;

// Using constuctor
function Patient(_name, _age) {
    this.name = _name;
    this.Age = _age;
    this.Admit = function () { };
}
var patientInstance = new Patient("Benedict", 40);

// Using ES6 class
class PatientClass {
    constructor(_name, _age) {
        this.name = _name;
        this.Age = _age;
        this.Admit = function () { };
    }
}