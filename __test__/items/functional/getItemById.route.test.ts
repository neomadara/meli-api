import request from "supertest";
import app from "../../../app";
import axios from 'axios';
import itemDataMock from '../../../__mocks__/items/itemDataMock.json';
import descriptionDataMock from '../../../__mocks__/items/descriptionDataMock.json';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Get Item By Id Route', () => {

  it('Should validate if id query params was not empty',  async () => {
    const res = await request(app).get("/api/items/")
    expect(res.status).toEqual(400)
  })

  it('Should search am item by id ', async () => {
    const itemId = 'MLA1389811759';

    mockedAxios.get.mockResolvedValueOnce({ data: itemDataMock });
    mockedAxios.get.mockResolvedValueOnce({ data: descriptionDataMock });

    const res = await request(app).get(`/api/items/${itemId}`)

    expect(res.status).toEqual(200)

    expect(res.body).toEqual({
      author: {
        name: 'Cristian',
        lastname: 'Gutierrez',
      },
      item: {
        id: 'MLA1389811759',
        title: 'Mountain Bike Infantil Gts 3309 R16 Color Negro/naranja  ',
        price: {
          currency: 'ARS',
          amount: 254000,
          decimals: 2
        },
        picture: 'http://http2.mlstatic.com/D_957292-MLA69946591647_062023-I.jpg',
        condition: 'new',
        free_shipping: true,
        sold_quantity: 1,
        description: 'La bicicleta es uno de los vehículos más elegidos como medio de transporte, y esta tendencia se incrementó aún más con la pandemia del coronavirus. Además de su uso para fines recreativos y deportivos, tiene un impacto muy positivo en el ambiente y el bienestar de personas de todas las edades. Sus beneficios son múltiples: es accesible, ocupa poco espacio, no genera contaminación y hace bien a la salud. ¡Sumate a esta ola sustentable que avanza en todo el mundo!\n\nDesafiá tus capacidades\nLas mountain bikes, o bicicletas de montaña son el medio de transporte perfecto para tus aventuras y alcanzar aquellos lugares recónditos que querés conocer. Sus materiales y diseños están pensados para la acción, son resistentes y cuentan con mejor maniobrabilidad que otros modelos brindándote mayor tracción. Además, sus llantas con dibujos marcados favorecen el agarre en terrenos difíciles.\n\nBalance y estabilidad en sus primeros pasos\nSi estás buscando confort y seguridad, las bicis infantiles son lo que necesitás. Combinan múltiples funcionalidades para que niñas y niños aprendan y disfruten de las actividades al aire libre.'
      },
    });

  })

})
