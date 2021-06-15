const express = require('express')
const router = new express.Router()

const USERS = [{ id: 1, user1: 'joelserboi' }, { id: 2, user2: 'joelserboiser' }]

router.get('/', (req, res) => {
    res.json({ users: USERS })
})

router.get('/:id', (req, res) => {
    const user = USERS.find(u => u.id === +req.params.id)
    req.params.id
    res.json({ user })
})



module.exports = router

