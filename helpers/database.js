const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
MongoClient.connect('mongodb+srv://udemyShoppingApp:OMQ7Qw6eU8gz1Ubf@cluster0.zmacg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client => {
        console.log('Connected');
        callback(client);
    })
    .catch(err => {
        console.log(err);
    });
};

module.exports = mongoConnect;
