import { faker } from '@faker-js/faker'

export default () => ({
    id: faker.string.uuid(),
    image: faker.image.urlLoremFlickr({ category: 'food', width: 200, height: 200 }),
    name: faker.commerce.productName(),
    price: faker.commerce.price({ symbol: 'R$ ' })
})