const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json())
app.use(morgan("dev"))
app.use(
    cors({
        origin: '*',
        methods: "GET"
    }));

app.get('/', (req,res)=>{
    knex('checkpoint')
        .select('*')
        .then(data => {
            res.status(200).json(data[0].input);
        })
        .catch(err => res.status(404).send('File Not Found'))
})

const port = 3001
app.listen(port, () => console.log(`app listening at port ${port}`))