angular.module('Students',[])
    .controller('StudentController', studentFunction)
    .controller('BuildingController', myBuildingThingFunctionStuff);

function studentFunction() {
    var sCtrl = this;

    this.greeting = 'Hello';
    // call $http and get all the student from the database
    sCtrl.students = [
        {name:'Kurt', address:'123 Main'}, 
        {name:'Jeff', address: '345 17th'},
        {name:'Tyler', address: '000  hello rd'}
        ];
    sCtrl.addStudent = function() {
        sCtrl.students.push({name:sCtrl.name, address:sCtrl.address});
        // call $http and update our students in the database
        sCtrl.name = ''
        sCtrl.address = ''
    }
}

function myBuildingThingFunctionStuff() {

}



