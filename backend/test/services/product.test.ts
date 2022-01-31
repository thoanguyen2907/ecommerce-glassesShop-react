import Product, { ProductDocument } from '../../src/models/Product'
import ProductService from '../../src/services/Product'
import connect, { MongodHelper } from '../db-helper'

const nonExistingProductId = '5e57b77b5744fa0b461c7906'

async function createProduct() {
  const product = new Product({
    name: "RAY-BAN MONOCHROMS 03",
    color : ["black","blue"],
    price : "150",
    description:"At CELINE the idea of Parisian chic, with savoir-faire and the finest quality",
    category : "61ad29d4520b1921c2c33fb8",
    productImg: "https://i.postimg.cc/N0HsJK7d/celine-01.jpg",
    virtualImg: "https://i.postimg.cc/bNwzXC9D/v1.png", 
    popular : true,
    brand : "Ray-Ban",
    newArrival: true,
    size : ["s","m"]
  })
  return await ProductService.create(product)
}

describe('product service', () => {
  let mongodHelper: MongodHelper

  beforeAll(async () => {
    mongodHelper = await connect()
  })

  afterEach(async () => {
    await mongodHelper.clearDatabase()
  })

  afterAll(async () => {
    await mongodHelper.closeDatabase()
  })

  it('should create a product', async () => {
    const product = await createProduct()
    expect(product).toHaveProperty('_id')
    expect(product).toHaveProperty('name', 'RAY-BAN MONOCHROMS 03')
    expect(product).toHaveProperty('duration', 90)
  })

  it('should get a product with id', async () => {
    const product = await createProduct()
    const found = await ProductService.findById(product._id)
    expect(found.name).toEqual(product.name)
    expect(found._id).toEqual(product._id)
  })

  // Check https://jestjs.io/docs/en/asynchronous for more info about
  // how to test async code, especially with error
  it('should not get a non-existing product', async () => {
    expect.assertions(1)
    return ProductService.findById(nonExistingProductId).catch((e) => {
      expect(e.message).toMatch(`Product ${nonExistingProductId} not found`)
    })
  })

  it('should update an existing product', async () => {
    const product = await createProduct()
    const update = {
      name: 'RAY-BAN MONOCHROMS 05'
    }
    const updated = await ProductService.update(product._id, update)
    expect(updated).toHaveProperty('_id', product._id)
    expect(updated).toHaveProperty('name', 'RAY-BAN MONOCHROMS 05')
    expect(updated).toHaveProperty('newArrival', true)
  })

  it('should not update a non-existing product', async () => {
    expect.assertions(1)
    const update = {
      name: "RAY-BAN MONOCHROMS 05"
    }

    return ProductService.update(nonExistingProductId, update).catch((e) => {
      expect(e.message).toMatch(`Product ${nonExistingProductId} not found`)
    })
  })

  it('should delete an existing product', async () => {
    expect.assertions(1)
    const product = await createProduct()
    await ProductService.deleteProduct(product._id)
    return ProductService.findById(product._id).catch((e) => {
      expect(e.message).toBe(`Product ${product._id} not found`)
    })
  })
})
