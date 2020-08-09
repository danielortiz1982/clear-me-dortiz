const express = require('express')
OrganizationRouter = new express.Router()
const endpoint = '/api/v1/organization'
const OrganizationModel = require('../models/organization-model')

// POST new organization
OrganizationRouter.post(`${endpoint}/new/`, async (req, res) => {
    const organization = new OrganizationModel(req.body)
    try{
        await organization.save()
        res.status(201).send(organization).end()
    }catch(err){
        console.error(err)
        res.status(400).send(err).end()
    }
})

// GET search query
// {
//     "search": {
//         "type": "",
//         "query": ""
//     }
// }
OrganizationRouter.get(`${endpoint}/search/`, async (req, res) => {

    const searchQuery = req.body
    let organizationSearch

    switch(searchQuery.search.type){
        case 'name':
            organizationSearch = await OrganizationModel.find({'name': `${searchQuery.search.query}`})
            organizationSearch.length === 0 ? res.status(200).send(`No match found for name search: ${searchQuery.search.query}`) : res.status(200).send(organizationSearch).end()
            break

        case 'date':
            organizationSearch = await OrganizationModel.find({'startDate': new Date(`${searchQuery.search.query}T00:00:00.000Z`)})
            organizationSearch.length === 0 ? res.status(200).send(`No match found for date search: ${searchQuery.search.query}`) : res.status(200).send(organizationSearch).end()
            break

        case 'count':
            organizationSearch = await OrganizationModel.find({'employeesCount': `${searchQuery.search.query}`})
            organizationSearch.length === 0 ? res.status(200).send(`No match found for count search: ${searchQuery.search.query}`) : res.status(200).send(organizationSearch).end()
            break

        case 'status':
            organizationSearch = await OrganizationModel.find({'organizationType': `${searchQuery.search.query}`})
            organizationSearch.length === 0 ? res.status(200).send(`No match found for status search: ${searchQuery.search.query}`) : res.status(200).send(organizationSearch).end()
            break

        default:
            res.send('Nothing found, please make sure your search type is the following (name, date, count, status)')
    }

})

// GET all organizations
OrganizationRouter.get(`${endpoint}/`, async (req, res) => {
    try{
        const organizations = await OrganizationModel.find()
        res.status(200).send(organizations).end()
    }catch(err){
        console.error(err)
        res.status(400).send(err).end()
    }
})

// GET organization by _id
OrganizationRouter.get(`${endpoint}/single/:id/`, async (req, res) => {
    const _id = req.params.id
    try{
        const organizationSingle = await OrganizationModel.findById(_id)
        res.status(200).send(organizationSingle).end()
    }catch(err){
        console.error(err)
        res.status(400).send(err).end()
    }
})

// DELETE organization by _id
OrganizationRouter.delete(`${endpoint}/delete/:id/`, async (req, res) => {
    const _id = req.params.id
    try{
        const organizationDelete = await OrganizationModel.findByIdAndRemove(_id)
        res.status(201).send(organizationDelete).end()
    }catch(err){
        console.error(err)
        res.status(400).send(err).end()
    }
})

// PUT organization by _id
OrganizationRouter.put(`${endpoint}/update/:id/`, async (req, res) => {
    const _id = req.params.id
    try{
        const organizationUpdate = await OrganizationModel.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        res.status(201).send(organizationUpdate).end()
    }catch(err){
        console.error(err)
        res.status(400).send(err).end()
    }
})

module.exports = OrganizationRouter
