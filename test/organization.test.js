process.env.NODE_ENV = 'test'
let organizationSchema = require('../models/organization-model')
let chai = require('chai')
let chaiHttp = require('chai-http')
const server = require("../server")
let should = chai.should()
chai.use(chaiHttp)

describe('GET Organizations test', () => {

    beforeEach( done => {
        organizationSchema.deleteMany({}, err => {
            done()
        })
    })

    it('Should GET all organizations', done => {
        chai.request(server)
        .get('/api/v1/organization/')
        .end( (err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            done()
        })
    })
})

describe('POST new test', () => {
    it('should POST a new organization', done => {

        let organization = {
            "name": "Clear me",
            "startDate": "2001-06-12T00:00:00.000Z",
            "employeesCount": 300,
            "organizationType": "public"
        }

        chai.request(server)
        .post('/api/v1/organization/new/')
        .send(organization)
        .end( (err, res) => {
            res.should.have.status(201)
            res.should.be.a('object')
            done()
        })
    })
})

describe('GET search test', () => {
    it('should return search response', done => {
        
        let searchQuery = {
            "search": {
                "type": "status",
                "query": "public"
            }
        }

        let organization = new organizationSchema({"name": "Clear me", "startDate": "2001-06-12T00:00:00.000Z", "employeesCount": 300, "organizationType": "public"})

        organization.save( (err, org) => {
            chai.request(server)
            .get('/api/v1/organization/search/')
            .send(searchQuery)
            .end( (err, res) => {
                res.should.have.status(200)
                res.should.be.a('object')
                done()
            })
        })
    })
})