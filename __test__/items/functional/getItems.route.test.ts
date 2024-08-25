import request from "supertest"
import app from "../../../app";

describe('Get Items Route', () => {

  it('Should validate a search value in their query params', async () => {
    const res = await request(app).get("/api/items?search=autos de juguete")
    expect(res.status).toEqual(400)
  })

  it('Should validate if search query params was not empty', async () => {
    const res = await request(app).get("/api/items?q=")

    expect(res.status).toEqual(400)
    expect(res.body.issues[0].message).toEqual('q is empty')
  })

  it.todo('Should search items by query with a result')

  it.todo('Should search items by query without  a result')

})
