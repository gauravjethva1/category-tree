import mongoose from 'mongoose'

const connectToMongoDB = async () => {
  mongoose.Promise = global.Promise

  try {
    const { connection } = await mongoose.connect(
      process.env.DB_CONNECTION_URL!
    )

    console.log('*********************************')
    console.log('*   Connected to MongoDB')
    console.log(`*   DB Host  : ${connection.host}`)
    console.log('*********************************')
  } catch (error) {
    console.error(`\nError connecting to DB:\n* ${error}\n`)
    process.exit(1)
  }
}

mongoose.connection.on('error', console.error)

export default connectToMongoDB
