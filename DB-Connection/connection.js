const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('MongoDb Atles connected to EMS Server!!!');
}).catch((err)=>{
    console.log(`Mongodb Connection failed !!! Error: ${err}`);
})