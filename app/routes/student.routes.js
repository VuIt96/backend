module.exports = (app) => {
    const student = require('../controllers/student.controller.js');

    // Create a new student
    app.post('/student', student.create);

    // create multi for dev
    app.post('/student-multi', student.createMulti);

    // Retrieve all student
    app.get('/student', student.findAll);

    // Retrieve a single student with studentId
    app.get('/student/:studentId', student.findOne);

    // Update a student with studentId
    app.put('/student/:studentId', student.update);

    // Delete a student with studentId
    app.delete('/student/:studentId', student.delete);
}