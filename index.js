require("dotenv").config()
const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.send("Hello Express")
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
