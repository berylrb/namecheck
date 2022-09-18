import mongoose from 'mongoose'


const Schema = mongoose.Schema


const nameSchema = new Schema({
  name: String,
  age: Number,
  count: Number,
})


const Name = mongoose.model('Name', nameSchema)

export {
  Name
}