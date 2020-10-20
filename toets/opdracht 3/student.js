function Student(naam, studentId) {
  this.name = naam;
  this.id = studentId;
  this.class = [];
  this.cijfers = [];


  this.changeclass = function (class) {
    this.class = class;
    console.log("Student belongs in class: ".class);
  };
  this.getClass = function () {
    return this.klas;
  };

// 
// 

  this.changeName = function (changedName) {
    this.name = changedName;
    console.log("Student name changed to: ".changedNamed);
  };
  this.getName = function () {
    return this.name;
  };

//
//

  this.changeID = function (changedID) {
    this.id = changedID;
    console.log("ID changed to: ".changedID);
  };
  this.getId = function () {
    return this.id;
  };

//
//



  this.changeCijfer = function (changedCijfer) {
    this.cijfers = nieuweArray;
    this.cijfers = changedCijfer;
    console.log("Cijfer changed to: ".changedCijfer);
  };
  this.getCijfers = function () {
    return this.cijfers;
  };

}

let student = new Student("myName", "0001", "MD2A");

// Hier moet je de variabele klas een waarde geven bijvoorbeeld MD2
console.log(Student.klas.call(student));
