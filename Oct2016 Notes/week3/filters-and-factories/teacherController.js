// Attach the teacher controller to the module.
// Here we are only passing one argument to the module, which means we want to get the module, not define it.
// If we passed two arguments here, it would try to overwrite or redefine the module.
angular.module("SchoolApp")
    .controller("TeacherController", teacherCtrl);

// Use this to inject controller level dependencies.
// In our case, we want the factory accessible in the controller, so we include it in the dependency/injector array.
teacherCtrl.$inject = ['SchoolFactory'];

// Make sure you also include the factory as a parameter to the controller.
// This parameter will be how you access what you returned in the factory.
function teacherCtrl(SchoolFactory) {
    var tCtrl = this;

    tCtrl.greeting = "Hello class!";

    // Get the school info from the factory.
    tCtrl.school = SchoolFactory.schoolInfo; 

    // Get the teacher profiles from the factory and assign that data to a property on the controller.
    tCtrl.teacherProfiles = SchoolFactory.teacherProfiles;

    tCtrl.getAdvisees = function(teacher) {
        var advisees = [];
        SchoolFactory.studentProfiles.forEach(function(student, index, array) {
            if(teacher.name === student.advisor) {
                advisees.push(student);
            }
        });
        return advisees;
    }
}