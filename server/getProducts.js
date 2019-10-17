const products = require("../products.json")

module.exports = {
  getProducts: (req, res) => {
    if (req.query.price) {
      const product = products.filter(obj => {
        return obj.price >= req.query.price  
      })
      res.status(200).send(product)
    } else if (req.query.product_name) {
      console.log(req.query.product_name)

      const product = products.filter(obj => {
       if (obj.product_name.toLowerCase().includes(req.query.product_name.toLowerCase())) {
         return obj
       }
      })
      res.status(200).send(product)
    }
    else {
      res.status(200).send(products)
    }
  },
  getProduct: (req, res) => {
    const product = products.find(obj => {
      return +obj.id === +req.params.id
    })
    if (product) {
      return res.status(200).send(product)
    }
    res.status(500).send("No product with that id")
  }
}
