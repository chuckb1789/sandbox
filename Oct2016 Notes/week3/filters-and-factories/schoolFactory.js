// Attach the school factory to the module.
// Here we are only passing one argument to the module, which means we want to get the module, not define it.
// If we passed two arguments here, it would try to overwrite or redefine the module.
angular.module("SchoolApp")
    // We define a factory very similarly to a controller.
    // We chain its definition onto the module, passing in the factory name, and factory function.
    .factory("SchoolFactory", schoolFactory);

function schoolFactory() {

    // define our school information
    var schoolInfo = {
        name: 'Teaching U',
        address: '123 Main St',
        city: 'Boulder',
        state: 'CO'
    }

    // define our student profiles
    var studentProfiles = [
        {
            name: 'Jane',
            startDate: new Date(2015, 01, 01),
            gpa: 3.5,
            courses: ['JS201', 'CS201', 'RU100'],
            advisor: 'Mr. Rogers'
        },
        {
            name: 'Joe',
            startDate: new Date(2014, 06, 01),
            gpa: 2.0,
            courses: ['JS303', 'RU300'],
            advisor: 'Ms. Rogers'
        },
        {
            name: 'Jill',
            startDate: new Date(2014, 01, 01),
            gpa: 4.0,
            courses: ['JS201', 'CS201', 'RU200'],
            advisor: 'Mr. Rogers'
        },
        {
            name: 'Bob',
            startDate: new Date(2016, 06, 01),
            gpa: 1.0,
            courses: ['SS101', 'CS102', 'RU100'],
            advisor: 'Ms. Rogers'
        }
    ];

    // define our teacher profiles
    var teacherProfiles = [
        {
            name: 'Mr. Rogers',
            teaches: 'JS101',
            salary: 1500
        },
        {
            name: 'Ms. Rogers',
            teaches: 'RU101',
            salary: 5000
        },
        {
            name: 'Professor X',
            teaches: 'CS102',
            salary: 2500
        }, 
    ];

    // Factories must ALWAYS return something.
    // When a controller injects a factory, it gains access to EXACTLY what the factory returns.
    // It is very common to return an object that has a bunch of properties that are the data we want to export from the factory.
    return {
        schoolInfo: schoolInfo,
        studentProfiles: studentProfiles,
        teacherProfiles: teacherProfiles
    };
}