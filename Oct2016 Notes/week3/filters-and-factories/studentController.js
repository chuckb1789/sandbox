// Attach the student controller to the module.
// Here we are only passing one argument to the module, which means we want to get the module, not define it.
// If we passed two arguments here, it would try to overwrite or redefine the module.
angular.module("SchoolApp")
    .controller("StudentController", studentCtrl);

// Use this to inject controller level dependencies.
// In our case, we want the factory accessible in the controller, so we include it in the dependency/injector array.
studentCtrl.$inject = ['SchoolFactory'];

// Make sure you also include the factory as a parameter to the controller.
// This parameter will be how you access what you returned in the factory.
function studentCtrl(SchoolFactory) {
    var sCtrl = this;

    sCtrl.greeting = "Yo!";

    // Get the school info from the factory.
    sCtrl.school = SchoolFactory.schoolInfo; 

    // Get the student profiles from the factory and assign that data to a property on the controller.
    sCtrl.studentProfiles = SchoolFactory.studentProfiles;

    sCtrl.grade = 'pass';
    sCtrl.gradeFilter = function(element, index, array) {
        if(sCtrl.grade === 'pass') {
            return element.gpa >= 2;
        } else if(sCtrl.grade === 'fail') {
            return element.gpa < 2;
        } else {
            return true;
        }
    }
}