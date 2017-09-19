// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructoring same code as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb');
    }
    console.log('successfully connected to mongodb');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'do it'}).then((result) => {
    //     console.log(result);
    // });

    // //deleteOne
    // db.collection('Todos').deleteOne({text: 'to do'}).then((result) => {
    //     console.log(result);
    // });
    //
    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({done: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('User').deleteMany({name: 'cocolino'}).then((result) => {
        console.log(result);
    })



    //db.close();
});