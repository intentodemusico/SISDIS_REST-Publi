const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://Admin:Informatica@rmi-shard-00-00-p8iu2.mongodb.net:27017,rmi-shard-00-01-p8iu2.mongodb.net:27017,rmi-shard-00-02-p8iu2.mongodb.net:27017/test?ssl=true&replicaSet=RMI-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Base de datos corriendo');
});