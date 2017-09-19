// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructoring same code as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb');
    }
    console.log('successfully connected to mongodb');

    // db.collection('Todos').find({done: false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 3));
    // }, (err) => {
    //     console.log('Unable to fetch Todos: ', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count: ' + count);
    // }, (err) => {
    //     console.log('Unable to fetch Todos: ', err);
    // });

    db.collection('Users').find({name: 'cocolino'})
        .toArray()
        .then((docs) => {
        console.log(JSON.stringify(docs, undefined, 3));
    }, (err) => {
        console.log('Unable to fetch User: ', err);
    });

    //db.close();
});