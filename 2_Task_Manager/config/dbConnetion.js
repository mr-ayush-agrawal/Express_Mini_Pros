const mongoose = require('mongoose')

// const connectDB = async (req, res) => {
//     try {
//         const connect = await 
//         console.log('Database connected')
//     }
//     catch (err) {
//         console.log("Couldn't connect database : ", err);
//         process.exit(-1);
//     }
// }

mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=> console.log('Database connected'))
    .catch((err) => {
        console.log("Couldn't connect database : ", err);
        process.exit(-1);
    });
