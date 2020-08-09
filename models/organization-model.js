const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
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
})

const OrganizationModel = mongoose.model('Organization', organizationSchema)

module.exports = OrganizationModel