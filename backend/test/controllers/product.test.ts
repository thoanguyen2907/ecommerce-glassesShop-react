import request from 'supertest'
import { ProductDocument } from '../../src/models/Product'
import app from '../../src/app'
import connect, { MongodHelper } from '../db-helper'
import '@types/jest';
const nonExistingProductId = '5e57b77b5744fa0b461c7906'

async function createProduct(override?: Partial<ProductDocument>) {
  let product = {
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
  }

  if (override) {
    product = { ...product, ...override }
  }

  return await request(app).post('/api/v1/products').send(product)
}

describe('product controller', () => {
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
    const res = await createProduct()
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('_id')
    expect(res.body.name).toBe('RAY-BAN MONOCHROMS 03')
  })

  it('should not create a product with wrong data', async () => {
    const res = await request(app)
      .post('/api/v1/products')
      .send({
        name: "RAY-BAN MONOCHROMS 03",
        color : ["black","blue"],
        price : "150",
        // description:"At CELINE the idea of Parisian chic, with savoir-faire and the finest quality",
        // category : "61ad29d4520b1921c2c33fb8",
        // productImg: "https://i.postimg.cc/N0HsJK7d/celine-01.jpg",
        // virtualImg: "https://i.postimg.cc/bNwzXC9D/v1.png", 
        popular : true,
        brand : "Ray-Ban",
        newArrival: true,
        size : ["s","m"]
      })
    expect(res.status).toBe(400)
  })

  it('should get back an existing product', async () => {
    let res = await createProduct()
    expect(res.status).toBe(200)

    const productId = res.body._id
    res = await request(app).get(`/api/v1/products/${productId}`)

    expect(res.body._id).toEqual(productId)
  })

  it('should not get back a non-existing product', async () => {
    const res = await request(app).get(`/api/v1/products/${nonExistingProductId}`)
    expect(res.status).toBe(404)
  })

  it('should get back all product', async () => {
    const res1 = await createProduct({
      name: "RAY-BAN MONOCHROMS 03",
      color : ['black'],
      price : "150",
      description:"At CELINE the idea of Parisian chic, with savoir-faire and the finest quality",
      category : "61ad29d4520b1921c2c33fb8",
      productImg: "https://i.postimg.cc/N0HsJK7d/celine-01.jpg",
      virtualImg: "https://i.postimg.cc/bNwzXC9D/v1.png", 
      popular : true,
      brand : "Ray-Ban",
      newArrival: true,
      size : ['s']
    })
    const res2 = await createProduct({
      name: "SQUARE SUNGLASSES",
      color : ['blue'],
      price : "180",
      description:"At CELINE the idea of Parisian chic, with savoir-faire and the finest quality",
      category : "61ad29d4520b1921c2c33fb8",
      productImg: "https://i.postimg.cc/N0HsJK7d/celine-01.jpg",
      virtualImg: "https://i.postimg.cc/bNwzXC9D/v1.png", 
      popular : true,
      brand : "Ray-Ban",
      newArrival: true,
      size : ['s']
    })

    const res3 = await request(app).get('/api/v1/products')

    expect(res3.body.length).toEqual(2)
    expect(res3.body[0]._id).toEqual(res1.body._id)
    expect(res3.body[1]._id).toEqual(res2.body._id)
  })

  it('should update an existing product', async () => {
    let res = await createProduct()
    expect(res.status).toBe(200)

    const productId = res.body._id
    const update = {
      name: "RAY-BAN MONOCHROMS 05",
      color : ['black'],
      price : "150",
      description:"At CELINE the idea of Parisian chic, with savoir-faire and the finest quality",
      category : "61ad29d4520b1921c2c33fb8",
      productImg: "https://i.postimg.cc/N0HsJK7d/celine-01.jpg",
      virtualImg: "https://i.postimg.cc/bNwzXC9D/v1.png", 
      popular : true,
      brand : "Ray-Ban",
      newArrival: true,
      size : ['s']
    }

    res = await request(app).put(`/api/v1/products/${productId}`).send(update)

    expect(res.status).toEqual(200)
    expect(res.body.name).toEqual('RAY-BAN MONOCHROMS 05')
    expect(res.body.newArrival).toEqual(true)
  })

  it('should delete an existing movie', async () => {
    let res = await createProduct()
    expect(res.status).toBe(200)
    const productId = res.body._id

    res = await request(app).delete(`/api/v1/products/${productId}`)

    expect(res.status).toEqual(204)

    res = await request(app).get(`/api/v1/products/${productId}`)
    expect(res.status).toBe(404)
  })
})
