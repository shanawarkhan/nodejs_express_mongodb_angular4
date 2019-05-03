var cluster = require('cluster');
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://0.0.0.0:27017/imports', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Code to run if we're in the master process
if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for dying workers
    cluster.on('exit', function (worker) {

        // Replace the dead worker, we're not sentimental
        console.log('Worker %d died :(', worker.id);
        cluster.fork();

    });

// Code to run if we're in a worker process
} else {
// Get Books
router.get('/books', (req, res) => {
    connection((db) => {
        db.collection('books')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response );
            })
            .catch((err) => {
                sendError(err, res);
            });
            console.log('Request to worker %d', cluster.worker.id);

    });
});

// Get Restaurants
router.get('/restaurants', (req, res) => {
    connection((db) => {
        db.collection('restaurants')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
            console.log('Request to worker %d', cluster.worker.id);
    });
});
}
module.exports = router;