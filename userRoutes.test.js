process.env.NODE_ENV = "test";

const request = require("supertest")

const app = require("./app")

let items = require("./fakeDb")

let item = { name: "blender", price: 20.00 }

beforeEach(async function () {
    items.push(item)
})

afterEach(async function () {
    items = []
})

describe("GET /items", function () {
    test("Get all items in db", async function () {
        const response = await request(app).get('/items')
        const { items } = response.body
        expect(response.statusCode).toBe(200)
        expect(items).toHaveLength(1)
    })
})

describe("POST /items", function () {
    test("add new item to items route", async function () {
        const response = await request(app).post('/items').send({ name: "testitem", price: 2 })
        expect(response.statusCode).toBe(200)
        expect(response.body.added.name).toEqual("testitem")
        expect(response.body.added.price).toEqual(2)
    })
})


describe("PATCH /items/:name", function () {
    test("patch item in route", async function () {
        const response = await request(app).patch(`/items/${item.name}`).send({ name: "testitem", price: 2 })
        expect(response.statusCode).toBe(200)
        expect(response.body.updated.name).toEqual("testitem")
        expect(response.body.updated.price).toEqual(2)
    })
})

describe("DELETE /items/:name", function () {
    test("delete item in route", async function () {
        const response = await request(app).delete(`/items/${item.name}`)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ message: "DELETED" })
    })
})