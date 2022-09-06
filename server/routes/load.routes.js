const LoadController = require('../controllers/load.controller');

module.exports = (app) => {
    app.post('/api/loads', LoadController.createLoad);
    app.get('/api/loads', LoadController.getAllLoads);
    app.get('/api/loads/:id', LoadController.getALoad);
    app.delete('api/loads/:id', LoadController.deleteLoad);
    app.put('/api/loads/:id', LoadController.updateLoad);
}