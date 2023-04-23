const fs = require('fs')
require("dotenv").config();
const connectDB = require("./db/connect.js");
const SampleData = require('./models/SampleData.js')

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        await SampleData.deleteMany()

        const jsonItems = JSON.parse(fs.readFileSync(`./sample_data.json`, "utf-8"))
        let itemResult = []
        for (const item of jsonItems){
            const income = item.income.slice(1)
            const newItem = {
                id:item.id,
                first_name:item.first_name,
                last_name:item.last_name,
                email:item.email,
                gender:item.gender,
                income:parseFloat(income),
                city:item.city,
                car:item.car,
                quote:item.quote,
                phone_price:parseInt(item.phone_price)
            }
            itemResult = [...itemResult, newItem]
        }
        
        await SampleData.create(itemResult)
        console.log('Success!!!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
    // const users = JSON.parse(fs.readFileSync(`./sample_data.json`, "utf-8"))
    // console.log(users);
}

start()