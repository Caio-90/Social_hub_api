import "reflect-metadata"
import AppDataSource from "./AppDataSource"
import express from "express"
import cors from "cors"
import routes from "./routes/routes"
import swagger from "./swagger"
const { PORT = 3000 } = process.env

void async function () {
	await AppDataSource.initialize()
	const app = express()	
	app.use(cors())
	app.use(express.json())
	app.use(routes)
	app.listen(PORT, () => console.log(`⚡ server is running on ${PORT}!`))
	swagger(app)
}();