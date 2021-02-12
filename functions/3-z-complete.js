require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
    .base('appTGZZC6hVBtijJs')
    .table('products')

exports.handler = async(event, context, cb) => {
    console.log(event)
    const {id} = event.queryStringParameters
    if(id) {
        try {
            const product = await airtable.retrieve(id)
            if(product.error) {
                return {
                    statusCode: 404,
                    body: `No product with id: ${id}`
                }
            }
            else {
                return {
                    statusCode: 200,
                    body: JSON.stringify(product),
                }
            }
            // console.log(product)
        }
        catch(error) {
            return {
                statusCode: 500,
                body: `Server Error`
            }
        }
    }
    try {
        const { records } = await airtable.list()
        console.log(records)
        const products = records.map((product) => {
            const {id} = product
            const { price, name, image } = product.fields
            const url = image[0].url
            return {id, name, url, price}
        })
        
        return {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            statusCode: 200,
            body: JSON.stringify(products)
        } 
    }
    catch(error) {
        return {
            statusCode: 500,
            body: 'Server Error'
        }
    }


}

