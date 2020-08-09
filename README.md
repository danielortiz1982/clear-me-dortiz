# Clear me API Coding Exercise

> Created by: Daniel Ortiz

## Dependencies
* [Nodejs LTS](https://nodejs.org/en/)
* [NPM](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/try/download/community)
* [Mongoose](https://mongoosejs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)

### Install Nodejs & NPM for Windows, OSX and Linux
[https://nodejs.org](https://nodejs.org/en/)

##### Install the Nodejs Dependencies
    npm install

##### Start the Node server 
    npm run server

##### Run test
    npm test

##### You can now view a working demo when you visit the URL below 
    http://localhost:3500/

## Database Schema

##### Model name
    organizationSchema

##### Model structure
```
{
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    employeesCount: {
        type: Number,
        required: true
    },
    organizationType: {
        type: String,
        required: true
    }
}
```

##### Sample Data
    ./data/data.json

## API Endpoints

### POST
##### Add new organization
    /api/v1/organization/new/

### GET 
##### Get all organizations
    /api/v1/organization/

### GET
##### Get organization by _id
    /api/v1/organization/single/:id/

## GET
##### Get search query
    /api/v1/organization/search/

##### Search criteria
An object needs to be passed to the req.body with the given search criteria. (Please keep in mind, search criteria is case sensitive)

##### Sample search object
```
{
    "search": {
        "type": "name",
        "query": "Clear me"
    }
}
```
```
{
    "search": {
        "type": "date",
        "query": "2020-08-09"
    }
}
```
```
{
    "search": {
        "type": "count",
        "query": "300"
    }
}
```

##### Required types
    name, date, count, status

### DELETE
##### Delete organization by _id
    /api/v1/organization/delete/:id/

### PUT
##### Edit organization by _id
    /api/v1/organization/update/:id/

