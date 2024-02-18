const Product = require('../Model/productModel')

const getAllProStaic = async (req, res) => {
    const search = 'ab'
    const products = await Product.find({}).sort('company -price')

    res.status(200).json({ products, nbHits: products.length })
}

const getAllPro = async (req, res) => {

    const { featured, company, name, sort, feild } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }

    let result = Product.find(queryObject)
    if (sort) {
        const sList = sort.split(',').join(' ')
        console.log(sList)
        result.sort(sList)
    }
    else {
        result = result.sort('createdAt')
    }

    if (feild) {
        const feildList = feild.split(',').join(' ')
        result = result.select(feildList)
    }

    
    const products = await result
    res.status(200).json({ products, nbHits: products.length })
}

module.exports = { getAllPro, getAllProStaic }