const mongoose = require('mongoose')
mongoose.Promise = global.Promise

before( done => {
    mongoose.connect('mongodb://localhost/clear-me-test', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    mongoose.connection
        .once('open',() => done())
        .on('error', error => console.warn('warning',error))
});

beforeEach( done => {
    mongoose.connection.collections.organizations.drop( () => done() )
})