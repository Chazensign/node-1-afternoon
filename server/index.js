const express = require('express')
const app = express()
const getProd = require('./getProducts')

app.get("/api/products", getProd.getProducts)
app.get("/api/product/:id", getProd.getProduct)








const port = 4000
app.listen(port, () => console.log(`server listening on port ${port}`))
