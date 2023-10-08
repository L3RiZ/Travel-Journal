import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()
const port = process.env.PORT || 5005

app.get("/", (req, res) => {
    res.send("Server is ready")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
