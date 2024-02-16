// Every JavaScript object has a prototype object, it is provided by the runtime
// Javascript uses object inheritance or prototypica inheritance
// Inheitance is done by using prototype object.

function Employee(_name){
    this.Name = _name;
    this.doWork = function(){ console.log(`${this.Name} is working`) }
    this.attendance = function(){console.log(`${this.Name}'s attendance taken!`)}
}

function Manager(_name){
    this.Name = _name;
    this.doWork = function(){ console.log(`${this.Name} manages the team`) }
}

var empl = new Employee("Kristein");

// ! Manager prototype object referencing to Employee object to achieve inhritance
Manager.prototype = empl;

var mangr = new Manager("Angelline");
mangr.attendance(); // Base class method
mangr.doWork(); // Overridden method
mangr.Name; // object variable