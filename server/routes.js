const controller = require('./controllers');
module.exports = (app) => {
    app
        .get('/api/tasks/inner', controller.getAllInnerTasks)
        .get('/api/tasks/outer', controller.getAllOuterTasks)
        .get('/api/tasks/inner/:id', controller.getOneInnerTask)
        .get('/api/tasks/outer/:id', controller.getOneOuterTask)
        .post('/api/tasks/inner/:id', controller.createInnerTask)
        .post('/api/tasks/outer', controller.createOuterTask)
        .put('/api/tasks/inner/:id', controller.updateInnerTask)
        .put('/api/tasks/outer/:id', controller.updateOuterTask)
        .delete('/api/tasks/inner/:id', controller.deleteInnerTask)
        .delete('/api/tasks/outer/:id', controller.deleteOuterTask)
}