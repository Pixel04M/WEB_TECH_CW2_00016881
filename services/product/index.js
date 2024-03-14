const fs = require('fs')

// access global mock db file
const products = require(global.mock_db)

// write service method implementations
const product_service = {
    // Get all products
    getAll() {
        return products
    },
    // Get product by id
    getById(id) {
        return products.find(p => p.id == id)
    },    
    // Create a new product
    create(req, res) {
        let new_id = genRandId(4)
                
        const product = req.body

        const new_product = {
            id: new_id,
            product: product
        }

        products.push(new_product)
        
        writeToFile(products)
        
        return new_product
    },
    // Update a product
    update(id, updateData){
        const productIndex = products.findIndex(p => p.id == id)

        if (productIndex === -1) {
            return null
        }

        products[productIndex].product = { ...products[productIndex].product, ...updateData }

        writeToFile(products)

        return products[productIndex]
    },
    // Delete a product
    delete(id) {
        const index = products.findIndex(p => p.id == id)
        products.splice(index, 1)    
        writeToFile(products)
    }
}

// create function for overwriting the db file with updated product content
let writeToFile = async (products) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                products, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = product_service
