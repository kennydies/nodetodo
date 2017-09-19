// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructoring same code as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongodb');
    }
    console.log('successfully connected to mongodb');

    // db.collection('Todos').insertOne({
    //
    // }, (err, result) => {
    //     if(err){
    //         return console.log('unable to insert todos: ', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 3));
    // });

    // db.collection('Users').insertOne({
    //     name: 'cocolino',
    //     age: 25,
    //     location: 'cocolino-bay'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('error', err)
    //     }
    //     console.log('successfully stored user')
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    db.close();
});