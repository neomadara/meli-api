import axios from 'axios';
import request from "supertest"
import app from "../../../app";
import GetItemsMock from '../../../__mocks__/items/GetItemsMock.json';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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

  it('Should search items by query with a result', async () => {
    mockedAxios.get.mockResolvedValue({
      data: GetItemsMock
    });

    const res = await request(app).get("/api/items?q=computador")

    expect(res.status).toEqual(200)

    expect(res.body).toEqual({
      author: {
        name: 'Cristian',
        lastname: 'Gutierrez',
      },
      categories: ['Notebooks y Accesorios', 'PC de Escritorio', 'Componentes de PC'],
      items: [
        {
          id: 'MLA1781352704',
          title: 'Notebook Hp Probook 440 G9 Intel I7 14 32gb Ram 512gb Ssd',
          price: {
            currency: 'ARS',
            amount: 1419820,
            decimals: 1
          },
          picture: 'http://http2.mlstatic.com/D_668744-MLA76521259437_052024-I.jpg',
          condition: 'new',
          free_shipping: true
        },
        {
          id: 'MLA1433443961',
          title: 'Ordenador Pc Cpu Core I5 16 Gb Memoria Ram Ssd 480 Gb Wifi Windows 10',
          price: {
            currency: 'ARS',
            amount: 277174,
            decimals: 1
          },
          picture: 'http://http2.mlstatic.com/D_953893-MLU74993269248_032024-I.jpg',
          condition: 'new',
          free_shipping: true
        },
      ]
    });
  })

  it.todo('Should search items by query without  a result')
})
