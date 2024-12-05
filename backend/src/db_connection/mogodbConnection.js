import { connect } from 'mongoose'

export const connectToMongoDB = async() =>{
    
    try {
        await connect(process.env.MONGODB_URL)
        console.log("Connected Successfully")
    } catch (error) {
        console.log(error)
        
        
    }
}