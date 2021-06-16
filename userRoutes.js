const express = require('express')
const router = new express.Router()

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this);
    }
}

router.get('/', (req, res) => {
    res.json({ items: items })
})

router.post('/', (req, res) => {
    const newItem = new Item(req.body.name, req.body.price)
    console.log(newItem)
    return res.json({ added: newItem })
})


router.get('/:name', (req, res) => {
    const item = items.find(u => u.name === req.params.name)

    res.json({ item })
})

router.patch('/:name', (req, res) => {
    const item = items.find(u => u.name === req.params.name)
    item.name = req.body.name
    item.price = req.body.price
    res.json({ updated: item })
})

router.delete('/:name', (req, res) => {
    const item = items.find(u => u.name === req.params.name)
    const deleteIndex = items.indexOf(item)
    items.splice(deleteIndex, 1)
    res.json({ message: "DELETED" })
})

module.exports = router