import { faker } from '@faker-js/faker'
import CardProductMock from '../CardProduct/CardProduct.mock'

const SHOWCASE_MOCK = {
    title: faker.commerce.product(),
    items: [
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
        CardProductMock(),
    ]
}

export default SHOWCASE_MOCK