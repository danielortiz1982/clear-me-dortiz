const mongoose = require('mongoose')
const database  = 'clear-me-api'
const appPort   = 27017
const dbConnection = `mongodb://danielortiz1982:l3inad1982@ds157895.mlab.com:57895/clear-me-api`

mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

//mongodb://<danielortiz1982>:<dbpassword>@ds157895.mlab.com:57895/clear-me-api