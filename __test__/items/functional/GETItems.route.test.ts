import request from "supertest"
import app from "../../../app"

describe('Get Items Route',() => {
  it('Should have an search value in their query params', async () => {
    const res = await request(app).get("/items?anything=123")
    console.log(res);

    expect(res.status).toEqual(409)
    expect(res.body).toHaveProperty('issues')
  })
  // it.todo('Should search for item if the value /*id*/ exists in the query params')
})
