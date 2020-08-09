const assert = require('assert')
const organizationSchema = require('../models/organization-model')

describe("create organization",() => {
    
    it('should create new organization', done => {
        const singleOrganizationSchema = new organizationSchema({name : "test organization", startDate: '2020-08-08', employeesCount: 327, organizationType: 'public'})
        singleOrganizationSchema.save()
            .then(() => {
                assert(!singleOrganizationSchema.isNew)
                done()
            })
    })
})