import express from 'express'
import userRoute from './src/routes/user.route.mjs'
import casesRoute from './src/routes/cases.route.mjs'
import contractRoute from './src/routes/contract.route.mjs'
const app = express()

//midddlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//router
app.use(userRoute)
app.use(casesRoute)
app.use(contractRoute)

app.listen(4000)
