const express = require('express')
const server = express()
const db = require('./utilities/db-connect')
const pub = `${__dirname}/public/`

server.use(express.static(pub))
server.use(express.json())

const OrganizationRouter = require('./router/organization-router')
server.use(OrganizationRouter)


if(!module.parent) {
    server.listen('3500', () => console.log('Server running on post 3500'))
 }else{
    server.listen('3000', () => console.log('Server running on post 3000'))
 }

module.exports = server