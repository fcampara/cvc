const faker = require('faker')

module.exports = () => {
  const max = faker.datatype.number(50)
  const MAX_BROKERS = 5
  const data = {
    hotels: [],
    brokers: [],
  }

  for (let i = 0; i < MAX_BROKERS; i++) {
    data.brokers.push({ id: i, name: `BROKER ${i + 1}` })
  }

  for (let i = 0; i < max; i++) {
    const brokerIndex = faker.datatype.number(MAX_BROKERS - 1)
    const maxRooms = faker.datatype.number(5)
    const broker = data.brokers[brokerIndex]
    const rooms = []
    for (let j = 0; j < maxRooms; j++) {
      rooms.push({
        roomId: faker.datatype.number(),
        name: faker.name.firstName(),
        priceDailyOld: faker.datatype.number(),
        priceDaily: faker.datatype.number(),
        priceTotal: faker.datatype.number(),
        discountPercent: faker.datatype.number(),
        hasPromotion: faker.datatype.boolean(),
      })
    }

    data.hotels.push({
      id: faker.datatype.number(),
      name: faker.name.firstName(),
      broker: broker.name,
      description: faker.lorem.words(5),
      award: faker.datatype.number(3),
      isPreferential: faker.datatype.boolean(),
      totalDailys: faker.datatype.number(30),
      rooms,
    })
  }

  return data
}
